import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCategoryRequest } from './createCategory.request';
import { PrismaService } from './prisma.service';

@Controller('categories')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

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
    return {
      status: 'Ok',
      message: 'Categoria creada correctamente',
      data: response,
    };
  }
}
