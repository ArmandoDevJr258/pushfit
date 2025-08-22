import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Alert,
  ScrollView,
  SafeAreaView,
  FlatList,
  Platform,
} from 'react-native';
import { Image } from 'expo-image';

export default function HomeScreen() {
  const [visible, setVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [reminder, setReminder] = useState(true);

  const workouts = [
    { id: '1', title: 'Beginner Full Body', duration: '20 mins' },
    { id: '2', title: 'HIIT Cardio Burn', duration: '15 mins' },
    { id: '3', title: 'Upper Body Strength', duration: '25 mins' },
    { id: '4', title: 'Stretch & Recovery', duration: '10 mins' },
  ];

  function handleStartWorkout(title) {
    Alert.alert(`Starting "${title}" workout`);
  }

  return (
    <SafeAreaView style={[styles.container, darkMode && { backgroundColor: '#111' }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>PushFit</Text>
          <View style={styles.iconsRow}>
            <TouchableOpacity onPress={() => setVisible(true)} style={styles.iconBtn}>
              <Image source={require('../../assets/images/setting.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('🔥 Streak!')} style={styles.iconBtn}>
              <Image source={require('../../assets/images/fire.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Welcome */}
        <Text style={styles.welcome}>Welcome back! Let's crush your goals 💥</Text>

     
       <View style={styles.calendar}>

       </View>
       <Text style={{marginTop:200}}>Explore Workout plans</Text>
       <View style={styles.plans}>

       </View>
      

       

        {/* Settings Overlay */}
        {visible && (
          <View style={styles.overlay}>
            <TouchableOpacity onPress={() => setVisible(false)} style={styles.backBtn}>
              <Image source={require('../../assets/images/arrow.png')} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.overlayTitle}>Settings</Text>

            <View style={styles.settingRow}>
              <Text style={styles.settingText}>Notifications</Text>
              <Switch value={notifications} onValueChange={setNotifications} />
            </View>

            <View style={styles.settingRow}>
              <Text style={styles.settingText}>Daily Reminder</Text>
              <Switch value={reminder} onValueChange={setReminder} />
            </View>

            <View style={styles.settingRow}>
              <Text style={styles.settingText}>Dark Mode</Text>
              <Switch value={darkMode} onValueChange={setDarkMode} />
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconsRow: {
    flexDirection: 'row',
  },
  iconBtn: {
    paddingHorizontal: 8,
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: 'white',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  welcome: {
    fontSize: 16,
    color: '#aaa',
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 30,
    marginBottom: 10,
  },
  workoutList: {
    paddingBottom: 10,
  },
  workoutCard: {
    backgroundColor: '#222',
    borderRadius: 12,
    padding: 16,
    marginRight: 15,
    width: 160,
    height: 100,
    justifyContent: 'center',
  },
  workoutTitle: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
  workoutDuration: {
    fontSize: 14,
    color: '#aaa',
    marginTop: 8,
  },
  quickStart: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 12,
    marginTop: 30,
    alignItems: 'center',
  },
  quickTitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  startBtn: {
    backgroundColor: '#f35',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  startBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: Platform.OS === 'android' ? 720 : 800,
    width: '100%',
    backgroundColor: '#111',
    zIndex: 9999,
    padding: 20,
  },
  overlayTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
  },
  backBtn: {
    marginBottom: 20,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  settingText: {
    fontSize: 18,
    color: 'white',
  },
  calendar:{
    position:'absolute',
    top:100,
    alignSelf:'center',
    width:340,
    height:100,
    backgroundColor:'gray',
    borderRadius:10
  },
   plans:{
    position:'absolute',
    top:300,
    alignSelf:'center',
    width:340,
    height:200,
    backgroundColor:'gray',
    borderRadius:10
  }

});
