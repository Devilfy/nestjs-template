import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PasswordService } from '../password/password.service';
import { PrismaService } from '../app/prisma.service';
import { UsersRepository } from './users.repository';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [UsersController],
  // imports: [AvatarModule],
  providers: [
    UsersService,
    UsersRepository,
    PasswordService,
    JwtService,
    PrismaService,
  ],
  exports: [UsersService],
})
export class UsersModule {}
