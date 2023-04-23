import { EventPublisherBase, IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/shared/sofka";
import { UserAggregateRoot } from "../../../domain/aggregates/user.aggregate";
import { RoleDomainEntityBase, UserDomainEntityBase } from "../../../domain/entities";
import { RoleAddedEventPublisher, Topic } from "../../../domain/events";
import { IRoleDomainService, IUserDomainService } from "../../../domain/services";
import { IAddRoleCommand } from "../../../domain/interfaces/commands";
import { RoleIdValueObject } from "../../../domain/value-objects/role";
import { IAddRoleResponse } from "../../../domain/interfaces/responses";
import { UserIdValueObject } from "../../../domain/value-objects/user";


  export class AddRoleUseCase
    extends ValueObjectErrorHandler
    implements IUseCase<IAddRoleCommand, IAddRoleResponse>
  {
    private readonly aggregateRoot: UserAggregateRoot;
  
    constructor(
      private readonly userService: IUserDomainService,
      private readonly roleService: IRoleDomainService,
      private readonly roleAddedEventPublisher: RoleAddedEventPublisher,
    ) {
      super();
      const events = new Map<Topic, EventPublisherBase<any>>();
      events.set(Topic.RoleAdded, this.roleAddedEventPublisher);
      this.aggregateRoot = new UserAggregateRoot({
        userService: this.userService,
        events,
      });
    }
  
    async execute(
      command: IAddRoleCommand,
    ): Promise<IAddRoleResponse> {
      // Creación de objectos de valor
      const userId = new UserIdValueObject(command.userId);
      const roleId = new RoleIdValueObject(command.roleId);
  
      // Recopilando errores
      if (userId.hasErrors() === true) this.setErrors(userId.getErrors());
      if (roleId.hasErrors() === true) this.setErrors(roleId.getErrors());
  
      // Validando errores
      if (this.hasErrors() === true)
        throw new ValueObjectException(
          'Hay algunos errores en el comando "IAddRoleCommand"',
          this.getErrors(),
        );

      // Ejecución de la lógica del caso de uso
      const user: UserDomainEntityBase = await this.userService.findUserById(userId.valueOf());
      const role: RoleDomainEntityBase = await this.roleService.findRoleById(roleId.valueOf());
      await this.aggregateRoot.AddRole(user, role);
      const result = await this.userService.updateUser(userId.valueOf(), user);
      
      // Retornando y notifico la respuesta
      this.roleAddedEventPublisher.response = result;
      this.roleAddedEventPublisher.publish();
      return { data: result };
    }
  }
  