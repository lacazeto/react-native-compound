import { Dispatch, useReducer } from "react";
import { Text, StyleSheet, View } from "react-native";
import CommunitySlider from "@react-native-community/slider";
import { reducer, getInitialState } from "./reducer";
import { SlidersState, ReducerAction, ReducerActionType } from "./types";
import { DisplayableTokens, Token } from "types/tokens";

interface SliderProp {
  totalAmount: number;
  variation: Token;
  state: SlidersState;
  setState: Dispatch<ReducerAction>;
}
interface SlidersProps {
  totalAmount: number;
  variations: DisplayableTokens;
}

const Slider = (props: SliderProp) => {
  const { totalAmount, variation, state, setState } = props;
  const value = state["allocations"][variation];
  const humanReadableValue = value / 100;

  const onChange = (newValue: number) => {
    if (newValue > value) {
      setState({ type: ReducerActionType.increment, token: variation, value: newValue });
    } else {
      setState({ type: ReducerActionType.decrement, token: variation, value: newValue });
    }
  };

  return (
    <View>
      <Text style={styles.text}>{`${variation}: $${humanReadableValue}`}</Text>
      <CommunitySlider
        minimumValue={0}
        maximumValue={totalAmount}
        minimumTrackTintColor="#800080"
        maximumTrackTintColor="#ede8ed"
        value={value}
        step={100}
        style={styles.slider}
        {...props}
        onValueChange={onChange}
      />
    </View>
  );
};

const Sliders = (props: SlidersProps) => {
  const { totalAmount, variations } = props;
  const [state, dispatch] = useReducer(reducer, getInitialState(variations, totalAmount));

  return (
    <View>
      <Text style={styles.text}>Choose the allocation for each available token:</Text>
      {variations.map((variation) => (
        <Slider key={variation} totalAmount={totalAmount} variation={variation} state={state} setState={dispatch} />
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
