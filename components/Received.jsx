import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";

export default function Received({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.message}>
          <Image
            source={{
              uri: data.userDp,
            }}
            style={styles.userDp}
          />
          <View style={styles.body}>
            <View style={styles.textContainer}>
              <Text style={styles.username}>{data.username}</Text>
              <Text style={styles.messageBody}>{data.body}</Text>
            </View>
            <View style={styles.time}>
              <Text style={styles.timeText}>{data.time}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    marginVertical: 8,
  },
  wrapper: {
    paddingRight: "25%",
  },
  userDp: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  message: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  textContainer: {
    backgroundColor: "#333D47",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    padding: 12,
  },
  username: {
    fontFamily: "poppins-bold",
    fontSize: 14,
    lineHeight: 21,
    color: "rgba(255,255,255,0.5)",
  },
  messageBody: {
    fontFamily: "poppins-regular",
    fontSize: 16,
    lineHeight: 24,
    color: "white",
  },
  time: {
    display: "flex",
    marginLeft: 12,
    marginTop: 6,
  },
  timeText: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 14,
    lineHeight: 21,
  },
});
