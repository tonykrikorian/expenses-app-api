/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller('category-expenses')
export default class CategoryExpensesController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  public getCategoryExpenses() {
    return this.prismaService.categoryExpense.findMany({
      include: {
        category: true,
      },
    });
  }
}
