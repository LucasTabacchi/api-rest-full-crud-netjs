import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { User } from './users/entities/user.entity';
import { AppService } from './app.service';

@Module({
  imports: [User],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
