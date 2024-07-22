import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  subscriptionType?: SortOrder;
  status?: SortOrder;
  endDate?: SortOrder;
  startDate?: SortOrder;
  userId?: SortOrder;
};
