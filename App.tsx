import { StyleSheet, View } from "react-native";
import Header from "components/Header";
import CompoundLending from "pages/CompoundLending";

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <CompoundLending />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
