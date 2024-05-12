import { Module } from '@nestjs/common';
import {BeverageResolver} from "./beverage.resolver";

@Module({
    providers: [BeverageResolver]
})
export class BeverageModule {}
