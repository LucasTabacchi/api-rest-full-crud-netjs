import { Injectable } from '@nestjs/common';
import { User } from './users/entities/user.entity';
import { CreateUserDto } from './users/dto/create-user.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {

  private users: User[] = [];

  create(dto: CreateUserDto): User {
    const user = new User();
    user.name = dto.name;
    user.email = dto.email;
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: string): User {
    return this.users.find(user => user.id === id);
  }
  
  update(id: string, dto: CreateUserDto): User {
    const user = this.users.find(user => user.id === id);
    user.name = dto.name;
    user.email = dto.email;
    return user;
  }
  
  delete(id: string): void {
    this.users = this.users.filter(user => user.id !== id);
  }
  
  private generateId(): string {
    return uuidv4();
  }
}
