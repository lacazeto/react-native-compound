import { Token } from "types/tokens";

export type SlidersState = {
  allocations: { [key in Token]: number };
  total: number;
};
export type ReducerAction = { type: "increment" | "decrement"; token: Token };
