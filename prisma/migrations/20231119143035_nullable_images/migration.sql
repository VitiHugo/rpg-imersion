-- AlterTable
ALTER TABLE "campaigns" ALTER COLUMN "imageUrl" DROP NOT NULL;

-- AlterTable
ALTER TABLE "characters" ALTER COLUMN "imageUrl" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "imageUrl" DROP NOT NULL;
