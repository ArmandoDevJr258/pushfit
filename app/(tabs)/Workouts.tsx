import React, { useState, useRef, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { VideoView, useVideoPlayer } from 'expo-video';
import { useRouter } from 'expo-router';
import { Video ,ResizeMode} from 'expo-av';

import { StyleSheet, View,Modal, Text, ScrollView, Image, TouchableOpacity, Dimensions, Button } from 'react-native';

const { width, height } = Dimensions.get('window');


const Workouts = () => {
const [modalVisible, setModalVisible] = useState(false);
const [modalVisible2, setModalVisible2] = useState(false);
const [modalVisible3, setModalVisible3] = useState(false);
const [modalVisible4, setModalVisible4] = useState(false);
const [modalVisible5, setModalVisible5] = useState(false);
const [modalVisible6, setModalVisible6] = useState(false);
const [modalVisible7, setModalVisible7] = useState(false);

const [modalVisible11, setModalVisible11] = useState(false);
const [modalVisible12, setModalVisible12] = useState(false);
const [modalVisible13, setModalVisible13] = useState(false);
const [modalVisible14, setModalVisible14] = useState(false);
const [modalVisible15, setModalVisible15] = useState(false);
const [modalVisible16, setModalVisible16] = useState(false);
const [modalVisible17, setModalVisible17] = useState(false);
  const video = useRef(null);
  const videoSource = require('../../assets/images/pushups.mp4');
   const videoSource2 = require('../../assets/images/skullcrushers.mp4');
    const videoSource3 = require('../../assets/images/pushups.mp4');
     const videoSource4 = require('../../assets/images/pushups.mp4');
      const videoSource5 = require('../../assets/images/pushups.mp4');
       const videoSource6 = require('../../assets/images/pushups.mp4');
        const videoSource7 = require('../../assets/images/pushups.mp4');


    const [playing, setPlaying] = useState(false);
   
 useEffect(() => {
    if (modalVisible) {
      video.current?.playAsync();
    }
  }, [modalVisible]);
const videoRef = useRef(null);
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);


  const openModal = () => {
  setModalVisible(true);
  setPlaying(true);
};
  const openModal2 = () => {
  setModalVisible2(true);
  setPlaying(true);
};

  const openModal3 = () => {
  setModalVisible3(true);
  setPlaying(true);
};

  const openModal4 = () => {
  setModalVisible4(true);
  setPlaying(true);
};

  const openModal5 = () => {
  setModalVisible5(true);
  setPlaying(true);
};

  const openModal6 = () => {
  setModalVisible6(true);
  setPlaying(true);
};
  const openModal7 = () => {
  setModalVisible7(true);
  setPlaying(true);
};

 const openModal11 = () => {
  setModalVisible11(true);
  setPlaying(true);
};
  const openModal12 = () => {
  setModalVisible12(true);
  setPlaying(true);
};

  const openModal13 = () => {
  setModalVisible13(true);
  setPlaying(true);
};

  const openModal14 = () => {
  setModalVisible14(true);
  setPlaying(true);
};

  const openModal15 = () => {
  setModalVisible15(true);
  setPlaying(true);
};

  const openModal16 = () => {
  setModalVisible16(true);
  setPlaying(true);
};
  const openModal17 = () => {
  setModalVisible17(true);
  setPlaying(true);
};



   const closeModal = () => {
    // Pause the video when closing modal
   
    setModalVisible(false);
  };
  
   const closeModal2 = () => {
    // Pause the video when closing modal
   
    setModalVisible2(false);
  };
   const closeModal3 = () => {
    // Pause the video when closing modal
   
    setModalVisible3(false);
  };

   const closeModal4 = () => {
    // Pause the video when closing modal
   
    setModalVisible4(false);
  };

   const closeModal5 = () => {
    // Pause the video when closing modal
   
    setModalVisible5(false);
  };

   const closeModal6 = () => {
    // Pause the video when closing modal
   
    setModalVisible6(false);
  };
  
   const closeModal7 = () => {
    // Pause the video when closing modal
   
    setModalVisible7(false);
  };

     const closeModal11 = () => {
    // Pause the video when closing modal
   
    setModalVisible11(false);
  };
  
   const closeModal12 = () => {
    // Pause the video when closing modal
   
    setModalVisible12(false);
  };
   const closeModal13 = () => {
    // Pause the video when closing modal
   
    setModalVisible13(false);
  };

   const closeModal14 = () => {
    // Pause the video when closing modal
   
    setModalVisible14(false);
  };

   const closeModal15 = () => {
    // Pause the video when closing modal
   
    setModalVisible15(false);
  };

   const closeModal16 = () => {
    // Pause the video when closing modal
   
    setModalVisible16(false);
  };
  
   const closeModal17 = () => {
    // Pause the video when closing modal
   
    setModalVisible17(false);
  };
  const player = useVideoPlayer(
    require('../../assets/images/pushups.mp4'),
    (videoPlayer) => {
      videoPlayer.loop = true;
      videoPlayer.muted = true;
      videoPlayer.play();
    }
  );
 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workouts</Text>
      <Text style={styles.p1}>Explore Workout Plans</Text>
      <TouchableOpacity style={styles.btnfilter}>
        <Image
          source={require('../../assets/images/filter.png')}
          style={styles.iconfilter}
        />
      </TouchableOpacity>
 {/* Modal with video */}
      <Modal visible={modalVisible} animationType="slide" onRequestClose={closeModal} transparent={true}>
        <View style={styles.modalContainer}>
         <Video
          ref={video}
          style={styles.video}
          source={videoSource} // ✅ Single constant
          resizeMode={ResizeMode.COVER}
          isLooping
        />
          <Button title="Close" onPress={closeModal} />
        </View>
      </Modal>

        <Modal visible={modalVisible2} animationType="slide" onRequestClose={closeModal} transparent={true}>
        <View style={styles.modalContainer}>
          <Video
        source={require('../../assets/images/skullcrushers.mp4')}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        shouldPlay
         resizeMode="contain" 
        style={{ width: 300, height: 200 }}
        useNativeControls
      />
          <Button title="Close" onPress={closeModal2} />
        </View>
      </Modal>
       
            <Modal visible={modalVisible3} animationType="slide" onRequestClose={closeModal} transparent={true}>
        <View style={styles.modalContainer}>
          <Video
        source={require('../../assets/images/benchdip.mp4')}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        shouldPlay
         resizeMode="contain" 
        style={{ width: 300, height: 200 }}
        useNativeControls
      />
          <Button title="Close" onPress={closeModal3} />
        </View>
      </Modal>

          <Modal visible={modalVisible4} animationType="slide" onRequestClose={closeModal} transparent={true}>
        <View style={styles.modalContainer}>
          <Video
        source={require('../../assets/images/pseudo.mp4')}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        shouldPlay
         resizeMode="contain" 
        style={{ width: 300, height: 200 }}
        useNativeControls
      />
          <Button title="Close" onPress={closeModal4} />
        </View>
      </Modal>

         <Modal visible={modalVisible5} animationType="slide" onRequestClose={closeModal} transparent={true}>
        <View style={styles.modalContainer}>
          <Video
        source={require('../../assets/images/pseudpushups.mp4')}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        shouldPlay
         resizeMode="contain" 
        style={{ width: 300, height: 200 }}
        useNativeControls
      />
          <Button title="Close" onPress={closeModal5} />
        </View>
      </Modal>
       

          <Modal visible={modalVisible6} animationType="slide" onRequestClose={closeModal} transparent={true}>
        <View style={styles.modalContainer}>
          <Video
        source={require('../../assets/images/face2.mp4')}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        shouldPlay
         resizeMode="contain" 
        style={{ width: 300, height: 200 }}
        useNativeControls
      />
          <Button title="Close" onPress={closeModal6} />
        </View>
      </Modal>
       

          <Modal visible={modalVisible7} animationType="slide" onRequestClose={closeModal} transparent={true}>
        <View style={styles.modalContainer}>
          <Video
        source={require('../../assets/images/face4.mp4')}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        shouldPlay
         resizeMode="contain" 
        style={{ width: 300, height: 200 }}
        useNativeControls
      />
          <Button title="Close" onPress={closeModal7} />
        </View>
      </Modal>

      
          <Modal visible={modalVisible11} animationType="slide" onRequestClose={closeModal} transparent={true}>
        <View style={styles.modalContainer}>
          <Video
        source={require('../../assets/images/chestpushups.mp4')}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        shouldPlay
         resizeMode="contain" 
        style={{ width: 300, height: 200 }}
        useNativeControls
      />
          <Button title="Close" onPress={closeModal11} />
        </View>
      </Modal>

       <Modal visible={modalVisible12} animationType="slide" onRequestClose={closeModal} transparent={true}>
        <View style={styles.modalContainer}>
          <Video
        source={require('../../assets/images/chestdiamondpushups.mp4')}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        shouldPlay
         resizeMode="contain" 
        style={{ width: 300, height: 200 }}
        useNativeControls
      />
          <Button title="Close" onPress={closeModal12} />
        </View>
      </Modal>
       <Modal visible={modalVisible13} animationType="slide" onRequestClose={closeModal} transparent={true}>
        <View style={styles.modalContainer}>
          <Video
        source={require('../../assets/images/chest1.mp4')}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        shouldPlay
         resizeMode="contain" 
        style={{ width: 300, height: 200 }}
        useNativeControls
      />
          <Button title="Close" onPress={closeModal13} />
        </View>
      </Modal>

       <Modal visible={modalVisible14} animationType="slide" onRequestClose={closeModal} transparent={true}>
        <View style={styles.modalContainer}>
          <Video
        source={require('../../assets/images/chest2.mp4')}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        shouldPlay
         resizeMode="contain" 
        style={{ width: 300, height: 200 }}
        useNativeControls
      />
          <Button title="Close" onPress={closeModal14} />
        </View>
      </Modal>
       
        <Modal visible={modalVisible15} animationType="slide" onRequestClose={closeModal} transparent={true}>
        <View style={styles.modalContainer}>
          <Video
        source={require('../../assets/images/chest2.mp4')}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        shouldPlay
         resizeMode="contain" 
        style={{ width: 300, height: 200 }}
        useNativeControls
      />
          <Button title="Close" onPress={closeModal15} />
        </View>
      </Modal>
       
       
       
       
       
      
        
      <ScrollView
        style={styles.scrollview}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
      >
        <View style={styles.card1}>
          <Image
            source={require('../../assets/images/erik-mclean-1MiLJjXmPhA-unsplash.jpg')}
            style={styles.img1}
          />
          <Text style={styles.text1}>Arms Workout</Text>
          <Text style={styles.text2}>8 mins</Text>
          <Text style={styles.text3}>8 Exercises</Text>
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
          <TouchableOpacity style={styles.btnstart}  onPress={() => setVisible2(true)}>
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
          <TouchableOpacity style={styles.btnstart} onPress={() => setVisible3(true)}>
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
          <TouchableOpacity style={styles.btnstart} onPress={() => setVisible4(true)}>
            <Text>Start workout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {visible && (
        <View style={styles.fakeScreen}>
          
        <View style={{ height:150 }}>
  {/* Background Image */}
  <Image
    source={require('../../assets/images/armsback1.png')}
    style={{
      position: 'absolute',
      top: 25,
      width:'100%',
      height: 150,
      zIndex: 0, // stays behind
    }}
    resizeMode="cover"
  />

  {/* Button */}
  <TouchableOpacity
    style={[styles.btnback, { position: 'absolute', top: 60, left: 20, zIndex: 10 }]}
    onPress={() => setVisible(false)}
  >
    <Image
      source={require('../../assets/images/arrow.png')}
      style={styles.icon}
    />
  </TouchableOpacity>

  {/* Title Text */}
  <Text
    style={{
      position: 'absolute',
      top: 30,
      left: 120,
      fontSize: 24,
      textAlign:'center',
      fontWeight: 'bold',
      color: 'yellow',
      zIndex: 10,
    }}
  >
    Arms Workout
  </Text>


</View>


          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingBottom: 120 }}
            showsVerticalScrollIndicator={true}
          >
      
  <TouchableOpacity onPress={openModal}>
    <View style={styles.train1}>
      <View style={styles.textCard}>
        <Text style={styles.cardtitle}>Push ups</Text>
        <Text style={styles.text}>9 exercises</Text>
        <Text style={styles.text}>40 seconds</Text>
      </View>

      <Image
        source={require('../../assets/images/Screenshot_20250812_190104_Files by Google.jpg')}
        style={{ width: 180, height: 100 }}
        resizeMode="cover"
      />
    </View>
  </TouchableOpacity>



 <TouchableOpacity onPress={openModal2}>
            <View style={styles.train1}>
              <View style={styles.textCard}>
                <Text style={styles.cardtitle}>Push ups2</Text>
                <Text style={styles.text}>9 exercises</Text>
                <Text style={styles.text}>40 seconds</Text>
              </View>

              <Image
                source={require('../../assets/images/Screenshot_20250812_190120_Files by Google.jpg')}
                style={{ width: 180, height: 100 }}
              />
            </View>
</TouchableOpacity>


 <TouchableOpacity onPress={openModal3}>
            <View style={styles.train1}>
              <View style={styles.textCard}>
                <Text style={styles.cardtitle}>Push ups3</Text>
                <Text style={styles.text}>9 exercises</Text>
                <Text style={styles.text}>40 seconds</Text>
              </View>

              <Image
                source={require('../../assets/images/Screenshot_20250812_190134_Files by Google.jpg')}
                style={{ width: 180, height: 100 }}
              />
            </View>
</TouchableOpacity>

 <TouchableOpacity onPress={openModal4}>
            <View style={styles.train1}>
              <View style={styles.textCard}>
                <Text style={styles.cardtitle}>Push ups4</Text>
                <Text style={styles.text}>9 exercises</Text>
                <Text style={styles.text}>40 seconds</Text>
              </View>

              <Image
                source={require('../../assets/images/Screenshot_20250812_190139_Files by Google.jpg')}
                style={{ width: 180, height: 100 }}
              />
            </View>
</TouchableOpacity>


 <TouchableOpacity onPress={openModal5}>
            <View style={styles.train1}>
              <View style={styles.textCard}>
                <Text style={styles.cardtitle}>Push ups5</Text>
                <Text style={styles.text}>9 exercises</Text>
                <Text style={styles.text}>40 seconds</Text>
              </View>

              <Image
                source={require('../../assets/images/Screenshot_20250812_190147_Files by Google.jpg')}
                style={{ width: 180, height: 100 }}
              />
            </View>
</TouchableOpacity>

 <TouchableOpacity onPress={openModal6}>
            <View style={styles.train1}>
              <View style={styles.textCard}>
                <Text style={styles.cardtitle}>Push ups6</Text>
                <Text style={styles.text}>9 exercises</Text>
                <Text style={styles.text}>40 seconds</Text>
              </View>

              <Image
                source={require('../../assets/images/Screenshot_20250812_190152_Files by Google.jpg')}
                style={{ width: 180, height: 100 }}
              />
            </View>
</TouchableOpacity>

<TouchableOpacity onPress={openModal7}>
            <View style={styles.train1}>
              <View style={styles.textCard}>
                <Text style={styles.cardtitle}>Push ups7</Text>
                <Text style={styles.text}>9 exercises</Text>
                <Text style={styles.text}>40 seconds</Text>
              </View>

              <Image
                source={require('../../assets/images/Screenshot_20250812_190158_Files by Google.jpg')}
                style={{ width: 180, height: 100 }}
              />
            </View>
            </TouchableOpacity>
          </ScrollView>

          <TouchableOpacity
            style={styles.btnstartt}
            onPress={() => router.push('/ArmsWorkout')}  // corrigido para rota relativa
          >
            <Text
              style={{
                textAlign: 'center',
                marginTop: 10,
                fontSize: 26,
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              Start Workout
            </Text>
          </TouchableOpacity>
        </View>
      )}

        {visible2 && (
        <View style={styles.fakeScreen}>
             
        <View style={{ height:150 }}>
  {/* Background Image */}
  <Image
    source={require('../../assets/images/chestback3.png')}
    style={{
      position: 'absolute',
      top: 25,
      width:'100%',
      height: 150,
      zIndex: 0, // stays behind
    }}
    resizeMode="cover"
  />

  {/* Button */}
  <TouchableOpacity
    style={[styles.btnback, { position: 'absolute', top: 60, left: 20, zIndex: 10 }]}
    onPress={() => setVisible2(false)}
  >
    <Image
      source={require('../../assets/images/arrow.png')}
      style={styles.icon}
    />
  </TouchableOpacity>

  {/* Title Text */}
  <Text
    style={{
      position: 'absolute',
      top: 30,
      left: 120,
      fontSize: 24,
      textAlign:'center',
      fontWeight: 'bold',
      color: 'yellow',
      zIndex: 10,
    }}
  >
    Chest Workout
  </Text>


</View>

          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{paddingBottom: 120 }}
            showsVerticalScrollIndicator={true}
            
          >
       {!playing ? (
  <TouchableOpacity onPress={openModal11}>
    <View style={styles.train1}>
      <View style={styles.textCard}>
        <Text style={styles.cardtitle}>Push ups</Text>
        <Text style={styles.text}>9 exercises</Text>
        <Text style={styles.text}>40 seconds</Text>
      </View>

      <Image
        source={require('../../assets/images/Screenshot_20250812_190104_Files by Google.jpg')}
        style={{ width: 180, height: 100 }}
        resizeMode="cover"
      />
    </View>
  </TouchableOpacity>
) : null}



<TouchableOpacity onPress={openModal12}>
            <View style={styles.train1}>
              <View style={styles.textCard}>
                <Text style={styles.cardtitle}>Push ups</Text>
                <Text style={styles.text}>9 exercises</Text>
                <Text style={styles.text}>40 seconds</Text>
              </View>

              <Image
                source={require('../../assets/images/Screenshot_20250812_190120_Files by Google.jpg')}
                style={{ width: 180, height: 100 }}
              />
            </View>
</TouchableOpacity>

<TouchableOpacity onPress={openModal12}>
            <View style={styles.train1}>
              <View style={styles.textCard}>
                <Text style={styles.cardtitle}>Push ups</Text>
                <Text style={styles.text}>9 exercises</Text>
                <Text style={styles.text}>40 seconds</Text>
              </View>
              <Image
                source={require('../../assets/images/Screenshot_20250812_190134_Files by Google.jpg')}
                style={{ width: 180, height: 100 }}
              />
            </View>
        
</TouchableOpacity>

<TouchableOpacity onPress={openModal13}>
            <View style={styles.train1}>
              <View style={styles.textCard}>
                <Text style={styles.cardtitle}>Push ups</Text>
                <Text style={styles.text}>9 exercises</Text>
                <Text style={styles.text}>40 seconds</Text>
              </View>

              <Image
                source={require('../../assets/images/Screenshot_20250812_190139_Files by Google.jpg')}
                style={{ width: 180, height: 100 }}
              />
            </View>
</TouchableOpacity>

<TouchableOpacity onPress={openModal14}>
            <View style={styles.train1}>
              <View style={styles.textCard}>
                <Text style={styles.cardtitle}>Push ups</Text>
                <Text style={styles.text}>9 exercises</Text>
                <Text style={styles.text}>40 seconds</Text>
              </View>

              <Image
                source={require('../../assets/images/Screenshot_20250812_190147_Files by Google.jpg')}
                style={{ width: 180, height: 100 }}
              />
            </View>
</TouchableOpacity>

<TouchableOpacity onPress={openModal15}>
            <View style={styles.train1}>
              <View style={styles.textCard}>
                <Text style={styles.cardtitle}>Push ups</Text>
                <Text style={styles.text}>9 exercises</Text>
                <Text style={styles.text}>40 seconds</Text>
              </View>

              <Image
                source={require('../../assets/images/Screenshot_20250812_190152_Files by Google.jpg')}
                style={{ width: 180, height: 100 }}
              />
            </View>
</TouchableOpacity>

<TouchableOpacity onPress={openModal16}>
            <View style={styles.train1}>
              <View style={styles.textCard}>
                <Text style={styles.cardtitle}>Push ups</Text>
                <Text style={styles.text}>9 exercises</Text>
                <Text style={styles.text}>40 seconds</Text>
              </View>

              <Image
                source={require('../../assets/images/Screenshot_20250812_190158_Files by Google.jpg')}
                style={{ width: 180, height: 100 }}
              />
            </View></TouchableOpacity>
          </ScrollView>

          <TouchableOpacity
            style={styles.btnstartt}
            onPress={() => router.push('/ArmsWorkout')}  // corrigido para rota relativa
          >
            <Text
              style={{
                textAlign: 'center',
                marginTop: 10,
                fontSize: 26,
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              Start Workout
            </Text>
          </TouchableOpacity>
        </View>
      )}

        {visible3 && (
        <View style={styles.fakeScreen}>
            <View style={{ height:150 }}>
  {/* Background Image */}
  <Image
    source={require('../../assets/images/armsback1.png')}
    style={{
      position: 'absolute',
      top: 25,
      width:'100%',
      height: 150,
      zIndex: 0, // stays behind
    }}
    resizeMode="cover"
  />

  {/* Button */}
  <TouchableOpacity
    style={[styles.btnback, { position: 'absolute', top: 60, left: 20, zIndex: 10 }]}
    onPress={() => setVisible3(false)}
  >
    <Image
      source={require('../../assets/images/arrow.png')}
      style={styles.icon}
    />
  </TouchableOpacity>

  {/* Title Text */}
  <Text
    style={{
      position: 'absolute',
      top: 30,
      left: 120,
      fontSize: 24,
      textAlign:'center',
      fontWeight: 'bold',
      color: 'yellow',
      zIndex: 10,
    }}
  >
    Arbs Workout
  </Text>


</View>
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingBottom: 120 }}
            showsVerticalScrollIndicator={true}
          >
       {!playing ? (
  <TouchableOpacity onPress={openModal}>
    <View style={styles.train1}>
      <View style={styles.textCard}>
        <Text style={styles.cardtitle}>Push ups</Text>
        <Text style={styles.text}>9 exercises</Text>
        <Text style={styles.text}>40 seconds</Text>
      </View>

      <Image
        source={require('../../assets/images/Screenshot_20250812_190104_Files by Google.jpg')}
        style={{ width: 180, height: 100 }}
        resizeMode="cover"
      />
    </View>
  </TouchableOpacity>
) : null}



            <View style={styles.train1}>
              <View style={styles.textCard}>
                <Text style={styles.cardtitle}>Push ups</Text>
                <Text style={styles.text}>9 exercises</Text>
                <Text style={styles.text}>40 seconds</Text>
              </View>

              <Image
                source={require('../../assets/images/Screenshot_20250812_190120_Files by Google.jpg')}
                style={{ width: 180, height: 100 }}
              />
            </View>

            <View style={styles.train1}>
              <View style={styles.textCard}>
                <Text style={styles.cardtitle}>Push ups</Text>
                <Text style={styles.text}>9 exercises</Text>
                <Text style={styles.text}>40 seconds</Text>
              </View>

              <Image
                source={require('../../assets/images/Screenshot_20250812_190134_Files by Google.jpg')}
                style={{ width: 180, height: 100 }}
              />
            </View>

            <View style={styles.train1}>
              <View style={styles.textCard}>
                <Text style={styles.cardtitle}>Push ups</Text>
                <Text style={styles.text}>9 exercises</Text>
                <Text style={styles.text}>40 seconds</Text>
              </View>

              <Image
                source={require('../../assets/images/Screenshot_20250812_190139_Files by Google.jpg')}
                style={{ width: 180, height: 100 }}
              />
            </View>

            <View style={styles.train1}>
              <View style={styles.textCard}>
                <Text style={styles.cardtitle}>Push ups</Text>
                <Text style={styles.text}>9 exercises</Text>
                <Text style={styles.text}>40 seconds</Text>
              </View>

              <Image
                source={require('../../assets/images/Screenshot_20250812_190147_Files by Google.jpg')}
                style={{ width: 180, height: 100 }}
              />
            </View>

            <View style={styles.train1}>
              <View style={styles.textCard}>
                <Text style={styles.cardtitle}>Push ups</Text>
                <Text style={styles.text}>9 exercises</Text>
                <Text style={styles.text}>40 seconds</Text>
              </View>

              <Image
                source={require('../../assets/images/Screenshot_20250812_190152_Files by Google.jpg')}
                style={{ width: 180, height: 100 }}
              />
            </View>

            <View style={styles.train1}>
              <View style={styles.textCard}>
                <Text style={styles.cardtitle}>Push ups</Text>
                <Text style={styles.text}>9 exercises</Text>
                <Text style={styles.text}>40 seconds</Text>
              </View>

              <Image
                source={require('../../assets/images/Screenshot_20250812_190158_Files by Google.jpg')}
                style={{ width: 180, height: 100 }}
              />
            </View>
          </ScrollView>

          <TouchableOpacity
            style={styles.btnstartt}
            onPress={() => router.push('/ArmsWorkout')}  // corrigido para rota relativa
          >
            <Text
              style={{
                textAlign: 'center',
                marginTop: 10,
                fontSize: 26,
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              Start Workout
            </Text>
          </TouchableOpacity>
        </View>
      )}

        {visible4 && (
        <View style={styles.fakeScreen}>
             <View style={{ height:150 }}>
  {/* Background Image */}
  <Image
    source={require('../../assets/images/armsback1.png')}
    style={{
      position: 'absolute',
      top: 25,
      width:'100%',
      height: 150,
      zIndex: 0, // stays behind
    }}
    resizeMode="cover"
  />

  {/* Button */}
  <TouchableOpacity
    style={[styles.btnback, { position: 'absolute', top: 60, left: 20, zIndex: 10 }]}
    onPress={() => setVisible4(false)}
  >
    <Image
      source={require('../../assets/images/arrow.png')}
      style={styles.icon}
    />
  </TouchableOpacity>

  {/* Title Text */}
  <Text
    style={{
      position: 'absolute',
      top: 30,
      left: 120,
      fontSize: 24,
      textAlign:'center',
      fontWeight: 'bold',
      color: 'yellow',
      zIndex: 10,
    }}
  >
    Legs Workout
  </Text>


</View>

          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingBottom: 120 }}
            showsVerticalScrollIndicator={true}
          >
       {!playing ? (
  <TouchableOpacity onPress={openModal}>
    <View style={styles.train1}>
      <View style={styles.textCard}>
        <Text style={styles.cardtitle}>Push ups</Text>
        <Text style={styles.text}>9 exercises</Text>
        <Text style={styles.text}>40 seconds</Text>
      </View>

      <Image
        source={require('../../assets/images/Screenshot_20250812_190104_Files by Google.jpg')}
        style={{ width: 180, height: 100 }}
        resizeMode="cover"
      />
    </View>
  </TouchableOpacity>
) : null}



            <View style={styles.train1}>
              <View style={styles.textCard}>
                <Text style={styles.cardtitle}>Push ups</Text>
                <Text style={styles.text}>9 exercises</Text>
                <Text style={styles.text}>40 seconds</Text>
              </View>

              <Image
                source={require('../../assets/images/Screenshot_20250812_190120_Files by Google.jpg')}
                style={{ width: 180, height: 100 }}
              />
            </View>

            <View style={styles.train1}>
              <View style={styles.textCard}>
                <Text style={styles.cardtitle}>Push ups</Text>
                <Text style={styles.text}>9 exercises</Text>
                <Text style={styles.text}>40 seconds</Text>
              </View>

              <Image
                source={require('../../assets/images/Screenshot_20250812_190134_Files by Google.jpg')}
                style={{ width: 180, height: 100 }}
              />
            </View>

            <View style={styles.train1}>
              <View style={styles.textCard}>
                <Text style={styles.cardtitle}>Push ups</Text>
                <Text style={styles.text}>9 exercises</Text>
                <Text style={styles.text}>40 seconds</Text>
              </View>

              <Image
                source={require('../../assets/images/Screenshot_20250812_190139_Files by Google.jpg')}
                style={{ width: 180, height: 100 }}
              />
            </View>

            <View style={styles.train1}>
              <View style={styles.textCard}>
                <Text style={styles.cardtitle}>Push ups</Text>
                <Text style={styles.text}>9 exercises</Text>
                <Text style={styles.text}>40 seconds</Text>
              </View>

              <Image
                source={require('../../assets/images/Screenshot_20250812_190147_Files by Google.jpg')}
                style={{ width: 180, height: 100 }}
              />
            </View>

            <View style={styles.train1}>
              <View style={styles.textCard}>
                <Text style={styles.cardtitle}>Push ups</Text>
                <Text style={styles.text}>9 exercises</Text>
                <Text style={styles.text}>40 seconds</Text>
              </View>

              <Image
                source={require('../../assets/images/Screenshot_20250812_190152_Files by Google.jpg')}
                style={{ width: 180, height: 100 }}
              />
            </View>

            <View style={styles.train1}>
              <View style={styles.textCard}>
                <Text style={styles.cardtitle}>Push ups</Text>
                <Text style={styles.text}>9 exercises</Text>
                <Text style={styles.text}>40 seconds</Text>
              </View>

              <Image
                source={require('../../assets/images/Screenshot_20250812_190158_Files by Google.jpg')}
                style={{ width: 180, height: 100 }}
              />
            </View>
          </ScrollView>

          <TouchableOpacity
            style={styles.btnstartt}
            onPress={() => router.push('/ArmsWorkout')}  // corrigido para rota relativa
          >
            <Text
              style={{
                textAlign: 'center',
                marginTop: 10,
                fontSize: 26,
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              Start Workout
            </Text>
          </TouchableOpacity>
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
  
  card1: {
    width: 350,
    height: 130,
    backgroundColor: 'gray',
    borderRadius: 10,
    marginTop: 10,
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
    top: '20%',
    left: '30%',
    transform: [{ translateX: -75 }, { translateY: -15 }],
    color: 'yellow',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text2: {
    position: 'absolute',
    top: '55%',
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
  text3:{

     position: 'absolute',
    top: '85%',
    left: '30%',
    padding: 2,
    
    borderRadius: 10,
    transform: [{ translateX: -75 }, { translateY: -15 }],
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#ffffffff',
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
    position:'absolute',
    color: '#FFD700',
    fontSize: 28,
    fontWeight: 'bold',
    top:30,
    marginLeft:100
  },
btnback:{
  width:30,
  height:30,
  marginTop:-25,
  marginLeft:5
},
train1: {
    flexDirection: 'row',  
    alignItems: 'center',
    margin: 10,
    height:80,
    backgroundColor: 'black',
    borderRadius: 10,
    overflow: 'hidden',

  
  },
  cardtitle:{
    fontWeight:'bold',
    fontSize:25,
    textAlign:'center'

  },

  textCard: {
   
    width:200,
    height: 70,           // smaller fixed height
  padding: 10,

  justifyContent: 'center',
  backgroundColor:'#b3a1bcff',
  borderTopLeftRadius:10,
  borderBottomLeftRadius:10
  },
  text: {
    fontSize: 15,
    color:'blue',
    textAlign:'center',
   
  },
  scrollview: {
    flex: 1,   
    marginTop:50
  
    
  },
  scrollContent: {
    paddingVertical: -40,
  
  },
  btnstartt:{
     height: 100,
     width:'80%',
     borderRadius:20,
  backgroundColor: 'rgba(71, 126, 63, 1)',
  position:'absolute',
  alignSelf:'center',
 
  bottom:15
  },
  textCard2:{
     width:200,
    height: 70,           // smaller fixed height
  padding: 10,
  },
  cardtitle2:{
    fontWeight:'bold',
    fontSize:25,
    textAlign:'center'
  },
  modalContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  
    height:4,
    backgroundColor: 'rgba(0,0,0,0.5)', 
  },
  video:{
 
    width: '100%',                     // Full width within padding
    maxWidth: 400,                    // Max width for larger screens
    height: 215,                     // 16:9 aspect ratio height (400 * 9/16)
    borderRadius: 10,                // Rounded corners for better UI
          // Black background behind video if no content
  },
  
});
