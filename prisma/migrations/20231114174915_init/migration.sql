-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Guestbook" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "isPrivate" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Guestbook" ("createdAt", "id", "message", "name", "updatedAt") SELECT "createdAt", "id", "message", "name", "updatedAt" FROM "Guestbook";
DROP TABLE "Guestbook";
ALTER TABLE "new_Guestbook" RENAME TO "Guestbook";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
