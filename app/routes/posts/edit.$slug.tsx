import React, { useState, useRef, useEffect } from "react";
import {
  Form,
  json,
  redirect,
  useFetcher,
  useLoaderData,
  useTransition,
} from "remix";
import { ClientOnly } from "remix-utils";
import Monaco from "~/utils/client/monaco.client";
import { TabSelector } from "~/components/TabSelector";
import { TabPanel, useTabs } from "~/components/Tab";
import { Widget } from "@uploadcare/react-widget";
import {
  PostsData,
  createPost,
  updatePost,
  Md,
} from "~/utils/server/github.server";
import { MarkdownHandler } from "../../utils/server/markdown.server";
import { DiGitMerge, DiGitPullRequest } from "react-icons/di";
import {
  getSession,
  commitSession,
  destroySession,
} from "~/utils/server/session.server";
import { supabase } from "~/utils/handlers/Supabase";

import type {
  LinksFunction,
  ActionFunction,
  LoaderFunction,
  ErrorBoundaryComponent,
} from "remix";
import type { WidgetAPI } from "@uploadcare/react-widget";

import style from "../../styles/new.css";
import github from "../../styles/github.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: style },
    { rel: "stylesheet", href: github },
  ];
};

export const action: ActionFunction = async ({ request, params }) => {
  const body = await request.formData();

  const type = body.get("type");

  if (type === "PARSE_MARKDOWN") {
    const markdown = body.get("markdown");
    //@ts-ignore
    // const parsed = MarkdownHandler(markdown);
    const parsed = await Md(markdown);
    return {
      data: parsed.data,
      type: "PARSE_MARKDOWN",
    };
  } else if (type === "COMMIT_POST") {
    const message = body.get("message");
    const sha = body.get("shaValue");
    const val = body.get("value");
    const title = body.get("title");
    const published = body.get("published");
    const slug = params.slug;

    const session = request.headers.get("Cookie");
    const sessionData = await getSession(session);

    //@ts-ignore
    if (slug === "new") {
      //@ts-ignore
      const data = await createPost(title, message, val, published);
      sessionData.set("new", true);
      sessionData.set("redirect", true);

      return redirect("/posts/edit/" + title, {
        headers: {
          "Set-Cookie": await commitSession(sessionData),
        },
      });
    } else {
      //@ts-ignore
      const data = await updatePost(slug, message, val, sha, published);
      sessionData.set("new", false);
      sessionData.set("redirect", true);

      return redirect("/posts/edit/" + title, {
        headers: {
          "Set-Cookie": await commitSession(sessionData),
        },
      });
    }
  }
  return { data: "No action", type: "NULL" };
};

export const loader: LoaderFunction = async ({ params, request }) => {
  const slug = params.slug;

  if (slug === "new") {
    return {
      loaderData: null,
      sha: null,
      new: null,
    };
  } else {
    const postsInfo = await PostsData();
    const currentPost = postsInfo.find(
      (post: any) => post.name.split(".")[0] === slug
    );
    const postContent = currentPost.content;

    const session = await getSession(request.headers.get("Cookie"));
    if (
      !session.has("redirect") ||
      session.get("redirect") === false ||
      !session.has("new")
    ) {
      request.headers.set("Cookie", await destroySession(session));
    }

    const newInfo = session.get("new");

    return {
      loaderData: postContent,
      sha: currentPost.sha,
      new: newInfo,
    };
  }
};

