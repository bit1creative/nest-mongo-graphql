import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { LessonService } from './lesson.service';
import { StudentModule } from '../student/student.module';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson]), StudentModule],
  controllers: [],
  providers: [LessonResolver, LessonService],
  exports: [],
})
export class LessonModule {}
