import { getCurrentSession } from "@/lib/auth";

export default async function Home() {
	const { user } = await getCurrentSession();

	return <div>{user ? user.id : "Not signed in"}</div>;
}
