import { useState } from "react";
import { TextInput, StyleSheet, SafeAreaView, Text, View } from "react-native";

interface Props {
  text: string;
  setTotalAmount: React.Dispatch<React.SetStateAction<string>>;
  totalAmount: string;
}

const Input = ({ text, totalAmount, setTotalAmount }: Props) => {
  const [value, setValue] = useState("");

  const updateTotalAmount = () => {
    if (/^\d+\.?\d*$/.test(value)) setTotalAmount(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>{text}</Text>
        <TextInput
          style={styles.input}
          defaultValue={"0.00"}
          clearTextOnFocus={true}
          onChangeText={(val) => setValue(val)}
          keyboardType={"numeric"}
          onSubmitEditing={() => updateTotalAmount()}
        />
      </View>
      <Text>Selected Value: {totalAmount}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,

    borderTopColor: "purple",
    borderTopWidth: 2,
    margin: 20,
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    flexShrink: 1,
  },
  input: {
    flexShrink: 1,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Input;
