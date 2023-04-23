import { Controller } from '@nestjs/common';
import {
  Ctx,
  EventPattern,
  KafkaContext,
  Payload,
} from '@nestjs/microservices';
import { Topic } from '../../../domain/events/publishers/enums';

@Controller()
export class RoleAddedController {
  @EventPattern(Topic.RoleAdded)
  userCreated(@Payload() data: any, @Ctx() context: KafkaContext) {
    console.log('----------------------');
    console.log('Data: ', data.data);
    console.log('----------------------');
    return true;
  }
}
