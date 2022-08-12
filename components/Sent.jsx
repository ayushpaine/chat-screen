import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";

export default function Sent({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.message}>
          <View style={styles.body}>
            <View style={styles.textContainer}>
              <Text style={styles.username}>{data.username}</Text>
              <Text style={styles.messageBody}>{data.body}</Text>
            </View>
            <View style={styles.time}>
              <Text style={styles.timeText}>{data.time}</Text>
            </View>
          </View>
          <Image
            source={{
              uri: data.userDp,
            }}
            style={styles.userDp}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    marginVertical: 8,
  },
  wrapper: {
    paddingLeft: "20%",
  },
  userDp: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginLeft: 12,
  },
  message: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  textContainer: {
    backgroundColor: "#8A6BBF",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 12,
  },
  username: {
    fontFamily: "poppins-bold",
    fontSize: 14,
    lineHeight: 21,
    color: "rgba(255,255,255,0.5)",
    textAlign: "right",
  },
  messageBody: {
    fontFamily: "poppins-regular",
    fontSize: 16,
    lineHeight: 24,
    color: "white",
    textAlign: "left",
  },
  time: {
    display: "flex",
    marginRight: 12,
    marginTop: 6,
  },
  timeText: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 14,
    lineHeight: 21,
    textAlign: "right",
  },
});
