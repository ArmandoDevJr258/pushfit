import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'

const Stats = () => {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Stats</Text>
      <Text style={styles.message}>
        No workout stats yet. Start a workout and come back!
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/(tabs)/Workouts')}

      >
        <Text style={styles.buttonText}>Start Workout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Stats

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    color: '#bbb',
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 25,
  },
  button: {
    backgroundColor: '#1E88E5',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
})
