// import { Inject, Injectable } from '@nestjs/common';
// import { ClientProxy } from '@nestjs/microservices';
// import { lastValueFrom } from 'rxjs';
// import { IEventPublisher } from 'src/shared/sofka';
// // import { UsuarioCreadoEventPublisher } from '../../../domain/events';
// import { UsuarioEntity } from '../../persistence/entities/usuario.entity';

// @Injectable()
// export class LoginPublisher extends UsuarioCreadoEventPublisher<UsuarioEntity> {
//   constructor(@Inject('USUARIOS_CONTEXT') private readonly proxy: ClientProxy) {
//     super(proxy as unknown as IEventPublisher);
//   }

//   emit<Result = any, Input = UsuarioEntity>(
//     pattern: any,
//     data: Input,
//   ): Promise<Result> {
//     return lastValueFrom(this.proxy.emit(pattern, data));
//   }
// }
