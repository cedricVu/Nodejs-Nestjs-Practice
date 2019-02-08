import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/controllers/cats.controller';
import { APP_FILTER } from '@nestjs/core';
import { HttpErrorFilter } from './cats/http-error.filter';
// import { CatsService } from './cats/service/cats.service';
// import { CatsService } from './cats/cats/cats.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [AppController, CatsController],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: HttpErrorFilter,
  }],
})
export class AppModule {}
