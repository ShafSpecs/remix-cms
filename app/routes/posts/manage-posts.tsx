import { Link, useLoaderData } from "remix";
import { DiGitBranch } from "react-icons/di";
import { PostsData } from "~/utils/server/github.server";

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
		const { frontmatter } = post
		return frontmatter
	})

	return frontmatter
}

export function Card({ title, published }: any) {
  return (
    <Link to="/">
      <div className="card">
        <h2 className="title">{title}</h2>
        <div className="spans">
          <span>Last Edited: 2 weeks ago</span>
          <span>Published: 2 weeks ago</span>
        </div>
        <div className="branch">
          <DiGitBranch />
        </div>
      </div>
    </Link>
  );
}

export default function Manage() {
	const data = useLoaderData();
  return (
    <div className="manage">
      {data.map((post: any) => {
				return (
					<Card key={post.id} title={post.title} published={post.published} />
				)
			})}
    </div>
  );
}
