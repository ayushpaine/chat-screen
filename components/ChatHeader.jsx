import {
  View,
  Text,
  StatusBar,
  Platform,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import { Image } from "react-native";
import chatInfo from "../data/chatInfo.json";

const ChatHeader = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerLeft}>
          <View>
            <Feather name="arrow-left" style={styles.arrowIcon} />
          </View>
          <View>
            <Image source={{ uri: chatInfo.groupDp }} style={styles.groupDp} />
          </View>
          <View>
            <Text style={styles.headerText}>{chatInfo.chatName}</Text>
          </View>
        </View>
        <View>
          <Feather name="info" style={styles.infoIcon} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("window").width,
    paddingHorizontal: 21,
    alignItems: "center",
  },
  safeArea: {
    flex: 1,
    paddingTop:
      Platform.OS === "android"
        ? 1.5 * StatusBar.currentHeight
        : 0.5 * StatusBar.currentHeight,
    display: "flex",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontFamily: "poppins-semibold",
    fontSize: 16,
    lineHeight: 24,
  },
  headerLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  infoIcon: {
    fontSize: 20,
    color: "#8a6bbf",
  },
  arrowIcon: {
    fontSize: 20,
    color: "#fff",
  },
  groupDp: {
    height: 32,
    width: 32,
    borderRadius: 16,
    marginHorizontal: 6,
  },
});
