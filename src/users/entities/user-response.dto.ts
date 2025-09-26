// src/users/dto/user-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty({
    description: 'ID único del usuario',
    example: '123e4567-e89b-12d3-a456-426614174000',
    format: 'uuid',
  })
  id: string;

  @ApiProperty({
    description: 'Nombre del usuario',
    example: 'Juan Pérez',
    minLength: 1,
    maxLength: 100,
  })
  name: string;

  @ApiProperty({
    description: 'Correo electrónico del usuario',
    example: 'juan.perez@example.com',
    format: 'email',
  })
  email: string;

  @ApiProperty({
    description: 'Fecha de creación del usuario (generada automáticamente)',
    example: '2025-09-26T12:00:00.000Z',
    type: String,
    format: 'date-time',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Fecha de última actualización del usuario (manejada por Prisma con @updatedAt)',
    example: '2025-09-26T12:30:00.000Z',
    type: String,
    format: 'date-time',
  })
  updatedAt: Date;
}
