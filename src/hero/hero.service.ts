import { Injectable } from '@nestjs/common';

@Injectable()
export class HeroService {
  private items = [
    { id: 1, name: 'Ian' },
    { id: 2, name: 'DPR' },
  ];

  findOne(id: number) {
    return this.items.find((item) => item.id === id);
  }
}
