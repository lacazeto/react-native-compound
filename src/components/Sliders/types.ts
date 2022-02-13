import { Token } from "types/tokens";

export type SlidersState = {
  allocations: { [key in Token]: number };
  total: number;
};
export enum ReducerActionType {
  increment = "increment",
  decrement = "decrement",
}
export type ReducerAction = { type: ReducerActionType; token: Token; value: number };
