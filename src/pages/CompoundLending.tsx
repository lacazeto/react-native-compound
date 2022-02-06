import { Text, View, StyleSheet } from "react-native";
import useFetch from "api/useFetch";
import { CompoundCTokenResponse } from "types/api-calls";
import { compoundCTokenValidator } from "api/validators";
import { compound } from "api/api.json";
import { DAI, USDC, USDT } from "config/token-address.json";

const url = compound.baseUrl + compound.endpoints.CTokenService;

const LendingPreview = () => {
  const { response, loading, error } = useFetch<CompoundCTokenResponse>(
    url,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        addresses: [USDC, USDT, DAI],
        block_timestamp: 0,
      }),
    },
    compoundCTokenValidator
  );

  return (
    <View style={styles.container}>
      <Text style={styles.textH1}>Plan ahead your assets allocation and earnings!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textH1: {
    flex: 1,
    fontSize: 32,
    fontWeight: "700",
  },
});

export default LendingPreview;
