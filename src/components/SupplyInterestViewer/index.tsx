import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { CompoundCTokenResponse, CToken } from "types/api-calls";
import { formatSupplyInterest } from "helpers/data-formatters";

interface Props {
  cTokens: CompoundCTokenResponse["cToken"];
}

const Item = ({ supply_rate, underlying_symbol }: CToken): JSX.Element => (
  <View>
    <Text>
      {underlying_symbol}: {formatSupplyInterest(supply_rate.value)}%
    </Text>
  </View>
);

const SupplyInterestViewer = ({ cTokens }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Current APY:</Text>
      {cTokens.map((cToken) => {
        const { supply_rate, underlying_symbol } = cToken;
        return <Item key={underlying_symbol} supply_rate={supply_rate} underlying_symbol={underlying_symbol} />;
      })}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    margin: 20,
  },
  text: {
    alignSelf: "flex-start",
    fontWeight: "700",
  },
});

export default SupplyInterestViewer;
