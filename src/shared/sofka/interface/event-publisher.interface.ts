export interface IEventPublisher {
  emit<Result = any, Input = any>(pattern: any, data: Input): Promise<Result>;
}
