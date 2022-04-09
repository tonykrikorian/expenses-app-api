import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import CategoryExpensesController from './categoryExpense.controller';
import CategoryExpensesAction from './categoryExpenses.actions';

import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController, CategoryExpensesController],
  providers: [PrismaService, CategoryExpensesAction],
})
export class AppModule {}
