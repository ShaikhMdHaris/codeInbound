// src/user/user.dto.ts
export class CreateUserDto {
    username: string;
    password: string;
  }
  
  export class UpdateUserDto {
    username?: string;
    password?: string;
  }
  