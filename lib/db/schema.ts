import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core";
import type { InferSelectModel } from "drizzle-orm";
import { randomUUID } from "crypto";

export const userTable = pgTable("user", {
	id: text("id").primaryKey().$defaultFn(randomUUID),
	githubId: integer("githubId"),
	username: text("username"),
	email: text("email"),
});

export const sessionTable = pgTable("session", {
	id: text("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => userTable.id),
	expiresAt: timestamp("expires_at", {
		withTimezone: true,
		mode: "date",
	}).notNull(),
});

export type User = InferSelectModel<typeof userTable>;
export type Session = InferSelectModel<typeof sessionTable>;
