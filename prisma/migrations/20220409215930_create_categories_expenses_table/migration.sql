-- CreateTable
CREATE TABLE "CategoryExpense" (
    "id" SERIAL NOT NULL,
    "percentage" INTEGER NOT NULL,
    "theoricalAmmount" INTEGER NOT NULL,
    "realAmmount" INTEGER NOT NULL,
    "balance" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CategoryExpense_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CategoryExpense" ADD CONSTRAINT "CategoryExpense_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
