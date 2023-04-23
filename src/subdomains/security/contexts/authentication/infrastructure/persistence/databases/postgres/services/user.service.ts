import { Injectable, NotFoundException } from '@nestjs/common';
import { IUserDomainService } from 'src/subdomains/security/contexts/authentication/domain/services';
import { UserPostgresEntity } from '../entities/user-postgres.entity';
import { UserRepository } from '../repositories/user.repository';

/**
 * Servicio de dominio para el manejo de users
 *
 * @export
 * @class UserService
 * @implements {IUserDomainService<UserPostgresEntity>}
 */
@Injectable()
export class UserPostgresService
  implements IUserDomainService<UserPostgresEntity>
{
  /**
   * Creates an instance of UserService.
   *
   * @param {UserRepository} userRepository Repositorio de users
   * @memberof UserService
   */
  constructor(private readonly userRepository: UserRepository) {}

  /**
   * Crea un user
   *
   * @param {UserPostgresEntity} entity Entidad de user
   * @return {Promise<UserPostgresEntity>} Entidad de user
   * @memberof UserService
   */
  createUser(entity: UserPostgresEntity): Promise<UserPostgresEntity> {
    return this.userRepository.create(entity);
  }

  /**
   * Encuentra a un usuario
   * 
   * @param {string} userId Identificador del user
   * @return {Promise<UserPostgresEntity>} Entidad de user
   * @memberof UserService
   */
  findUserById(userId: string): Promise<UserPostgresEntity> {
    return this.userRepository.findById(userId);
  }

  /**
   * Actualiza un usuario
   * 
   * @param {string} userId Identificador del user
   * @param {UserPostgresEntity} entity Entidad de user
   * @return {Promise<UserPostgresEntity>} Entidad de user
   * @memberof UserService
   */
  updateUser(userId: string, entity: UserPostgresEntity): Promise<UserPostgresEntity> {
    return this.userRepository.update(userId, entity);
  }

  // /**
  //  * Actualiza el email de un user
  //  *
  //  * @param {string} userId Identificador del user
  //  * @param {UserPostgresEntity} entity Entidad de user
  //  * @return {Promise<UserPostgresEntity>} Entidad de user
  //  * @memberof UserService
  //  */
  // updateUserEmail(
  //   userId: string,
  //   entity: UserPostgresEntity,
  // ): Promise<UserPostgresEntity> {
  //   return this.userRepository.update(userId, entity);
  // }

  // /**
  //  * Actualiza el password de un user
  //  *
  //  * @param {string} userId Identificador del user
  //  * @param {UserPostgresEntity} entity Entidad de user
  //  * @return {Promise<boolean>} Verdadero si se actualizó el password
  //  * @memberof UserService
  //  */
  // async updateUserPassword(
  //   userId: string,
  //   entity: UserPostgresEntity,
  // ): Promise<boolean> {
  //   const data = await this.userRepository.update(userId, entity);
  //   if (data) return true;
  //   throw new NotFoundException('User no encontrado');
  // }

  // borrarUser(userId: string): Promise<boolean> {
  //   return this.userRepository.delete(userId);
  // }

  // async findUserByEmail(email: string): Promise<UserPostgresEntity> {
  //   const data = await this.userRepository.find({ where: { email } });
  //   if (data) return data[0];
  //   throw new NotFoundException('User no encontrado');
  // }

  // async findUserByEmailAndPassword(
  //   email: string,
  //   password: string,
  // ): Promise<UserPostgresEntity> {
  //   const data = await this.userRepository.find({
  //     where: { email, password },
  //   });
  //   if (data) return data[0];
  //   throw new NotFoundException('Datos de user inválidos');
  // }

  // async checkUserUniqueEmail(email: string): Promise<boolean> {
  //   const data = await this.userRepository.find({ where: { email } });
  //   if (data) return true;
  //   return false;
  // }
}
