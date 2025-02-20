import { LogOut } from "@/components/auth/logout";
import { getCurrentSession } from "@/lib/auth";
import { AdmiinPage } from "./admiin-page";

export default async function Home() {
	const { user } = await getCurrentSession();

	return (
		<div>
			{user ? (
				<div>
					<h1>{user.username}</h1>
					<p>{user.email}</p>
					<LogOut />
					<AdmiinPage />
				</div>
			) : (
				"Not signed in"
			)}
		</div>
	);
}
