/*
  Warnings:

  - You are about to drop the column `image` on the `campaigns` table. All the data in the column will be lost.
  - You are about to drop the column `imageId` on the `characters` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `campaigns` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `characters` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "campaigns" DROP COLUMN "image",
ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "characters" DROP COLUMN "imageId",
ADD COLUMN     "imageUrl" TEXT NOT NULL;
