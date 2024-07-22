import { SortOrder } from "../../util/SortOrder";

export type JobDescriptionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
};
