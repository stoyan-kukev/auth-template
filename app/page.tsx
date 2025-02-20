import { getCurrentSession, invalidateSession } from "@/lib/auth";
import { deleteSessionTokenCookie } from "@/lib/auth/cookie";
import { redirect } from "next/navigation";

export default async function Home() {
	const { user } = await getCurrentSession();

	return (
		<div>
			{user ? (
				<div>
					<h1>{user.username}</h1>
					<p>{user.email}</p>
					<button onClick={logout}>Sign Out</button>
				</div>
			) : (
				"Not signed in"
			)}
		</div>
	);
}

async function logout(): Promise<void> {
	"use server";
	const { session } = await getCurrentSession();
	if (!session) {
		return;
	}

	await invalidateSession(session.id);
	await deleteSessionTokenCookie();
	return redirect("/login");
}
