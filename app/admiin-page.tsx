"use client";

import { addRole } from "@/actions/add-role";
import { useState } from "react";

export function AdmiinPage() {
	const [roleName, setRoleName] = useState("");

	return (
		<div>
			<button onClick={() => addRole(roleName)}>Add role</button>
			<input
				type="text"
				value={roleName}
				onChange={(e) => setRoleName(e.target.value)}
			/>
		</div>
	);
}
