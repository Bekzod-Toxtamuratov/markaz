import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StageModule } from './stage/stage.module';
import { Stage } from './stage/entities/stage.entity';
import { LidStatusModule } from './lid_status/lid_status.module';
import { LidStatus } from './lid_status/entities/lid_status.entity';
import { ReasonLidModule } from './reason_lid/reason_lid.module';
import { ReasonLid } from './reason_lid/entities/reason_lid.entity';
import { LidModule } from './lid/lid.module';
import { Lid } from './lid/entities/lid.entity';
import { TargetModule } from './target/target.module';
import { Target } from './target/entities/target.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'markaz',
      entities: [Stage, LidStatus, ReasonLid, Lid, Target],
      synchronize: true,
    }),
    StageModule,
    LidStatusModule,
    ReasonLidModule,
    LidModule,
    TargetModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
