// import { EventPublisherBase, IUseCase, ValueObjectErrorHandler } from "src/shared/sofka"; // TODO: revisar porque no da "@sofka"
// import { UserAggregateRoot } from "../../../domain/aggregates";
// import { Topic, UserCreatedEventPublisher } from "../../../domain/events";
// import { ILoginCommand } from "../../../domain/interfaces/commands";
// import { ILoginResponse } from "../../../domain/interfaces/responses/login.response";
// import { IUserDomainService } from "../../../domain/services";

// export class LoginUseCase
//   extends ValueObjectErrorHandler
//   implements IUseCase<ILoginCommand, ILoginResponse>
// {
//   private readonly aggregateRoot: UserAggregateRoot;

//   constructor(
//     private readonly usuarioService: IUserDomainService,
//     private readonly usuarioCreadoEventPublisher: UserCreatedEventPublisher,
//   ) {
//     super();
//     const events = new Map<Topic, EventPublisherBase<any>>();
//     events.set(Topic.UserCreated, this.usuarioCreadoEventPublisher);
//     this.aggregateRoot = new UserAggregateRoot({
//       usuarioService: this.usuarioService,
//       events,
//     });
//   }

//   async execute(
//     command: ILoginCommand,
//   ): Promise<ILoginResponse> {



//   }

// }