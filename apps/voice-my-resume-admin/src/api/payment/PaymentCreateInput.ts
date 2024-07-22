import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  currency?: string | null;
  status?: string | null;
  paymentDate?: Date | null;
  transactionId?: string | null;
  paymentMethod?: string | null;
  user?: UserWhereUniqueInput | null;
  subscription?: SubscriptionWhereUniqueInput | null;
};
