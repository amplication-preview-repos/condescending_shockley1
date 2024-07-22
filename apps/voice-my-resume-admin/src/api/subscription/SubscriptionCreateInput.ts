import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PaymentCreateNestedManyWithoutSubscriptionsInput } from "./PaymentCreateNestedManyWithoutSubscriptionsInput";

export type SubscriptionCreateInput = {
  subscriptionType?: string | null;
  status?: string | null;
  endDate?: Date | null;
  startDate?: Date | null;
  user?: UserWhereUniqueInput | null;
  payments?: PaymentCreateNestedManyWithoutSubscriptionsInput;
};
