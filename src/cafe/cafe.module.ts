import {Module} from '@nestjs/common';
import {CafeResolver} from "./cafe.resolver";
import {CafeService} from "./cafe.service";

@Module({
    providers: [CafeResolver, CafeService]
})
export class CafeModule {
}
