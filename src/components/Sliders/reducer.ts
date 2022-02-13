import { SlidersState, ReducerAction, ReducerActionType } from "./types";
import { DisplayableTokens } from "types/tokens";

export const reducer = (state: SlidersState, action: ReducerAction) => {
  const keys = Object.keys(state.allocations);
  const divider = keys.length - 1;
  const newState = Object.assign({}, state);

  switch (action.type) {
    case ReducerActionType.increment:
      keys.forEach((key) => {
        if (key === action.token) newState["allocations"][action.token] = action.value;
        else newState["allocations"][action.token] -= action.value / divider;
      });
      console.log(divider, action.value, newState);
      return newState;
    case ReducerActionType.decrement:
      keys.forEach((key) => {
        if (key === action.token) newState["allocations"][action.token] = action.value;
        else newState["allocations"][action.token] += action.value / divider;
      });
      console.log(divider, action.value, newState);
      return newState;
    default:
      throw new Error();
  }
};

export const getInitialState = (variations: DisplayableTokens, totalAmount: number) => {
  const tokenValues = Object.fromEntries(
    variations.map((variation, index) => [variation, index === 0 ? totalAmount : 0])
  ) as SlidersState["allocations"];

  return { allocations: tokenValues, total: totalAmount };
};
