import { Body, Controller, Param, Post } from '@nestjs/common';
import { CreateUserUseCase } from '../../application/use-cases/create-user/create-user.use-case';
import { UserCreatedPublisher } from '../messaging/publishers/user-created.publisher';
import { UserService } from '../persistence/services/user.service';
import { CreateUserCommand } from '../utils/commands/create-user.command';
import { AddRoleCommand } from '../utils/commands';
import { AddRoleUseCase } from '../../application/use-cases/add-role/add-role.use-case';
import { RoleService } from '../persistence/services/role.service';
import { RoleAddedPublisher } from '../messaging/publishers/role-added.publisher';

@Controller('user')
export class UsersController {
  constructor(
    private readonly userService: UserService,
    private readonly roleService: RoleService,
    private readonly userCreatedPublisher: UserCreatedPublisher,
    private readonly roleAddedPublisher: RoleAddedPublisher,
  ) {}

  @Post('')
  async user(@Body() command: CreateUserCommand) {
    const useCase = new CreateUserUseCase(
      this.userService,
      this.userCreatedPublisher,
    );
    return await useCase.execute(command);
  }

  @Post(':userId/role/:roleId')
  async role(@Param() command: AddRoleCommand) {
    const useCase = new AddRoleUseCase(
      this.userService,
      this.roleService,
      this.roleAddedPublisher,
    );
    return await useCase.execute(command);
  }


}
