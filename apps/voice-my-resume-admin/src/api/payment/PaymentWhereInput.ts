import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";

export type PaymentWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  currency?: StringNullableFilter;
  status?: StringNullableFilter;
  paymentDate?: DateTimeNullableFilter;
  transactionId?: StringNullableFilter;
  paymentMethod?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  subscription?: SubscriptionWhereUniqueInput;
};
