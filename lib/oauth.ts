import { GitHub } from "arctic";

export const github = new GitHub(
	process.env.AUTH_GITHUB_ID!,
	process.env.AUTH_GITHUB_SECRET!,
	null
);
