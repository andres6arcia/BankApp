export interface IEventQuery {
  send<Result = any, Input = any>(pattern: any, data: Input): Promise<Result>;
}
