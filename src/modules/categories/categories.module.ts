/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CategoriesController } from './categories.controller';
import CategoryExpensesAction from './services/actions/categoryExpenses.actions';

@Module({
  controllers: [CategoriesController],
  providers: [CategoryExpensesAction, PrismaService],
})
export default class CategoriesModule {}
