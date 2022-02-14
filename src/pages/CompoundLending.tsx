import { Text, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import { useState } from "react";
import useFetch from "api/useFetch";
import { CompoundCTokenResponse } from "types/api-calls";
import { compoundCTokenValidator } from "api/validators";
import SupplyInterestViewer from "components/SupplyInterestViewer";
import Input from "components/Input";
import Sliders from "components/Sliders";
import { compound } from "api/api.json";
import tokenAdresses from "config/token-address.json";
import { DisplayableTokens } from "types/tokens";

const url = compound.baseUrl + compound.endpoints.CTokenService;
const displayableTokens: DisplayableTokens = ["DAI", "USDC", "USDT"];

const CompoundLending = () => {
  const [totalAmount, setTotalAmount] = useState("");
  const { response, loading, error } = useFetch<CompoundCTokenResponse>(
    url,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        addresses: displayableTokens.map((token) => tokenAdresses[token]),
        block_timestamp: 0,
      }),
    },
    compoundCTokenValidator
  );

  const render = () => {
    if (loading) return <ActivityIndicator size="large" color="purple" />;
    if (error)
      return (
        <Text style={styles.textH1}>
          &#128680; Looks like something went wrong! Please try refreshing the page! &#128680;
        </Text>
      );

    return (
      response && (
        <>
          <Text style={styles.textH1}>Plan ahead your assets allocation and earnings!</Text>
          <SupplyInterestViewer cTokens={response?.cToken} />
          <Input
            totalAmount={totalAmount}
            setTotalAmount={setTotalAmount}
            text="Enter amount value you wish to invest ($):"
          />
          {totalAmount ? <Sliders variations={displayableTokens} totalAmount={parseInt(totalAmount) * 100} /> : null}
        </>
      )
    );
  };

  return <ScrollView contentContainerStyle={styles.container}>{render()}</ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textH1: {
    textAlign: "center",
    minHeight: 120,
    paddingTop: 50,
    width: "100%",
    fontSize: 20,
    fontWeight: "700",
  },
});

export default CompoundLending;
