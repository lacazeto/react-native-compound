import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import useFetch from "api/useFetch";
import { CompoundCTokenResponse } from "types/api-calls";
import { compoundCTokenValidator } from "api/validators";
import SupplyInterestViewer from "components/SupplyInterestViewer";
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

  const render = () => {
    if (loading) return <ActivityIndicator size="large" color="purple" />;
    if (error)
      return (
        <Text style={styles.textH2}>
          &#128680; Looks like something went wrong! Please try refreshing the page! &#128680;
        </Text>
      );

    return <Text style={styles.textH1}>Plan ahead your assets allocation and earnings!</Text>;
  };

  return <View style={styles.container}>{render()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  textH1: {
    flex: 1,
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
  textH2: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
});

export default LendingPreview;
