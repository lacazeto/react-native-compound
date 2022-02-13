import { SlidersState, ReducerAction } from "./types";
import { DisplayableTokens } from "types/tokens";

export const reducer = (state: SlidersState, action: ReducerAction) => {
  switch (action.type) {
    case "increment":
      if (state["allocations"][action.token] === state.total) return { ...state };
      const newState = {};

      return { ...state };
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
