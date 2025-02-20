"use server";

import { db } from "@/lib/db";
import { roleTable } from "@/lib/db/schema";

export async function addRole(name: string) {
	await db.insert(roleTable).values({ name });
}
