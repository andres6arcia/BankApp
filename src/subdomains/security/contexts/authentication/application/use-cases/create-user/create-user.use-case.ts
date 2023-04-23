import { EventPublisherBase, IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/shared/sofka";
import { UserAggregateRoot } from "../../../domain/aggregates/user.aggregate";
import { UserDomainEntityBase } from "../../../domain/entities";
import { Topic, UserCreatedEventPublisher } from "../../../domain/events";
import { ICreateUserCommand } from "../../../domain/interfaces/commands";
import { ICreateUserResponse } from "../../../domain/interfaces/responses/create-user.response";
import { IUserDomainService } from "../../../domain/services";
import { EmailValueObject, NameValueObject } from "../../../domain/value-objects/user";
import { EmailVerifiedValueObject } from "../../../domain/value-objects/user/email-verified/email-verified.value-object";


  export class CreateUserUseCase
    extends ValueObjectErrorHandler
    implements IUseCase<ICreateUserCommand, ICreateUserResponse>
  {
    private readonly aggregateRoot: UserAggregateRoot;
  
    constructor(
      private readonly userService: IUserDomainService,
      private readonly userCreatedEventPublisher: UserCreatedEventPublisher,
    ) {
      super();
      const events = new Map<Topic, EventPublisherBase<any>>();
      events.set(Topic.UserCreated, this.userCreatedEventPublisher);
      this.aggregateRoot = new UserAggregateRoot({
        userService: this.userService,
        events,
      });
    }
  
    async execute(
      command: ICreateUserCommand,
    ): Promise<ICreateUserResponse> {
      // Creación de objectos de valor
      const email = new EmailValueObject(command.email);
      const emailVerified = new EmailVerifiedValueObject(command.emailVerified);
      const name = new NameValueObject(command.name);
  
      // Recopilando errores
      if (email.hasErrors() === true) this.setErrors(email.getErrors());
      if (emailVerified.hasErrors() === true) this.setErrors(emailVerified.getErrors());
      if (name.hasErrors() === true) this.setErrors(name.getErrors());
  
      // Validando errores
      if (this.hasErrors() === true)
        throw new ValueObjectException(
          'Hay algunos errores en el comando "ICreateUserCommand"',
          this.getErrors(),
        );
  
      // Ejecución de la lógica del caso de uso
      const entity = new UserDomainEntityBase({
        emailVerified: emailVerified.valueOf(),
        name: name.valueOf(),
        email: email.valueOf(),
      });
      const result = await this.userService.createUser(entity);

      // Retornando y notifico la respuesta
      this.userCreatedEventPublisher.response = result;
      this.userCreatedEventPublisher.publish();
      return { data: result };
    }
  }
  