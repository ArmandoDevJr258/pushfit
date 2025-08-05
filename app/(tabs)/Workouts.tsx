import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Workouts = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workouts</Text>
      <Text style={styles.p1}>Explore Workout Plans</Text>
      <TouchableOpacity style={styles.btnfilter}>
        <Image
          source={require('../../assets/images/filter.png')} // adjust path if needed
          style={styles.iconfilter}
        />
      </TouchableOpacity>

      <ScrollView style={styles.scrollview}>
        <View style={styles.card1}>
          <Image
            source={require('../../assets/images/erik-mclean-1MiLJjXmPhA-unsplash.jpg')}
            style={styles.img1}
          />
          <Text style={styles.text1}>Arms Workout</Text>
          <Text style={styles.text2}>15 mins</Text>
          <TouchableOpacity style={styles.btnstart} onPress={() => setVisible(true)}>
            <Text>Start workout</Text>
          </TouchableOpacity>
        </View>

        {/* Other workout cards */}
        <View style={styles.card2}>
          <Image
            source={require('../../assets/images/charles-gaudreault-xXofYCc3hqc-unsplash.jpg')}
            style={styles.img1}
          />
          <Text style={styles.text1}>Chest Workout</Text>
          <Text style={styles.text2}>15 mins</Text>
          <TouchableOpacity style={styles.btnstart}>
            <Text>Start workout</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card3}>
          <Image
            source={require('../../assets/images/christopher-campbell-Qn1_JCbL_04-unsplash.jpg')}
            style={styles.img1}
          />
          <Text style={styles.text1}>Arbs Workout</Text>
          <Text style={styles.text2}>15 mins</Text>
          <TouchableOpacity style={styles.btnstart}>
            <Text>Start workout</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card4}>
          <Image
            source={require('../../assets/images/andrew-valdivia--b4GeymbJl8-unsplash.jpg')}
            style={styles.img2}
          />
          <Text style={styles.text1}>Legs Workout</Text>
          <Text style={styles.text2}>15 mins</Text>
          <TouchableOpacity style={styles.btnstart}>
            <Text>Start workout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {visible && (
        <View style={styles.fakeScreen}>
          <TouchableOpacity style={styles.btnback} onPress={() => setVisible(false)}>
            <Image
              source={require('../../assets/images/arrow.png')} // adjust path if needed
              style={styles.icon}
                    />
          </TouchableOpacity>
          <Text style={styles.p3}>Arms Workout</Text>

          <View style={styles.train1}></View>
          <View style={styles.train1}></View>
          <View style={styles.train1}></View>
          <View style={styles.train1}></View>
          <View style={styles.train1}></View>
          <View style={styles.train1}></View>
          
        </View>
      )}
    </View>
  );
};

export default Workouts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // dark bg for contrast
  },
  title: {
    fontSize: 30,
    marginTop: 30,
    marginLeft: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  icon:{
     width: 25,
    height: 25,
    resizeMode: 'contain',
    tintColor:'white'
   
  },
  p1: {
    marginTop: 20,
    color: 'white',
    marginLeft: 20,
  },
  btnfilter: {
    width: 30,
    height: 30,
    marginLeft: 330,
    
    marginTop: -70,
  },
  iconfilter: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    tintColor: 'white',
  },
  scrollview: {
    marginTop: -50,
  },
  card1: {
    width: 350,
    height: 130,
    backgroundColor: 'gray',
    borderRadius: 10,
    marginTop: 100,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  card2: {
    width: 350,
    height: 130,
    backgroundColor: 'gray',
    borderRadius: 10,
    marginTop: 50,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  card3: {
    width: 350,
    height: 130,
    backgroundColor: 'gray',
    borderRadius: 10,
    marginTop: 50,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  card4: {
    width: 350,
    height: 130,
    backgroundColor: 'gray',
    borderRadius: 10,
    marginTop: 50,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  img1: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.7,
  },
  img2: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  text1: {
    position: 'absolute',
    top: '30%',
    left: '30%',
    transform: [{ translateX: -75 }, { translateY: -15 }],
    color: 'yellow',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text2: {
    position: 'absolute',
    top: '60%',
    left: '30%',
    padding: 3,
    borderRadius: 10,
    transform: [{ translateX: -75 }, { translateY: -15 }],
    color: 'darkgray',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#222',
    textAlign: 'center',
  },
  btnstart: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#FFD700',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 8,
    elevation: 2,
  },

  fakeScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    width,
    height,
    backgroundColor: 'black',
   
    zIndex: 9999,
  },
  p3: {
    color: '#FFD700',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop:-20,
    marginLeft:100
  },
btnback:{
  width:30,
  height:30,
  backgroundColor:'black',
  marginTop:35,
  marginLeft:20
},
train1:{
   width:350,
   height:100,
   backgroundColor:'gray',
   borderRadius:10,
   alignSelf:'center',
   marginBottom:20,
   marginTop:20
}
});
