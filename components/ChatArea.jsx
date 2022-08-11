import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import chatData from "../data/chatData.json";

const ChatArea = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textArea}>
        <View>
          <Text style={styles.text}>
            {chatData.tags.map((item) => {
              return <Text key={item}>@{item} </Text>;
            })}
          </Text>
        </View>
        <View>
          <MaterialCommunityIcons name="send" style={styles.sendIcon} />
        </View>
      </View>
    </View>
  );
};

export default ChatArea;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#323d47",
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 12,
    paddingBottom: 32,
    zIndex:100,
    paddingHorizontal: 16,
  },
  textArea: {
    width: "100%",
    height: "100%",
    borderColor: "rgba(255,255,255,0.1)",
    borderRadius: 10,
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  text: {
    fontFamily: "poppins-italic",
    color: "rgba(255,255,255,0.5)",
  },
  sendIcon: {
    color: "#8a6bbf",
    fontSize: 24,
  },
});
