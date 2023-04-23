// jest.mock('./helpers');

// import { EventPublisherBase } from '@sofka';
// import { v4 as uuidv4 } from 'uuid';
// import {
//   InformacionPersonalDomainEntityBase,
//   UsuarioDomainEntityBase,
// } from '../entities';
// import { Topic } from '../events';
// import {
//   IInformacionPersonalDomainService,
//   IUsuarioDomainService,
// } from '../services';
// import * as helpers from './helpers';
// import { UsuarioAggregateRoot } from './user.aggregate';

// describe('UsuarioAggregateRoot', () => {
//   let aggregate: UsuarioAggregateRoot;
//   let usuarioService: IUsuarioDomainService;
//   let informacionPersonalService: IInformacionPersonalDomainService;
//   let events: Map<Topic, EventPublisherBase<any>>;

//   beforeEach(() => {
//     usuarioService = {} as IUsuarioDomainService;
//     informacionPersonalService = {} as IInformacionPersonalDomainService;
//     events = new Map<Topic, EventPublisherBase<any>>();
//     aggregate = new UsuarioAggregateRoot({
//       events,
//       informacionPersonalService,
//     });
//   });

//   it('should be defined', () => {
//     expect(aggregate).toBeDefined();
//   });

//   describe('crearInformacionPersonal', () => {
//     it('execute CrearInformacionPersonalHelper with params', () => {
//       // Arrange
//       const entity = new InformacionPersonalDomainEntityBase();
//       const expected = new InformacionPersonalDomainEntityBase();
//       events.set(
//         Topic.InformacionPersonalCreada,
//         {} as EventPublisherBase<InformacionPersonalDomainEntityBase>,
//       );
//       jest
//         .spyOn(helpers, 'CrearInformacionPersonalHelper')
//         .mockResolvedValue(entity);

//       // Act
//       aggregate = new UsuarioAggregateRoot({
//         events,
//         informacionPersonalService,
//       });
//       const result = aggregate.crearInformacionPersonal(entity);

//       // Assert
//       expect(result).resolves.toEqual(expected);
//       expect(helpers.CrearInformacionPersonalHelper).toHaveBeenCalledWith(
//         entity,
//         informacionPersonalService,
//         events.get(Topic.InformacionPersonalCreada),
//       );
//     });
//   });

//   describe('actualizarNombreDeInformacionPersonal', () => {
//     it('execute ActualizarNombreDeInformacionPersonalHelper with params', () => {
//       // Arrange
//       const informacionPersonalId = uuidv4();
//       const entity = new InformacionPersonalDomainEntityBase();
//       events.set(
//         Topic.NombreDeInformacionPersonalActualizado,
//         {} as EventPublisherBase<InformacionPersonalDomainEntityBase>,
//       );
//       jest
//         .spyOn(helpers, 'ActualizarNombreDeInformacionPersonalHelper')
//         .mockResolvedValue(entity);

//       // Act
//       aggregate = new UsuarioAggregateRoot({
//         events,
//         informacionPersonalService,
//       });
//       const result = aggregate.actualizarNombreDeInformacionPersonal(
//         informacionPersonalId,
//         entity,
//       );

//       // Assert
//       expect(result).resolves.toEqual(entity);
//       expect(
//         helpers.ActualizarNombreDeInformacionPersonalHelper,
//       ).toHaveBeenCalledWith(
//         informacionPersonalId,
//         entity,
//         informacionPersonalService,
//         events.get(Topic.NombreDeInformacionPersonalActualizado),
//       );
//     });
//   });

//   describe('actualizarApellidoDeInformacionPersonal', () => {
//     it('execute ActualizarApellidoDeInformacionPersonalHelper with params', () => {
//       // Arrange
//       const informacionPersonalId = uuidv4();
//       const entity = new InformacionPersonalDomainEntityBase();
//       events.set(
//         Topic.ApellidoDeInformacionPersonalActualizado,
//         {} as EventPublisherBase<InformacionPersonalDomainEntityBase>,
//       );
//       jest
//         .spyOn(helpers, 'ActualizarApellidoDeInformacionPersonalHelper')
//         .mockResolvedValue(entity);

//       // Act
//       aggregate = new UsuarioAggregateRoot({
//         events,
//         informacionPersonalService,
//       });
//       const result = aggregate.actualizarApellidoDeInformacionPersonal(
//         informacionPersonalId,
//         entity,
//       );

//       // Assert
//       expect(result).resolves.toEqual(entity);
//       expect(
//         helpers.ActualizarApellidoDeInformacionPersonalHelper,
//       ).toHaveBeenCalledWith(
//         informacionPersonalId,
//         entity,
//         informacionPersonalService,
//         events.get(Topic.ApellidoDeInformacionPersonalActualizado),
//       );
//     });
//   });

