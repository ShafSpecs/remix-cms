import { useState, useEffect, useRef } from "react";
import { useLoaderData, Link, useFetcher, useTransition } from "remix";
import { getCommit, PostsData } from "~/utils/server/github.server";
import { format, formatDistanceToNow } from "date-fns";

import type { LinksFunction, LoaderFunction } from "remix";

import style from "../../styles/overview.css";
import { DiGitBranch } from "react-icons/di";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: style,
    },
  ];
};

export const loader: LoaderFunction = async () => {
  const commits = await getCommit();

  return {
    commits: commits.data,
  };
};

export function PostCard() {
  return (
    <div className="card">
      <div className="front"></div>
    </div>
  );
}

export function Streak() {
  const squareRef = useRef<HTMLDivElement>(null);
  const getWeekNumber = (d: any) => {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));

    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));

    let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    //@ts-ignore
    let weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);

    return [d.getUTCFullYear(), weekNo];
  };
  return (
    <div className="streak-card">
      <div className="square" ref={squareRef}></div>
      <div className="square" ref={squareRef}></div>
      <div className="square" ref={squareRef}></div>
      <div className="square" ref={squareRef}></div>
      <div className="square" ref={squareRef}></div>
      <div className="square" ref={squareRef}></div>
      <div className="square" ref={squareRef}></div>
    </div>
  );
}

export function CommitCard({ commit }: any) {
  let date = new Date(commit.date);
  const newDate = formatDistanceToNow(new Date(date.toISOString()));

  return (
    <div className="commit">
      <h3>{commit.message}</h3>
      <div className="branch">
        <a href={commit.html_url} target="_blank" rel="noreferrer">
          <DiGitBranch />
        </a>
      </div>
      <div className="author">
        <img src={`${commit.avatar_url}`} alt="Author Alt." />
      </div>
      <div className="date">{newDate} ago</div>
      <div className="foot"></div>
    </div>
  );
}

export default function Post() {
  const data = useLoaderData();

  const commit: any[] = data?.commits;
  const commits =
    commit.length >= 6
      ? commit.slice(0, 6)
      : commit.slice(0, commit.length - 1);

  const commitData = commits?.map((commit: any) => {
    return {
      // title: commit.content.name,
      url: commit.url,
			html_url: commit.html_url,
      comments_url: commit.comments_url,
      message: commit.commit.message,
      date: commit.commit.author.date,
      comment_count: commit.commit.comment_count,
      avatar_url: commit.author.avatar_url,
    };
  });

  return (
    <div className="overview">
      <section className="edited">
        <h2>Recently Edited Posts:</h2>
        <div className="posts">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </section>
      {/* <section className="streak">
        <h2>Blogging Streak 🔥:</h2>
        <div>
          <Streak />
        </div>
        <div>Good Job!</div>
      </section> */}
      <section className="commits">
        <h2>Recent Commits:</h2>
        <div className="commit-card">
          {commitData.map((commit) => {
            return <CommitCard commit={commit} key={commit.url} />;
          })}
        </div>
      </section>
    </div>
  );
}
