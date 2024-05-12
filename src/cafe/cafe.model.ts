import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class Cafe  {
    @Field()
    id: string;

    @Field()
    name: string;

    @Field()
    location: string;

}
