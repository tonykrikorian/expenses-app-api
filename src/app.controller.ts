import { Body, Controller, Get, Post } from '@nestjs/common';
import CategoryExpensesAction from './categoryExpenses.actions';
import { CreateCategoryRequest } from './createCategory.request';
import { PrismaService } from './prisma.service';

@Controller('categories')
export class AppController {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly categoryExpensesAction: CategoryExpensesAction,
  ) {}

  @Get()
  public getCategories() {
    return this.prismaService.categories.findMany();
  }

  @Post('create')
  public async createExpenseCategory(@Body() body: CreateCategoryRequest) {
    const response = await this.prismaService.categories.create({
      data: {
        name: body.name,
      },
    });
    await this.categoryExpensesAction.calculateCategoryExpenses(
      body.percentage,
      2500000,
      response.id,
    );
    return {
      status: 'Ok',
      message: 'Categoria creada correctamente',
      data: response,
    };
  }
}
