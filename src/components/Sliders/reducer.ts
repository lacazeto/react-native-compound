import { SlidersState, ReducerAction } from "./types";
import { DisplayableTokens, Token } from "types/tokens";

export const reducer = (state: SlidersState, action: ReducerAction) => {
  const keys = Object.keys(state.allocations) as Token[];
  const divider = keys.length - 1;
  const valueChange = (state.allocations[action.token] - action.value) / divider;
  const nulledSliders = keys.filter((key) => state.allocations[key as Token] === 0).length;
  const nullSliderMultiplier = valueChange > 0 ? 1 : nulledSliders + 1;
  const newState = Object.assign({}, state);

  keys.forEach((key) => {
    if (key === action.token) newState["allocations"][action.token] = action.value;
    else if (newState["allocations"][key as Token] === 0 && valueChange < 0) undefined;
    else newState["allocations"][key as Token] += valueChange * nullSliderMultiplier;
  });

  return newState;
};

export const getInitialState = (variations: DisplayableTokens, totalAmount: number) => {
  const tokenValues = Object.fromEntries(
    variations.map((variation, index) => [variation, index === 0 ? totalAmount : 0])
  ) as SlidersState["allocations"];

  return { allocations: tokenValues, total: totalAmount };
};
