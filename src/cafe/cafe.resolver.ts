import {Resolver, Query} from "@nestjs/graphql";
import {CafeService} from "./cafe.service";

@Resolver('Cafe')
export class CafeResolver {
    constructor(private readonly cafeService: CafeService) {
    }

    @Query()
    cafes() {
        return this.cafeService.findAll();
    }
}