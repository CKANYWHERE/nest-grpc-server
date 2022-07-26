import { Controller } from '@nestjs/common';
import { HeroService } from './hero.service';
import { Hero, HeroById } from './hero.types';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @GrpcMethod('HeroService', 'FindOne')
  findOneHero(
    data: HeroById,
    metaData: Metadata,
    call: ServerUnaryCall<any, any>,
  ): Hero {
    return this.heroService.findOne(data.id);
  }
}
