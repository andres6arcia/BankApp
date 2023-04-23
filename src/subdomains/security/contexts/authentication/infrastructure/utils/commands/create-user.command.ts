import { IsOptional, IsString } from 'class-validator';
import { ICreateUserCommand } from '../../../domain/interfaces/commands';

export class CreateUserCommand implements ICreateUserCommand {
  @IsString({ message: 'El email es obligatorio' })
  email: string;

  @IsString({ message: 'El nombre es obligatorio' })
  name: string;

  @IsString({ message: 'La verificacion del correo es obligatoria' })
  emailVerified: boolean;

  @IsOptional()
  @IsString({ message: 'El rol es un UUID' })
  roles?: string[];
}
