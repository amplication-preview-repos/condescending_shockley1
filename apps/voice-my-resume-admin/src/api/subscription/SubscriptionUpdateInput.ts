import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PaymentUpdateManyWithoutSubscriptionsInput } from "./PaymentUpdateManyWithoutSubscriptionsInput";

export type SubscriptionUpdateInput = {
  subscriptionType?: string | null;
  status?: string | null;
  endDate?: Date | null;
  startDate?: Date | null;
  user?: UserWhereUniqueInput | null;
  payments?: PaymentUpdateManyWithoutSubscriptionsInput;
};
