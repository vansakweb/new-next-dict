-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'EDITOR', 'USER');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "verifiedEmail" BOOLEAN NOT NULL DEFAULT false,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "gender" "Gender",
    "dob" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hsk" (
    "id" SERIAL NOT NULL,
    "chinese" TEXT DEFAULT '',
    "notone" TEXT DEFAULT '',
    "khmer" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "pinyin" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "english" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "tag" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "hsk" TEXT DEFAULT '',
    "modified" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Hsk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sentence" (
    "id" SERIAL NOT NULL,
    "khmer" TEXT NOT NULL DEFAULT '',
    "chinese" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "pinyin" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "segment" JSONB,
    "modified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sentence_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_email_key" ON "User"("username", "email");
