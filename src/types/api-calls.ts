export interface CToken {
  supply_rate: {
    value: string;
  };
  underlying_symbol: string;
}

export interface CompoundCTokenResponse {
  cToken: CToken[];
  error: string;
  meta: {
    unique_suppliers?: number;
    unique_borrowers?: number;
  };
  request: {
    addresses: string[];
    block_number: number;
    block_timestamp: number;
    meta: boolean;
    network: string;
  };
}

export type ApiResponseValidatorCb<T> = (response: T) => {
  isValid: boolean;
  error: Error | null;
};

export interface CustomFetchResponse<T> {
  response: T | null;
  error: string;
  loading: boolean;
}
