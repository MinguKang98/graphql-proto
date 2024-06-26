import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';
import {join} from 'path';
import { CafeModule } from './cafe/cafe.module';
import { BeverageModule } from './beverage/beverage.module';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            // autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            // sortSchema: true,
            typePaths: ['./**/*.gql']
        }),
        CafeModule,
        BeverageModule,
    ]
})
export class AppModule {
}
