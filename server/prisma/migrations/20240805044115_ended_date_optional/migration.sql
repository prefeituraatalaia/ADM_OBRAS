-- CreateEnum
CREATE TYPE "Tipo" AS ENUM ('MATERIAL', 'EQUIPAMENTO');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('DEV', 'ADMIN', 'USER', 'VISITOR');

-- CreateTable
CREATE TABLE "Construction" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "startedDate" TIMESTAMP(3) NOT NULL,
    "endedDate" TIMESTAMP(3),
    "status" TEXT NOT NULL,
    "techManager" TEXT NOT NULL,

    CONSTRAINT "Construction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resources" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "Tipo" NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "Resources_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Progress" (
    "id" SERIAL NOT NULL,
    "constructionId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "urlPicture" TEXT,

    CONSTRAINT "Progress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "pwd" TEXT NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "Progress" ADD CONSTRAINT "Progress_constructionId_fkey" FOREIGN KEY ("constructionId") REFERENCES "Construction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
