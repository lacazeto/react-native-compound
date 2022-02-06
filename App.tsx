import { StyleSheet, View } from "react-native";
import LendingPreview from "pages/LendingPage";

const App = () => {
  return (
    <View style={styles.container}>
      <LendingPreview />
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
});

export default App;
