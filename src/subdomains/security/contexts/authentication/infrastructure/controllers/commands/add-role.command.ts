import { IsUUID } from 'class-validator';
import { IAddRoleCommand } from '../../../domain/interfaces/commands';

export class AddRoleCommand implements IAddRoleCommand {
  @IsUUID(null, { message: 'El userId enviado no es valido' })
  userId: string;

  @IsUUID(null, { message: 'El roleId enviado no es valido' })
  roleId: string;
}
