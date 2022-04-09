/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import CategoryExpensesController from './categoryExpense.controller';

@Module({
  controllers: [CategoryExpensesController],
  providers: [PrismaService],
})
export default class CategoryExpenseModule {}
