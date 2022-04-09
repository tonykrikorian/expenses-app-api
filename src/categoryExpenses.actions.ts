/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export default class CategoryExpensesAction {
  constructor(private readonly prismaService: PrismaService) {}

  public async calculateCategoryExpenses(
    percentage: number,
    salary: number,
    categoryId: number,
  ) {
    const theoricalAmmount = this.calculateTheoricalAmmount(percentage, salary);

    await this.prismaService.categoryExpense.create({
      data: {
        percentage: percentage,
        categoryId: categoryId,
        theoricalAmmount: theoricalAmmount,
        realAmmount: 0,
        balance: 0,
      },
    });
  }

  private calculateTheoricalAmmount(percentage: number, salary: number) {
    const percentageValue = percentage / 100;
    return salary * percentageValue;
  }
}
