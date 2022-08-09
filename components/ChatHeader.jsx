import { View, Text , StatusBar, Platform, StyleSheet, SafeAreaView} from 'react-native'
import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const ChatHeader = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
    <View>
        <View>
            <Text style={styles.headerGroupName}>
                Group 1
            </Text>
        </View>
        <View>
            <InfoOutlinedIcon />
        </View>
    </View>
</SafeAreaView>
  )
}

export default ChatHeader

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? 1.5*StatusBar.currentHeight : 0.5*StatusBar.currentHeight,
    },
    headerGroupName:{
        color:"white", 
        fontFamily:"poppins-semibold", 
        fontSize:16, 
        lineHeight:24
    }
  });