//   describe('borrarInformacionPersonal', () => {
//     it('execute BorrarInformacionPersonalHelper with params', () => {
//       // Arrange
//       const informacionPersonalId = uuidv4();
//       events.set(
//         Topic.InformacionPersonalBorrada,
//         {} as EventPublisherBase<boolean>,
//       );
//       jest
//         .spyOn(helpers, 'BorrarInformacionPersonalHelper')
//         .mockResolvedValue(true);

//       // Act
//       aggregate = new UsuarioAggregateRoot({
//         events,
//         informacionPersonalService,
//       });
//       const result = aggregate.borrarInformacionPersonal(informacionPersonalId);

//       // Assert
//       expect(result).resolves.toEqual(true);
//       expect(helpers.BorrarInformacionPersonalHelper).toHaveBeenCalledWith(
//         informacionPersonalId,
//         informacionPersonalService,
//         events.get(Topic.InformacionPersonalBorrada),
//       );
//     });
//   });

//   describe('buscarInformacionPersonalPorInformacionPersonalID', () => {
//     it('execute BuscarInformacionPersonalPorInformacionPersonalIDHelper with params', () => {
//       // Arrange
//       const informacionPersonalId = uuidv4();
//       const entity = new InformacionPersonalDomainEntityBase();
//       events.set(
//         Topic.InformacionPersonalEncontradaPorInformacionPersonalId,
//         {} as EventPublisherBase<InformacionPersonalDomainEntityBase>,
//       );
//       jest
//         .spyOn(
//           helpers,
//           'BuscarInformacionPersonalPorInformacionPersonalIDHelper',
//         )
//         .mockResolvedValue(entity);

//       // Act
//       aggregate = new UsuarioAggregateRoot({
//         events,
//         informacionPersonalService,
//       });
//       const result =
//         aggregate.buscarInformacionPersonalPorInformacionPersonalID(
//           informacionPersonalId,
//         );

//       // Assert
//       expect(result).resolves.toEqual(entity);
//       expect(
//         helpers.BuscarInformacionPersonalPorInformacionPersonalIDHelper,
//       ).toHaveBeenCalledWith(
//         informacionPersonalId,
//         informacionPersonalService,
//         events.get(Topic.InformacionPersonalEncontradaPorInformacionPersonalId),
//       );
//     });
//   });

//   describe('buscarInformacionPersonalPorUsuarioID', () => {
//     it('execute BuscarInformacionPersonalPorUsuarioIDHelper with params', () => {
//       // Arrange
//       const usuarioId = uuidv4();
//       const entity = new InformacionPersonalDomainEntityBase();
//       events.set(
//         Topic.InformacionPersonalEncontradaPorUsuarioId,
//         {} as EventPublisherBase<InformacionPersonalDomainEntityBase>,
//       );
//       jest
//         .spyOn(helpers, 'BuscarInformacionPersonalPorUsuarioIDHelper')
//         .mockResolvedValue(entity);

//       // Act
//       aggregate = new UsuarioAggregateRoot({
//         events,
//         informacionPersonalService,
//       });
//       const result = aggregate.buscarInformacionPersonalPorUsuarioID(usuarioId);

//       // Assert
//       expect(result).resolves.toEqual(entity);
//       expect(
//         helpers.BuscarInformacionPersonalPorUsuarioIDHelper,
//       ).toHaveBeenCalledWith(
//         usuarioId,
//         informacionPersonalService,
//         events.get(Topic.InformacionPersonalEncontradaPorUsuarioId),
//       );
//     });
//   });

//   describe('buscarInformacionPersonalPorNombre', () => {
//     it('execute BuscarInformacionPersonalPorNombreHelper with params', () => {
//       // Arrange
//       const nombre = 'Julian Andres';
//       const entity = new InformacionPersonalDomainEntityBase();
//       events.set(
//         Topic.InformacionPersonalEncontradaPorNombre,
//         {} as EventPublisherBase<InformacionPersonalDomainEntityBase>,
//       );
//       jest
//         .spyOn(helpers, 'BuscarInformacionPersonalPorNombreHelper')
//         .mockResolvedValue(entity);

//       // Act
//       aggregate = new UsuarioAggregateRoot({
//         events,
//         informacionPersonalService,
//       });
//       const result = aggregate.buscarInformacionPersonalPorNombre(nombre);

//       // Assert
//       expect(result).resolves.toEqual(entity);
//       expect(
//         helpers.BuscarInformacionPersonalPorNombreHelper,
//       ).toHaveBeenCalledWith(
//         nombre,
//         informacionPersonalService,
//         events.get(Topic.InformacionPersonalEncontradaPorNombre),
//       );
//     });
//   });

