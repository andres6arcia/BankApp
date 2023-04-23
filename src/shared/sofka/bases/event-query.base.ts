import { IEventQuery } from "../interface";

export abstract class EventQueryBase<Response> implements IEventQuery {
  constructor(private readonly eventQuery: IEventQuery) {}

  send<Result, Input = Response>(pattern: any, data: Input): Promise<Result> {
    return this.eventQuery.send(pattern, data);
  }

  abstract query<Result = any>(...args: any): Promise<Result>;
}
