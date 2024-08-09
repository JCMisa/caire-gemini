import {
    boolean,
    integer,
    pgTable,
    serial,
    varchar,
} from "drizzle-orm/pg-core";

export const Assessment = pgTable("assessment", {
    id: serial("id").primaryKey(),
    illness: varchar("illness").notNull(),
    level: integer("level").notNull(),
    resolved: boolean("resolved").default(false),
});