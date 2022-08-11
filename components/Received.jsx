import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";

export default function Received() {
  return (
    <View style={styles.container}>
      <View style={styles.message}>
        <Image
          source={{ uri: "https://reactjs.org/logo-og.png" }}
          style={styles.userDp}
        />
        <View style={styles.body}>
          <View style={styles.textContainer}>
            <Text style={styles.username}>RP - JDS</Text>
            <Text style={styles.messageBody}>
              Hello
              Everyoneooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
            </Text>
          </View>
          <View style={styles.time}>
            <Text style={styles.timeText}>9:35 PM</Text>
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
    flexShrink: 1,
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
