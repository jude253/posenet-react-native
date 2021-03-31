import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function PredictionList({ predictions = {} }) {
  return (
    <View style={styles.container}>
        <Text style={styles.text} key={`item-0`}>
          {predictions.score}
        </Text>

    </View>
  );
}

const margin = 24;

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
    position: "absolute",
    bottom: margin,
    left: margin,
    right: margin,
    backgroundColor: "rgba(255,255,255,0.8)",
    padding: 8,
    borderRadius: 20,
    alignItems: "center",
  },
  text: {
    paddingVertical: 2,
    fontSize: 20,
  },
});
