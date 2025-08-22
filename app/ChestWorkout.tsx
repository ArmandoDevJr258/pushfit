import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'

const ArmsWorkout = () => {
    const router = useRouter()
  return (
    <View>
        <Text style={styles.txt1}>Arms Workout</Text>

        <View style={styles.tempo}></View>
    </View>
  )
}

export default ArmsWorkout

const styles = StyleSheet.create({
    txt1:{
        color:'white',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:30

    }
,tempo:{
    backgroundColor:'gray',
    width:'80%',
    height:'40%',
    borderRadius:'100%',
    marginTop:300,
    alignSelf:'center',
    borderColor:'green',
    borderWidth:2
}
})
