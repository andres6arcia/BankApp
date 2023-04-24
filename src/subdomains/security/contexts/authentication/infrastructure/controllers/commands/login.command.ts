import { IsString } from 'class-validator';
import { ILoginCommand } from '../../../domain/interfaces/commands';

export class LoginCommand implements ILoginCommand {
  @IsString({ message: 'El email es obligatorio' })
  email: string;

  @IsString({ message: 'La contraseña es obligatoria' })
  password: string;
}
