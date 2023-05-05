import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { signOut } from 'firebase/auth'

import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

import { init, track } from '@amplitude/analytics-react-native';

init('')

const HomeScreen = () => {
  const navigation = useNavigation()

  const handleSignout = () => {
    const user_email = auth.currentUser.email;
    signOut(auth)
      .then((user) => {
        console.log(user)
        track("Signout", undefined, {
          user_id: user_email
        })
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }
  return (
    <View style={styles.container}>
      <Text>Welcome: { auth.currentUser?.email }</Text>
      <TouchableOpacity
      onPress={handleSignout}
      style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  inputContainer: {
      width: "80%"
  },
  input: {
      backgroundColor: "white",
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5
  },
  buttonContainer: {
      width: '60%',
      justifyContent: "center",
      alignItems: "center",
      marginTop: 40
  },
  button: {
      backgroundColor: "#abe9de",
      width: "60%",
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
      marginTop: 40
  },
  buttonOnline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: "#abe9de",
      borderWidth: 2
  },
  buttonText: {
      color: "white",
      fontWeight: 700,
      fontSize: 16
  },
  buttonOutlineText: {
      color: "#abe9de",
      fontWeight: 700,
      fontSize: 16
  },
  
})