export default function New() {
  const { loaderData, sha, new: newExists } = useLoaderData();
  const transition = useTransition();
  const fetcher = useFetcher();

  const data = fetcher.data?.data;
  const type = fetcher.data?.type;

  const rawText = loaderData
    ? loaderData
    : `---\nid: uuid\ntitle: Title\ndescription: Description\ndate: 2022-01-01\nslug: post-slug\nimage: "Post's banner URL"\npublished: false\n---\n\n`;
  const content = loaderData
    ? loaderData.substring(loaderData.indexOf("---", 4) + 3).trim()
    : rawText.substring(rawText.indexOf("---", 4) + 3).trim();

  // Initiate an empty object for the frontmatter content
  let frontmatter: any = {};

  // Get the front-matter from the post
  let yaml: string | null = loaderData
    ? loaderData.split("---")[1]
    : rawText.split("---")[1];

  // Transform the front-matter into object-ready state
  yaml &&
    yaml.split(/\r?\n/g).map((line) => {
      if (line.length > 0 && line.includes(":")) {
        let key: string | string[] = line.split(":");

        if (key.length > 2) {
          key[1] = key.slice(1).join(":");
          key.splice(-1);
        }

        // Push each key-value pair into the frontmatter object
        frontmatter[key[0]] = key[1].replace(" ", "");
        return line;
      }
      return line;
    });

  const [value, setValue] = useState<string>(rawText);
  const [md, setMd] = useState<string>(content);
  const [parsed, setParsed] = useState<string>("");
  const [selectedTab, setSelectedTab] = useTabs(["Markdown", "Preview"]);
  const [slug, setSlug] = useState<string>("");
  const [status, setStatus] = useState<number>(0);

  const editorRef = useRef<HTMLDivElement>(null!);
  const widgetRef = useRef<WidgetAPI | null>(null);
  const blogRef = useRef<HTMLDivElement>(null!);
  const firstRender = useRef<boolean>(true);
  const commitRef = useRef<HTMLInputElement | null>(null);
  const submissionRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (firstRender.current) {
      if (document.referrer.includes("/new")) {
        setStatus(1);
        setTimeout(() => {
          setStatus(0);
        }, 7000);
      }
      setSlug(window.location.pathname.split("/")[3]);
      firstRender.current = false;
      return;
    }

    submissionRef.current && value === rawText
      ? (submissionRef.current.disabled = true)
      : submissionRef.current &&
        value !== rawText &&
        (submissionRef.current.disabled = false);

    const post = loaderData
      ? value.substring(loaderData.indexOf("---", 4) + 3).trim()
      : value.substring(value.indexOf("---", 4) + 3).trim();
    setMd(post);
  }, [value, loaderData]);

  useEffect(() => {
    if (data && type === "PARSE_MARKDOWN") {
      setParsed(data);
      //@ts-ignore
      blogRef.current.innerHTML = parsed;
    }
  }, [data, type, parsed]);

  useEffect(() => {
    if (
      newExists !== null &&
      //@ts-ignore
      window.performance.getEntriesByType("navigation")[0].type !==
        "back_forward"
    ) {
      if (sha) {
        setStatus(1);
        setTimeout(() => {
          setStatus(0);
        }, 5500);
      } else {
        setStatus(-1);
        setTimeout(() => {
          setStatus(0);
        }, 5500);
      }
    }
  }, [newExists, sha]);

  const yamlConverter = async () => {
    frontmatter = {};

    const yaml = value.split("---")[1];
    yaml.split(/\r?\n/g).map((line) => {
      if (line.length > 0 && line.includes(":")) {
        let key: string | string[] = line.split(":");

        if (key.length > 2) {
          key[1] = key.slice(1).join(":");
          key.splice(-1);
        }

        // Push each key-value pair into the frontmatter object
        frontmatter[key[0]] = key[1].replace(" ", "");
        return line;
      }
      return line;
    });

    return frontmatter;
  };

  const commitPost = async () => {
    const input = commitRef.current?.value;
    const shaValue = sha ? sha : "";
    const commitMessage =
      //@ts-ignore
      input.length > 0 && input !== "undefined"
        ? input
        : commitRef.current?.placeholder;

    const title = await yamlConverter().then((res: any) => {
      return {
        title: res.slug,
        published: res.published,
      };
    });

    fetcher.submit(
      //@ts-ignore
      {
        type: "COMMIT_POST",
        //@ts-ignore
        message: commitMessage,
        shaValue,
        value,
        title: title.title,
        published: title.published,
      },
      { method: "post" }
    );
  };

  return (
    <div className="dive">
      {status === 1 ? (
        <div className="pop-up success">
          <DiGitMerge />
          &nbsp;{`Successfully pushed ${frontmatter.title} to GitHub`}
        </div>
      ) : status === -1 ? (
        <div className="pop-up error">
          <DiGitPullRequest />
          &nbsp;{`Failed to push ${frontmatter.title} to GitHub`}
        </div>
      ) : null}
      <div className="monaco">
        <div className="editor-header">
          <TabSelector
            isActive={selectedTab === "Markdown"}
            onClick={() => setSelectedTab("Markdown")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width={24}
              height={24}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            {"  "}
            <span>Edit Post</span>
          </TabSelector>
          <TabSelector
            isActive={selectedTab === "Preview"}
            onClick={() => {
              setSelectedTab("Preview");
              fetcher.submit(
                { type: "PARSE_MARKDOWN", markdown: md },
                { method: "post" }
              );
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width={24}
              height={24}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            {"  "}
            <span>Preview</span>
          </TabSelector>
        </div>
        <div className="editor" ref={editorRef}>
          <TabPanel hidden={selectedTab !== "Markdown"}>
            <ClientOnly>
              <Monaco set={setValue} val={value} />
            </ClientOnly>
          </TabPanel>
          <TabPanel hidden={selectedTab !== "Preview"}>
            <section
              className="markdown-body"
              ref={blogRef}
              dangerouslySetInnerHTML={{ __html: parsed }}
            ></section>
          </TabPanel>
        </div>
        {selectedTab === "Markdown" && (
          <div
            className="editor-footer"
            onClick={() => widgetRef.current?.openDialog("file")}
          >
            <p>
              Drop files to upload media files or click area to browse files
            </p>
          </div>
        )}
        <Widget
          publicKey="54ab46b8383262703bfa"
          onChange={(info) => {
            setValue(`${value} ![alt description](${info.cdnUrl})`);
          }}
          multiple={true}
          imagesOnly={true}
          systemDialog={true}
          clearable={true}
          ref={widgetRef}
          preloader={null}
        />
      </div>
      <div className="commit">
        <Form className="form" onSubmit={commitPost}>
          <input
            type="text"
            placeholder={
              loaderData ? `Update ${slug}.md` : `Create a new blog post!`
            }
            className="commit-input"
            name="commit"
            ref={commitRef}
          />
          <button
            type="submit"
            className="commit-submit"
            onClick={commitPost}
            ref={submissionRef}
            disabled
          >
            {loaderData ? "Update Post" : "Create Post"}
          </button>
        </Form>
      </div>
    </div>
  );
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return <div>Oh oh! {error.message}</div>;
};
