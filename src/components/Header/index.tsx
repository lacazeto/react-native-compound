import { Text, SafeAreaView, StyleSheet } from "react-native";

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>reDefi Investments</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 20,
  },
  title: {
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: "700",
    color: "white",
    alignSelf: "flex-start",
  },
});

export default Header;
