import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Received from "./Received";
import Sent from "./Sent";

export default function ChatWindow() {
  return (
    <View style={styles.container}>
      <Received />
      <Sent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 15,
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 16,
  },
});
