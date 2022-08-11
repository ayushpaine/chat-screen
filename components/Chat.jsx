import React from "react";
import ChatHeader from "./ChatHeader";
import ChatArea from "./ChatArea";
import ChatWindow from "./ChatWindow";
import { StyleSheet, View } from "react-native";

export default function Chat() {
  return (
    <>
      <View>
        <ChatHeader />
        <ChatWindow />
      </View>
      <ChatArea />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
