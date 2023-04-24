import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ICreateUserCommand } from '../../../domain/interfaces/commands';

export class CreateUserCommand implements ICreateUserCommand {
  @IsEmail(undefined, { message: 'El email enviado no es valido' })
  email: string;

  @IsString({ message: 'El nombre enviado no es valido' })
  name: string;

  @IsBoolean({ message: 'El emailVerified enviado no es valido' })
  emailVerified: boolean;
}
