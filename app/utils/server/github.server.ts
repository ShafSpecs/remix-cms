import { Octokit } from "@octokit/core";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

(async () => {
  await octokit.request("GET /repos/{owner}/{repo}", {
    owner: "ShafSpecs",
    repo: "remix-cms",
  });
})();
