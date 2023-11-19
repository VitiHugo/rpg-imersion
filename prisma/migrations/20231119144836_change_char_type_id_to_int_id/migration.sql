/*
  Warnings:

  - The primary key for the `characterTypes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `characterTypes` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `characterTypeId` on the `characters` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "characters" DROP CONSTRAINT "characters_characterTypeId_fkey";

-- AlterTable
ALTER TABLE "characterTypes" DROP CONSTRAINT "characterTypes_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "characterTypes_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "characters" DROP COLUMN "characterTypeId",
ADD COLUMN     "characterTypeId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "characters" ADD CONSTRAINT "characters_characterTypeId_fkey" FOREIGN KEY ("characterTypeId") REFERENCES "characterTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
