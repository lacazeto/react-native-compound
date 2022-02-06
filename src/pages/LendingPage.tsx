import { Text, View, StyleSheet } from "react-native";
import useFetch from "api/useFetch";
import { CompoundCTokenResponse } from "types/api-calls";
import { compound } from "api/href.json";
import { DAI, USDC, USDT } from "config/token-address.json";

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
  },
});

const url = compound.api + compound.endpoints.CTokenService;

const LendingPreview = () => {
  const { response, loading, error } = useFetch<CompoundCTokenResponse>(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      addresses: [USDC, USDT, DAI],
      block_timestamp: 0,
    }),
  });

  console.log(response, loading, error);

  return (
    <View style={styles.center}>
      <Text>Hello World!</Text>
    </View>
  );
};

export default LendingPreview;
