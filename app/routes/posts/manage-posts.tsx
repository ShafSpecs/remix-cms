import { useEffect, useRef } from "react";
import { Link, useLoaderData } from "remix";
import { DiGitBranch } from "react-icons/di";
import { PostsData } from "~/utils/server/github.server";
import { format } from "date-fns";

import type { LinksFunction, LoaderFunction } from "remix";

import style from "../../styles/manage.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: style,
    },
  ];
};

export const loader: LoaderFunction = async () => {
  const data = await PostsData();
  const frontmatter = data.map((post: any) => {
    const { frontmatter } = post;
    return frontmatter;
  });

  return frontmatter;
};

export function Card({ title, published, slug, date }: any) {
  const publishedRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const stringedDate = date.toString();

    const match = stringedDate.match(/[^-]+/g);
    const formatted = format(
      new Date(match[0], match[1] - 1, match[2].slice(0, 2)),
      "MMMM dd, yyyy"
    );

    publishedRef.current && (publishedRef.current.innerText = `Published: ${formatted}`)
  }, [date]);
  return (
    <Link to={`/posts/edit/${slug}`}>
      <div className="card">
        <h2 className="title">{title}</h2>
        <div className="spans">
          <span ref={publishedRef}></span>
        </div>
        <div
          className="branch"
          style={published ? { color: "#008800" } : { color: "#800000" }}
        >
          <DiGitBranch />
        </div>
      </div>
    </Link>
  );
}

export default function Manage() {
  const data = useLoaderData();
  const mappedData = data.sort((a: any, b: any) => {
    return b.id - a.id;
  })
  return (
    <div className="manage">
      {mappedData.map((post: any) => {
        return (
          <Card
            key={post.id}
            title={post.title}
            published={post.published}
            slug={post.slug}
            date={post.date}
          />
        );
      })}
    </div>
  );
}
