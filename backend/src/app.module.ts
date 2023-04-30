import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PositionsModule} from './positions/positions.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        PositionsModule
    ]
})
export class AppModule {
}
