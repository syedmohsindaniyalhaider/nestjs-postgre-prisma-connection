/*
  Warnings:

  - You are about to drop the `RegisterUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "RegisterUser";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "landline" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "language" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_firstName_key" ON "User"("firstName");
