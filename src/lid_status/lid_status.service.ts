import { Injectable } from '@nestjs/common';
import { CreateLidStatusDto } from './dto/create-lid_status.dto';
import { UpdateLidStatusDto } from './dto/update-lid_status.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LidStatus } from './entities/lid_status.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LidStatusService {
  constructor(
    @InjectRepository(LidStatus) private list_statusRepo: Repository<LidStatus>,
  ) {}

  create(createLidStatusDto: CreateLidStatusDto) {
    console.log('createLidStatusDto', createLidStatusDto);
    const { status } = createLidStatusDto;
    return this.list_statusRepo.save({ ...createLidStatusDto });
  }

  findAll() {
    return this.list_statusRepo.find({
      relations: {
        lids: true,
      },
      select: {
        id: true,
        lids: {
          first_name: true,
        },
      },
    });
  }

  findOne(id: number) {
    return this.list_statusRepo.findOneBy({ id });
  }

  update(id: number, updateLidStatusDto: UpdateLidStatusDto) {
    return this.list_statusRepo.update({ id }, updateLidStatusDto);
  }

  remove(id: number) {
    return this.list_statusRepo.delete({ id });
  }
}
