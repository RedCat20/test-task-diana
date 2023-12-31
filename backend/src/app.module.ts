import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Link } from './typeorm';
import { LinkModule } from './link/link.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        ({
          type: 'mysql',
          host: configService.get('DB_HOST') || 'localhost',
          port: +configService.get('DB_PORT') || 3306,
          username: configService.get('DB_USER') || 'root',
          password: configService.get('DB_PASSWORD') || 'root',
          database: configService.get('DB_NAME') || 'links',
          entities: [Link],
          synchronize: true,
          logging: false,
        } as TypeOrmModuleOptions),
    }),
    LinkModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
