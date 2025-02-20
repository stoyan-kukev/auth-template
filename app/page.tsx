import { db } from "@/lib/db";
import { userTable } from "@/lib/db/schema";

export default async function Home() {
	const users = await db.select().from(userTable);

	return (
		<div>
			{users.map((user) => (
				<h1 key={user.id}>{user.id}</h1>
			))}
		</div>
	);
}
