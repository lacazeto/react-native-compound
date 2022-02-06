export interface CompoundCTokenResponse {
  cToken: Record<any, any>;
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

export type CustomFetchResponse<T> = {
  response: T | null;
  error: string;
  loading: boolean;
};
