import { Octokit } from "@octokit/core";
import { Repo } from "../handlers/github-api";
const grayMatter = require("gray-matter")

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

interface PostData {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
  _links: {
    git: string;
    self: string;
    html: string;
  };
}

// Get all posts from the repository
async function getPosts() {
  const postDir = await octokit.request(
    "GET /repos/{owner}/{repo}/contents/{path}",
    {
      ...Repo,
      path: "posts",
    }
  );

  return postDir;
}

/*
 *  Extract required post data from the GitHub API response
 *
 */

export async function PostsData() {
  const posts = await getPosts();

  //@ts-ignore
  const postsInfo = Promise.all(posts.data.map(async (post: PostData) => {
    const { name, download_url, sha } = post;
    const content = await fetch(download_url).then(res => res.text())
    const { data } = grayMatter(content);

    return { name, sha, frontmatter: data, content };
  }));

  return postsInfo;
}

export async function createPost(
  slug: string,
  commit: string,
  content: string,
  published: boolean
) {
  const post = Buffer.from(content).toString("base64");
  // if (published) {
  const createdPost = await octokit.request(
    "PUT /repos/{owner}/{repo}/contents/{path}",
    {
      ...Repo,
      path: `posts/${slug}.md`,
      message: commit,
      content: post,
    }
  );

  return createdPost;
  // } else {
  //   const main = await octokit.request(
  //     "GET /repos/{owner}/{repo}/git/ref/heads/main",
  //     {
  //       ...Repo,
  //     }
  //   );

  //   //@ts-ignore
  //   const hash = main.object.sha;

  //   const newBranch = await octokit.request(
  //     "POST /repos/{owner}/{repo}/git/refs",
  //     {
  //       ...Repo,
  //       ref: `refs/heads/${slug}`,
  //       sha: hash,
  //     }
  //   );

  //   console.log(newBranch);

  //   const createdPost = await octokit.request(
  //     "PUT /repos/{owner}/{repo}/contents/{path}",
  //     {
  //       ...Repo,
  //       path: `posts/${slug}.md`,
  //       message: commit,
  //       content: post,
  //       branch: slug,
  //     }
  //   );

  //   return createdPost;
  // }
}

export async function updatePost(
  slug: string,
  commit: string,
  content: string,
  sha: string,
  published: boolean
) {
  const post = Buffer.from(content).toString("base64");

  // if (published) {
  const updatedPost = await octokit.request(
    "PUT /repos/{owner}/{repo}/contents/{path}",
    {
      ...Repo,
      path: `posts/${slug}.md`,
      message: commit,
      content: post,
      sha: sha,
    }
  );
  // } else {
  //   const updatedPost = await octokit.request(
  //     "PUT /repos/{owner}/{repo}/contents/{path}",
  //     {
  //       ...Repo,
  //       path: `posts/${slug}.md`,
  //       message: commit,
  //       content: post,
  //       sha: sha,
  //       branch: slug,
  //     }
  //   );
  return updatedPost;
}

export async function deletePost(slug: string) {
  const deletedPost = await octokit.request(
    "DELETE /repos/{owner}/{repo}/contents/{path}",
    {
      ...Repo,
      path: `posts/${slug}.md`,
      message: `Deleted post: ${slug}.md`,
      sha: "sha",
    }
  );

  return deletedPost;
}

export async function Md(text: any) {
  const texts = await octokit.request("POST /markdown", {
    text,
  });

  return texts;
}
