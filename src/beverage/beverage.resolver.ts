import {Resolver, Query} from "@nestjs/graphql";

@Resolver('Beverage')
export class BeverageResolver {
    @Query()
    beverages() {
        return [
            {
                id: '1',
                name: 'coffee1',
                price: 5000,
            },
            {
                id: '2',
                name: 'coffee1',
                price: 6000,
            }
        ];
    }
}