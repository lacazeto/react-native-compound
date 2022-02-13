import tokenAdresses from "config/token-address.json";

export type Token = keyof typeof tokenAdresses;
export type DisplayableTokens = Token[];
