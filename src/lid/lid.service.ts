import { Injectable } from '@nestjs/common';
import { CreateLidDto } from './dto/create-lid.dto';
import { UpdateLidDto } from './dto/update-lid.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lid } from './entities/lid.entity';

@Injectable()
export class LidService {
  constructor(@InjectRepository(Lid) private lidRepo: Repository<Lid>) {}

  create(createLidDto: CreateLidDto) {
    console.log('createLidDto', createLidDto);


    const { first_name,
            last_name,
            phone_number,
            target_id,
            lig_stage_id,
            lid_status_id,
            test_date,
            trial_lesson_date,
            trial_lesson_group_id,
            cansel_reason_id
} = createLidDto;
    return this.lidRepo.save({ ...createLidDto });
  }
  findAll() {
    return this.lidRepo.find({

      relations:{
       lid_status_id:true
      }
    }
    );
  }

  findOne(id: number) {
    return this.lidRepo.findOneBy({ id });
  }

  update(id: number, updateLidDto: UpdateLidDto) {
    return this.lidRepo.update({ id }, updateLidDto);
  }

  remove(id: number) {
    return this.lidRepo.delete({ id });
  }
}
