import { IEventPublisher } from "../interface";

export abstract class EventPublisherBase<Response> implements IEventPublisher {
  private _response: Response | Response[];

  constructor(private readonly eventPublisher: IEventPublisher) {}

  get response(): Response | Response[] {
    return this._response;
  }

  set response(value: Response | Response[]) {
    this._response = value;
  }

  emit<Result = any, Input = Response>(
    pattern: any,
    data: Input,
  ): Promise<Result> {
    return this.eventPublisher.emit(pattern, data);
  }

  abstract publish<Result = any>(): Promise<Result>;
}
