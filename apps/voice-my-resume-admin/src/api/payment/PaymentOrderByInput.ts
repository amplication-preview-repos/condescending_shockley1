import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  amount?: SortOrder;
  currency?: SortOrder;
  status?: SortOrder;
  paymentDate?: SortOrder;
  transactionId?: SortOrder;
  paymentMethod?: SortOrder;
  userId?: SortOrder;
  subscriptionId?: SortOrder;
};
