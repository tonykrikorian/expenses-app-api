import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import CategoriesModule from './modules/categories/categories.module';
import CategoryExpenseModule from './modules/expensesCategories/categoryExpense.module';

@Module({
  imports: [CategoriesModule, CategoryExpenseModule],
  providers: [PrismaService],
})
export class AppModule {}
