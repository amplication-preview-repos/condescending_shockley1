import { Subscription as TSubscription } from "../api/subscription/Subscription";

export const SUBSCRIPTION_TITLE_FIELD = "subscriptionType";

export const SubscriptionTitle = (record: TSubscription): string => {
  return record.subscriptionType?.toString() || String(record.id);
};
