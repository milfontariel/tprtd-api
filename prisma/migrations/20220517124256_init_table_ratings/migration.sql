-- CreateTable
CREATE TABLE "ratings" (
    "id" SERIAL NOT NULL,
    "tconst" VARCHAR(40) NOT NULL,
    "averageRating" VARCHAR(20) NOT NULL,

    CONSTRAINT "ratings_pkey" PRIMARY KEY ("id")
);
