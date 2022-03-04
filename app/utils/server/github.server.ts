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

export async function PostsList() {
  const posts = await getPosts();

  //@ts-ignore
  const postsInfo = posts.data.map((post: PostData) => {
    const { name, download_url, sha } = post;
    return { name, download_url, sha };
  });

  const list = await postsInfo.map(async (post: any) => {
    const postContent = await fetch(post.download_url).then((res) =>
      res.text()
    );

    // Get the front-matter from the post
    let yaml = postContent.split("---")[1];
    let frontmatter: any = {};

    // Transform the front-matter into object-ready state
    yaml.split(/\r?\n/g).map((line) => {
      if (line.length > 0 && line.includes(":")) {
        let key: string | string[] = line.split(":");

        if (key.length > 2) {
          key[1] = key.slice(1).join(":");
          key.splice(-1);
        }

        // Push each key-value pair into the data object
        frontmatter[key[0]] = key[1].replace(" ", "");
        return line;
      }

      return line;
    });

    return {
      name: post.name,
      sha: post.sha,
      frontmatter,
    };
  });

  console.log(list)
  return list;
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
