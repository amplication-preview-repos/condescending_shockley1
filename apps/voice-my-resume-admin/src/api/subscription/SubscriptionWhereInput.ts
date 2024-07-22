import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type SubscriptionWhereInput = {
  id?: StringFilter;
  subscriptionType?: StringNullableFilter;
  status?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  startDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
  payments?: PaymentListRelationFilter;
};
