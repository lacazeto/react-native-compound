import { useState, useReducer } from "react";
import { Text, StyleSheet, View } from "react-native";
import CommunitySlider from "@react-native-community/slider";
import reducer from "./reducer";
import { DisplayableTokens, Token } from "types/tokens";

interface SliderProp {
  totalAmount: number;
  variation: string;
  index: number;
}
interface SlidersProps {
  totalAmount: number;
  variations: DisplayableTokens;
}

const Slider = (props: SliderProp) => {
  const { totalAmount, index, variation } = props;
  const [value, setValue] = useState(index === 0 ? totalAmount : 0);

  return (
    <View>
      <Text style={styles.text}>{`Allocation to ${variation}: ${value.toFixed(2)}`}</Text>
      <CommunitySlider
        minimumValue={0}
        maximumValue={totalAmount}
        minimumTrackTintColor="#800080"
        maximumTrackTintColor="#ede8ed"
        value={value}
        step={1}
        style={styles.slider}
        {...props}
        onValueChange={(value) => setValue(value)}
      />
    </View>
  );
};

const Sliders = (props: SlidersProps) => {
  const { totalAmount, variations } = props;
  const initialState: { [key in Token]: number } = Object.fromEntries(
    variations.map((variation, index) => [variation, index === 0 ? totalAmount : 0])
  );

  const [value, setValue] = useReducer(reducer, initialState);

  return (
    <View>
      <Text style={styles.text}>Choose the allocation for each available token:</Text>

      {variations.map((variation, index) => (
        <Slider key={variation} totalAmount={totalAmount} variation={variation} index={index} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  slider: {
    width: 300,
    opacity: 1,
    height: 50,
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "500",
    margin: 0,
  },
});

export default Sliders;
