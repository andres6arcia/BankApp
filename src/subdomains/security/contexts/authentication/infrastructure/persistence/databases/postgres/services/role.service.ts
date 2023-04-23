import { Injectable } from "@nestjs/common";
import { RolePostgresEntity } from "../entities/role-postgres.entity";
import { RoleRepository } from "../repositories/role.repository";
import { IRoleDomainService } from "src/subdomains/security/contexts/authentication/domain/services";


/**
 * Servicio de dominio para el manejo de roles
 *
 * @export
 * @class UsuarioService
 * @implements {IRoleDomainService<RolePostgresEntity>}
 */
@Injectable()
export class RolePostgresService
  implements IRoleDomainService<RolePostgresEntity>
{
  /**
   * Creates an instance of RoleService.
   *
   * @param {RoleRepository} roleRepository Roles's repositoty
   * @memberof RoleService
   */
  constructor(private readonly roleRepository: RoleRepository) {}

  /**
   * Crea un rol
   *
   * @param {UserPostgresEntity} entity Entidad de usuario
   * @return {Promise<UserPostgresEntity>} Entidad de usuario
   * @memberof UserService
   */
  async createRole(entity: RolePostgresEntity): Promise<RolePostgresEntity> {
    return await this.roleRepository.create(entity);
  }

  async findRoleById(roleId: string): Promise<RolePostgresEntity> {
    return await this.roleRepository.findById(roleId);
  }

}