import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { UserPostgresEntity } from '../entities/user-postgres.entity';
import { IRepository } from './interfaces/repository.interface';

export class UserRepository implements IRepository<UserPostgresEntity> {
  constructor(
    @InjectRepository(UserPostgresEntity)
    private readonly userRepository: Repository<UserPostgresEntity>,
  ) {}

  async find(
    options?: FindManyOptions<UserPostgresEntity>,
  ): Promise<UserPostgresEntity[]> {
    return await this.userRepository.find(options);
  }

  async findAll(informacionPersonal: boolean): Promise<UserPostgresEntity[]> {
    const options = informacionPersonal
      ? { relations: ['informacionPersonal'] }
      : {};
    return await this.userRepository.find(options);
  }

  async findById(userId: string): Promise<UserPostgresEntity> {
    const data = await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.roles', 'role')
      .where('user.userId = :userId', { userId })
      .getOne();
    if (data) return data;
    throw new NotFoundException(`User con id ${userId} no encontrado`);
  }

  async create(entity: UserPostgresEntity): Promise<UserPostgresEntity> {
    return await this.userRepository.save(entity);
  }

  async update(
    userId: string,
    entity: UserPostgresEntity,
  ): Promise<UserPostgresEntity> {
    const data = await this.userRepository.findOneBy({ userId });
    if (data) {
      const newEntity = {
        ...entity,
        userId,
      };
      return await this.userRepository.save(newEntity);
    }
    throw new NotFoundException(`User con id ${userId} no encontrado`);
  }

  async delete(userId: string): Promise<boolean> {
    const data = await this.userRepository.findOneBy({ userId });
    if (data) {
      await this.userRepository.remove(data);
      return true;
    }
    throw new NotFoundException(`User con id ${userId} no encontrado`);
  }
}
