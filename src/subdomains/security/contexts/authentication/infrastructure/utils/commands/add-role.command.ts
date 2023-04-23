import { IsString } from 'class-validator';
import { IAddRoleCommand } from '../../../domain/interfaces/commands';

export class AddRoleCommand implements IAddRoleCommand {
  @IsString({ message: 'El userId es obligatorio' })
  userId: string;

  @IsString({ message: 'El roleId es obligatorio' })
  roleId: string;
}
