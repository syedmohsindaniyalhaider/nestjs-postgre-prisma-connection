-- CreateTable
CREATE TABLE "RegisterUser" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "RegisterUser_pkey" PRIMARY KEY ("id")
);

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
