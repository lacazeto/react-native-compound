import { DisplayableTokens, Token } from "types/tokens";


const reducer = (state: { [key in Token]: number }, action: { type: "increment"|"decrement", token: Token}) => {
  switch (action.type) {
    case 'increment':
      return { ...state, state[action.type]: state } ;
    default:
      throw new Error();
  }
}

export default reducer;