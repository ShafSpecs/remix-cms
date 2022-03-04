import React, { useState, useRef, useEffect } from "react";
import { Form, useFetcher, useLoaderData, useTransition } from "remix";
import { ClientOnly } from "remix-utils";
import Monaco from "~/utils/client/monaco.client";
import { TabSelector } from "~/components/TabSelector";
import { TabPanel, useTabs } from "~/components/Tab";
import { Widget } from "@uploadcare/react-widget";
import { PostsData } from "~/utils/server/github.server";
import { MarkdownHandler } from '../../utils/client/markdown.client';

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
  return { message: "No action" };
};

export const loader: LoaderFunction = async ({ params }) => {
  const slug = params.slug;

  if (slug === "new") {
    return {
      loaderData: null,
    };
  } else {
    const postsInfo = await PostsData();
    const currentPost = postsInfo.find(
      (post: any) => post.name.split(".")[0] === slug
    );
    const postContent = await fetch(currentPost.download_url).then((res) =>
      res.text()
    );

    return {
      loaderData: postContent,
    };
  }
};

export default function New() {
  const { loaderData } = useLoaderData();
  const transition = useTransition();

  const rawText = loaderData ? loaderData : "";
  const content = loaderData
    ? loaderData.substring(loaderData.indexOf("---", 4) + 3).trim()
    : "";

  // Initiate an empty object for the frontmatter content
  let frontmatter: any = {};

  // Get the front-matter from the post
  let yaml: string | null = loaderData ? loaderData.split("---")[1] : null;

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
  const [selectedTab, setSelectedTab] = useTabs(["Markdown", "Preview"]);

  const editorRef = useRef<HTMLDivElement>(null!);
  const widgetRef = useRef<WidgetAPI | null>(null);
  const blogRef = useRef<HTMLDivElement>(null!);

  return (
    <div className="dive">
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
            onClick={() => setSelectedTab("Preview")}
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
            <section className="markdown-body" ref={blogRef}></section>
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
    </div>
  );
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return <div>Oh oh! {error.message}</div>;
};
