import { Injectable } from '@nestjs/common';
import { CreateReasonLidDto } from './dto/create-reason_lid.dto';
import { UpdateReasonLidDto } from './dto/update-reason_lid.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReasonLid } from './entities/reason_lid.entity';

@Injectable()
export class ReasonLidService {
  constructor(
    @InjectRepository(ReasonLid) private reason_lidRepo: Repository<ReasonLid>,
  ) {}
  create(createReasonLidDto: CreateReasonLidDto) {
    console.log('createReasonLidDto', createReasonLidDto);

    const { reason_lid } = createReasonLidDto;
    return this.reason_lidRepo.save({ reason_lid });
  }

  findAll() {
    return this.reason_lidRepo.find();
  }

  findOne(id: number) {
    return this.reason_lidRepo.findOneBy({ id });
  }

  update(id: number, updateReasonLidDto: UpdateReasonLidDto) {
    return this.reason_lidRepo.update({ id }, updateReasonLidDto);
  }

  remove(id: number) {
    return this.reason_lidRepo.delete({ id });
  }
}
