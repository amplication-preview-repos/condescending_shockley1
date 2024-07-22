import { InputJsonValue } from "../../types";
import { SubscriptionCreateNestedManyWithoutUsersInput } from "./SubscriptionCreateNestedManyWithoutUsersInput";
import { PaymentCreateNestedManyWithoutUsersInput } from "./PaymentCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  subscriptions?: SubscriptionCreateNestedManyWithoutUsersInput;
  payments?: PaymentCreateNestedManyWithoutUsersInput;
};
