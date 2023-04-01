import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType({ description: 'user' })
export class User {
  @Field()
  username: string;

  @Field()
  password: string;
}
