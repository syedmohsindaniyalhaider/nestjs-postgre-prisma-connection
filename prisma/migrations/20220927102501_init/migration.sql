-- CreateTable
CREATE TABLE "RegisterUser" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "landline" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "language" TEXT,

    CONSTRAINT "RegisterUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RegisterUser_firstName_key" ON "RegisterUser"("firstName");
