import { Octokit } from "@octokit/core";
import { Repo } from "../handlers/github-api";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export async function getPosts() {
  const postDir = await octokit.request(
    "GET /repos/{owner}/{repo}/contents/{path}",
    {
      ...Repo,
      path: "posts"
    }
  );

  return postDir;
}

export async function createPost(slug: string) {
  const createdPost = await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", {
    ...Repo,
    path: `posts/${slug}.md`,
    message: `Created new post: ${slug}.md`,
    content: "content",
  });

  return createdPost;
}

export async function updatePost(slug: string) {
    const updatedPost = await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", {
        ...Repo,
        path: `posts/${slug}.md`,
        message: `Updated post: ${slug}.md`,
        content: "content",
    });

    return updatedPost;
}

export async function deletePost(slug: string) {
    const deletedPost = await octokit.request("DELETE /repos/{owner}/{repo}/contents/{path}", {
        ...Repo,
        path: `posts/${slug}.md`,
        message: `Deleted post: ${slug}.md`,
        sha: "sha"
    });

    return deletedPost
}