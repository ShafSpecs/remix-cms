import { NavLink, Outlet, redirect } from "remix";
import type { LinksFunction, LoaderFunction } from "remix";

import style from "../styles/posts.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: style }];
};

export default function Posts() {
  const activeClassName: string = "active-post-route";

  return (
    <div>
      <h1 className="title">Posts</h1>
      <h3 className="desc">
        Edit posts & articles. Review stats and feedback..
      </h3>
      <nav className="navbar">
        <ul className="post-ul">
          <NavLink
            to="/posts/overview"
            className={({ isActive }) => (isActive ? activeClassName : "")}
          >
            <li>Overview</li>
          </NavLink>
          <NavLink
            to="/posts/edit/new"
            className={({ isActive }) => (isActive ? activeClassName : "")}
            end={false}
          >
            <li>Write a post</li>
          </NavLink>
          <NavLink
            to="/posts/manage-post"
            className={({ isActive }) => (isActive ? activeClassName : "")}
          >
            <li>Manage articles</li>
          </NavLink>
        </ul>
      </nav>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}
