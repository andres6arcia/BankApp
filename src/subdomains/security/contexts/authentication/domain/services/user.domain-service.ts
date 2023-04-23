import { UserDomainEntityBase } from '../entities';

export interface IUserDomainService<
  Entity extends UserDomainEntityBase = UserDomainEntityBase,
> {
  createUser(entity: Entity): Promise<Entity>;
  updateUser(userId: string, entity: Entity): Promise<Entity>;
  // updateUserEmail(userId: string, entity: Entity): Promise<Entity>;
  // updateUserPassword(
  //   userId: string,
  //   entity: Entity,
  // ): Promise<boolean>;
  findUserById(userId: string): Promise<Entity>;
  // findUserByEmail(email: string): Promise<Entity>;
  // findUserByEmailAndPassword(
  //   email: string,
  //   password: string,
  // ): Promise<Entity>;
  // checkUserUniqueEmail(email: string): Promise<boolean>;
}
