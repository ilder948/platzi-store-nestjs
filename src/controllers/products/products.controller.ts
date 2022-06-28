import {
  Controller,
  Query,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { response, Response } from 'express';
import { ProductsService } from '../../services/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: number,
  ) {
    /*     return {
      message: `limit ${limit}, offset ${offset}, brand ${brand}`,
    }; */
    return this.productsService.findAll();
  }

  @Get('/:productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Res() response: Response, @Param('productId') productId: number) {
    //return { message: `Product  ${productId}` };
    return this.productsService.findOne(+productId);
  }

  @Post()
  createProduct(@Body() payload: any) {
    /* return {
      message: `Accion de crear`,
      payload,
    }; */
    return this.productsService.create(payload);
  }

  @Put(':id')
  updateProduct(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number) {
    return {
      message: 'Accion de eliminar',
      id,
    };
  }
}
