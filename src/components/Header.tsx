import { Text, View, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>reDefi Investments</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "60px",
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "20px",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
    alignSelf: "flex-start",
  },
});

export default Header;
