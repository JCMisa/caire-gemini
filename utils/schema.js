import {
    boolean,
    integer,
    pgTable,
    serial,
    text,
    varchar,
} from "drizzle-orm/pg-core";

export const Assessment = pgTable("assessment", {
    id: serial("id").primaryKey(),
    illness: varchar("illness").notNull(),
    level: varchar("level").notNull(),
    resolved: boolean("resolved").default(false),
    createdAt: varchar("createdAt"),
    createdBy: varchar("createdBy"),
    resultReferenceId: varchar("resultReferenceId")
});

export const Result = pgTable("result", {
    id: serial("id").primaryKey(),
    assessmentReferenceId: varchar("assessmentReferenceId"),
    aiResult: text("aiResult")
})