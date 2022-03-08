import { NavLink, Outlet, redirect } from "remix";
import type { LinksFunction, LoaderFunction } from "remix";

import style from "../styles/posts.css";
import { useEffect, useRef } from "react";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: style }];
};

export default function Posts() {
  const activeClassName: string = "active-post-route";
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (window.location.pathname.includes("/edit/")) {
      ulRef.current?.children[2].classList.remove(activeClassName);
      ulRef.current?.children[0].classList.remove(activeClassName);
      ulRef.current?.children[1].classList.add(activeClassName);
    } else {
      ulRef.current?.children[1].classList.remove(activeClassName);
    }
  });

  return (
    <div>
      <h1 className="title">Posts</h1>
      <h3 className="desc">
        Edit posts & articles. Review stats and feedback..
      </h3>
      <nav className="navbar">
        <ul className="post-ul" ref={ulRef}>
          <NavLink
            to="/posts/overview"
            className={({ isActive }) => (isActive ? activeClassName : "")}
            reloadDocument={true}
          >
            <li>Overview</li>
          </NavLink>
          <NavLink
            to="/posts/edit/new"
            className={({ isActive }) => (isActive ? activeClassName : "")}
            end={false}
            reloadDocument={true}
          >
            <li>Write a post</li>
          </NavLink>
          <NavLink
            to="/posts/manage-posts"
            className={({ isActive }) => (isActive ? activeClassName : "")}
            reloadDocument={true}
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
