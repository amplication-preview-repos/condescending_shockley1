import { User } from "../user/User";
import { Payment } from "../payment/Payment";

export type Subscription = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  subscriptionType: string | null;
  status: string | null;
  endDate: Date | null;
  startDate: Date | null;
  user?: User | null;
  payments?: Array<Payment>;
};
