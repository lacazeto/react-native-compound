import { CompoundCTokenResponse } from "types/api-calls";

export const compoundCTokenValidator = (res: CompoundCTokenResponse) => {
  if (res.error)
    return {
      isValid: false,
      error: new Error("API call returned internal error"),
    };

  if (res.cToken.every((token) => token?.supply_rate && token?.underlying_symbol)) {
    return { isValid: true, error: null };
  }

  return {
    isValid: false,
    error: new Error("Invalid schema for response's payload"),
  };
};
