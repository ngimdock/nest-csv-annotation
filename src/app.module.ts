import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnnotationModule } from './annotation/annotation.module';
import { HelpersModule } from './helpers/helpers.module';
import { AnnotationRoutes } from './annotation/enums';
import { createFolderMiddleware } from './annotation/middlewares';

@Module({
  imports: [AnnotationModule, HelpersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(createFolderMiddleware).forRoutes({
      path: AnnotationRoutes.annotation,
      method: RequestMethod.POST,
    });
  }
}
