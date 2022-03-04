import { Octokit } from "@octokit/core";
import { Repo } from "../handlers/github-api";

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

export async function createPost(slug: string) {
  const createdPost = await octokit.request(
    "PUT /repos/{owner}/{repo}/contents/{path}",
    {
      ...Repo,
      path: `posts/${slug}.md`,
      message: `Created new post: ${slug}.md`,
      content: "content",
    }
  );

  return createdPost;
}

export async function updatePost(slug: string) {
  const updatedPost = await octokit.request(
    "PUT /repos/{owner}/{repo}/contents/{path}",
    {
      ...Repo,
      path: `posts/${slug}.md`,
      message: `Updated post: ${slug}.md`,
      content: "content",
      sha: "sha",
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
