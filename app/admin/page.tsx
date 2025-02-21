import { getCurrentSession } from "@/lib/auth";
import { hasPerms } from "@/lib/perms";
import { redirect } from "next/navigation";

export default async function Page() {
	const { user } = await getCurrentSession();
	if (!user) redirect("/");

	const authorized = await hasPerms(user, ["read:*", "write:*"]);
	if (!authorized) redirect("/");

	return <h1>You are on the admin page bozo</h1>;
}
