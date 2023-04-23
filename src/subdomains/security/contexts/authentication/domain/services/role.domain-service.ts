import { RoleDomainEntityBase } from '../entities';

export interface IRoleDomainService<
  Entity extends RoleDomainEntityBase = RoleDomainEntityBase,
> {
  createRole(entity: Entity): Promise<Entity>;
  // updateRoleEmail(roleId: string, entity: Entity): Promise<Entity>;
  // updateRolePassword(
  //   roleId: string,
  //   entity: Entity,
  // ): Promise<boolean>;
  findRoleById(roleId: string): Promise<Entity>;
  // findRoleByEmail(email: string): Promise<Entity>;
  // findRoleByEmailAndPassword(
  //   email: string,
  //   password: string,
  // ): Promise<Entity>;
  // checkRoleUniqueEmail(email: string): Promise<boolean>;
}
