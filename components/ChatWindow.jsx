import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Received from "./Received";
import Sent from "./Sent";
import messages from "../data/messages.json";

export default function ChatWindow() {
  return (
    <View style={styles.container}>
      {messages.received.map((item) => {
        console.log(item);
        return <Received data={item} />;
      })}
      {messages.sent.map((item) => {
        console.log(item);
        return <Sent data={item} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 15,
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "100%",
    paddingHorizontal: 16,
  },
});