//   describe('buscarInformacionPersonalPorApellido', () => {
//     it('execute BuscarInformacionPersonalPorApellidoHelper with params', () => {
//       // Arrange
//       const apellido = 'Lasso Figueroa';
//       const entity = new InformacionPersonalDomainEntityBase();
//       events.set(
//         Topic.InformacionPersonalEncontradaPorApellido,
//         {} as EventPublisherBase<InformacionPersonalDomainEntityBase>,
//       );
//       jest
//         .spyOn(helpers, 'BuscarInformacionPersonalPorApellidoHelper')
//         .mockResolvedValue(entity);

//       // Act
//       aggregate = new UsuarioAggregateRoot({
//         events,
//         informacionPersonalService,
//       });
//       const result = aggregate.buscarInformacionPersonalPorApellido(apellido);

//       // Assert
//       expect(result).resolves.toEqual(entity);
//       expect(
//         helpers.BuscarInformacionPersonalPorApellidoHelper,
//       ).toHaveBeenCalledWith(
//         apellido,
//         informacionPersonalService,
//         events.get(Topic.InformacionPersonalEncontradaPorApellido),
//       );
//     });
//   });

//   describe('crearUsuario', () => {
//     it('execute CrearUsuarioHelper with params', () => {
//       // Arrange
//       const entity = new UsuarioDomainEntityBase();
//       events.set(
//         Topic.UsuarioCreado,
//         {} as EventPublisherBase<UsuarioDomainEntityBase>,
//       );
//       jest.spyOn(helpers, 'CrearUsuarioHelper').mockResolvedValue(entity);

//       // Act
//       aggregate = new UsuarioAggregateRoot({
//         events,
//         usuarioService,
//       });
//       const result = aggregate.crearUsuario(entity);

//       // Assert
//       expect(result).resolves.toEqual(entity);
//       expect(helpers.CrearUsuarioHelper).toHaveBeenCalledWith(
//         entity,
//         usuarioService,
//         events.get(Topic.UsuarioCreado),
//       );
//     });
//   });

//   describe('actualizarEmailDeUsuario', () => {
//     it('execute ActualizarEmailDeUsuarioHelper with params', () => {
//       // Arrange
//       const usuarioId = uuidv4();
//       const entity = new UsuarioDomainEntityBase({
//         email: 'julian.lasso@sofka.com.co',
//       });
//       events.set(
//         Topic.EmailDeUsuarioActualizado,
//         {} as EventPublisherBase<UsuarioDomainEntityBase>,
//       );
//       jest
//         .spyOn(helpers, 'ActualizarEmailDeUsuarioHelper')
//         .mockResolvedValue(entity);

//       // Act
//       aggregate = new UsuarioAggregateRoot({
//         events,
//         usuarioService,
//       });
//       const result = aggregate.actualizarEmailDeUsuario(usuarioId, entity);

//       // Assert
//       expect(result).resolves.toEqual(entity);
//       expect(helpers.ActualizarEmailDeUsuarioHelper).toHaveBeenCalledWith(
//         usuarioId,
//         entity,
//         usuarioService,
//         events.get(Topic.EmailDeUsuarioActualizado),
//       );
//     });
//   });

//   describe('actualizarPasswordDeUsuario', () => {
//     it('execute ActualizarPasswordDeUsuarioHelper with params', () => {
//       // Arrange
//       const usuarioId = uuidv4();
//       const entity = new UsuarioDomainEntityBase({
//         password: 'Contraseña123*Segura',
//       });
//       events.set(
//         Topic.PasswordDeUsuarioActualizado,
//         {} as EventPublisherBase<boolean>,
//       );
//       jest
//         .spyOn(helpers, 'ActualizarPasswordDeUsuarioHelper')
//         .mockResolvedValue(true);

//       // Act
//       aggregate = new UsuarioAggregateRoot({
//         events,
//         usuarioService,
//       });
//       const result = aggregate.actualizarPasswordDeUsuario(usuarioId, entity);

//       // Assert
//       expect(result).resolves.toEqual(true);
//       expect(helpers.ActualizarPasswordDeUsuarioHelper).toHaveBeenCalledWith(
//         usuarioId,
//         entity,
//         usuarioService,
//         events.get(Topic.PasswordDeUsuarioActualizado),
//       );
//     });
//   });

//   describe('borrarUsuario', () => {
//     it('execute BorrarUsuarioHelper with params', () => {
//       // Arrange
//       const usuarioId = uuidv4();
//       events.set(Topic.UsuarioBorrado, {} as EventPublisherBase<boolean>);
//       jest.spyOn(helpers, 'BorrarUsuarioHelper').mockResolvedValue(true);

