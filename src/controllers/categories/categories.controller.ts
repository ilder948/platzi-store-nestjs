import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get('/')
  getCategories() {
    return 'ok';
  }

  @Get(':id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `Product  ${productId} and ${id}`;
  }
}
