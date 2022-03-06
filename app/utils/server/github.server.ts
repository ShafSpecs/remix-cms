import { Octokit } from "@octokit/core";
import { Octokit as RestOcto } from "@octokit/rest";
import { Repo } from "../handlers/github-api";
import sha512 from 'crypto-js/sha512';

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
  const postsInfo = posts.data.map((post: PostData) => {
    const { name, download_url, sha } = post;
    return { name, download_url, sha };
  });

  return postsInfo
}

export async function createPost(slug: string, commit: string, content: string) {
  const post = Buffer.from(content).toString("base64");
  const sha = sha512(post).toString();

  const createdPost = await octokit.request(
    "PUT /repos/{owner}/{repo}/contents/{path}",
    {
      ...Repo,
      path: `posts/${slug}.md`,
      message: commit,
      content: post
    }
  );

  return createdPost;
}

export async function updatePost(slug: string, commit: string, content: string, sha: string) {
  const post = Buffer.from(content).toString("base64");

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