//       // Act
//       aggregate = new UsuarioAggregateRoot({
//         events,
//         usuarioService,
//       });
//       const result = aggregate.borrarUsuario(usuarioId);

//       // Assert
//       expect(result).resolves.toEqual(true);
//       expect(helpers.BorrarUsuarioHelper).toHaveBeenCalledWith(
//         usuarioId,
//         usuarioService,
//         events.get(Topic.UsuarioBorrado),
//       );
//     });
//   });

//   describe('buscarUsuarioPorEmail', () => {
//     it('execute BuscarUsuarioPorEmailHelper with params', () => {
//       // Arrange
//       const email = 'julian.lasso@sofka.com.co';
//       const entity = new UsuarioDomainEntityBase();
//       events.set(
//         Topic.UsuarioEncontradoPorEmail,
//         {} as EventPublisherBase<UsuarioDomainEntityBase>,
//       );
//       jest
//         .spyOn(helpers, 'BuscarUsuarioPorEmailHelper')
//         .mockResolvedValue(entity);

//       // Act
//       aggregate = new UsuarioAggregateRoot({
//         events,
//         usuarioService,
//       });
//       const result = aggregate.buscarUsuarioPorEmail(email);

//       // Assert
//       expect(result).resolves.toEqual(entity);
//       expect(helpers.BuscarUsuarioPorEmailHelper).toHaveBeenCalledWith(
//         email,
//         usuarioService,
//         events.get(Topic.UsuarioEncontradoPorEmail),
//       );
//     });
//   });

//   describe('buscarUsuarioPorUsuarioID', () => {
//     it('execute BuscarUsuarioPorUsuarioIDHelper with params', () => {
//       // Arrange
//       const usuarioId = uuidv4();
//       const entity = new UsuarioDomainEntityBase();
//       events.set(
//         Topic.UsuarioEncontradoPorUsuarioId,
//         {} as EventPublisherBase<UsuarioDomainEntityBase>,
//       );
//       jest
//         .spyOn(helpers, 'BuscarUsuarioPorUsuarioIDHelper')
//         .mockResolvedValue(entity);

//       // Act
//       aggregate = new UsuarioAggregateRoot({
//         events,
//         usuarioService,
//       });
//       const result = aggregate.buscarUsuarioPorUsuarioID(usuarioId);

//       // Assert
//       expect(result).resolves.toEqual(entity);
//       expect(helpers.BuscarUsuarioPorUsuarioIDHelper).toHaveBeenCalledWith(
//         usuarioId,
//         usuarioService,
//         events.get(Topic.UsuarioEncontradoPorUsuarioId),
//       );
//     });
//   });

//   describe('buscarUsuarioPorEmailYPassword', () => {
//     it('execute BuscarUsuarioPorEmailYPasswordHelper with params', () => {
//       // Arrange
//       const email = 'julian.lasso@sofka.com.co';
//       const password = 'Contraseña123*Segura';
//       const entity = new UsuarioDomainEntityBase();
//       events.set(
//         Topic.UsuarioEncontradoPorEmailYPassword,
//         {} as EventPublisherBase<UsuarioDomainEntityBase>,
//       );
//       jest
//         .spyOn(helpers, 'BuscarUsuarioPorEmailYPasswordHelper')
//         .mockResolvedValue(entity);

//       // Act
//       aggregate = new UsuarioAggregateRoot({
//         events,
//         usuarioService,
//       });
//       const result = aggregate.buscarUsuarioPorEmailYPassword(email, password);

//       // Assert
//       expect(result).resolves.toEqual(entity);
//       expect(helpers.BuscarUsuarioPorEmailYPasswordHelper).toHaveBeenCalledWith(
//         email,
//         password,
//         usuarioService,
//         events.get(Topic.UsuarioEncontradoPorEmailYPassword),
//       );
//     });
//   });

//   describe('validarUnicidadDelEmail', () => {
//     it('execute ValidarUnicidadDelEmailHelper with params', () => {
//       // Arrange
//       const email = 'julian.lasso@sofka.com.co';
//       events.set(Topic.EmailUnicoValidado, {} as EventPublisherBase<boolean>);
//       jest
//         .spyOn(helpers, 'ValidarUnicidadDelEmailHelper')
//         .mockResolvedValue(true);

//       // Act
//       aggregate = new UsuarioAggregateRoot({
//         events,
//         usuarioService,
//       });
//       const result = aggregate.validarUnicidadDelEmail(email);

//       // Assert
//       expect(result).resolves.toEqual(true);
//       expect(helpers.ValidarUnicidadDelEmailHelper).toHaveBeenCalledWith(
//         email,
//         usuarioService,
//         events.get(Topic.EmailUnicoValidado),
//       );
//     });
//   });
// });
