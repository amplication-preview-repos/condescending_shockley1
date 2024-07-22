import { User } from "../user/User";
import { Subscription } from "../subscription/Subscription";

export type Payment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  currency: string | null;
  status: string | null;
  paymentDate: Date | null;
  transactionId: string | null;
  paymentMethod: string | null;
  user?: User | null;
  subscription?: Subscription | null;
};
