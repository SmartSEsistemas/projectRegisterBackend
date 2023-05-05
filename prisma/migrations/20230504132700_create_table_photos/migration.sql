-- CreateTable
CREATE TABLE "photos" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "photos_pkey" PRIMARY KEY ("id")
);
