import { Injectable } from '@nestjs/common';
import { CreateStageDto } from './dto/create-stage.dto';
import { UpdateStageDto } from './dto/update-stage.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stage } from './entities/stage.entity';

@Injectable()
export class StageService {
  constructor(@InjectRepository(Stage) private stageRepo: Repository<Stage>) {}

  create(CreateStageDto: CreateStageDto) {
    console.log('createBookDto', CreateStageDto);
    const { name } = CreateStageDto;
    return this.stageRepo.save({name});
  }
 
  findAll() {
    return  this.stageRepo.find();
  }

  findOne(id: number) {
    return this.stageRepo.findOneBy({id});
  }

  update(id: number, updateStageDto: UpdateStageDto) {
    return  this.stageRepo.update({id},updateStageDto)
  }

  remove(id: number) {
    return  this.stageRepo.delete({id});
  }
}
