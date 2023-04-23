import { InjectRepository } from "@nestjs/typeorm";
import { FindManyOptions, Repository } from "typeorm";
import { RolePostgresEntity } from "../entities/role-postgres.entity";
import { IRepository } from "./interfaces/repository.interface";
import { NotFoundException } from "@nestjs/common";


export class RoleRepository implements IRepository<RolePostgresEntity> {
  constructor(
    @InjectRepository(RolePostgresEntity)
    private readonly roleRepository: Repository<RolePostgresEntity>,
  ) {}

  async find(
    options?: FindManyOptions<RolePostgresEntity>,
  ): Promise<RolePostgresEntity[]> {
    return await this.roleRepository.find(options);
  }

  async findAll(informacionPersonal: boolean): Promise<RolePostgresEntity[]> {
    const options = informacionPersonal
      ? { relations: ['informacionPersonal'] }
      : {};
    return await this.roleRepository.find(options);
  }

  async findById(roleId: string): Promise<RolePostgresEntity> {
    const data = await this.roleRepository.findOneBy({ roleId });
    if (data) return data;
    throw new NotFoundException(`Role con id ${roleId} no encontrado`);
  }

  create(entity: RolePostgresEntity): Promise<RolePostgresEntity> {
    return this.roleRepository.save(entity);
  }

  async update(
    roleId: string,
    entity: RolePostgresEntity,
  ): Promise<RolePostgresEntity> {
    const data = await this.roleRepository.findOneBy({ roleId });
    if (data) {
      const newEntity = {
        ...entity,
        roleId,
      };
      return await this.roleRepository.save(newEntity);
    }
    throw new NotFoundException(`Role con id ${roleId} no encontrado`);
  }

  async delete(roleId: string): Promise<boolean> {
    const data = await this.roleRepository.findOneBy({ roleId });
    if (data) {
      await this.roleRepository.remove(data);
      return true;
    }
    throw new NotFoundException(`Role con id ${roleId} no encontrado`);
  }
}
