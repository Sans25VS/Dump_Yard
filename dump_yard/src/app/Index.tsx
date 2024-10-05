import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
import image_back from '../assets/background'; // Make sure the path to your image is correct

const Index = () => {
  return (
    <ImageBackground source={image_back} style={styles.backgroundImage}>
      <View style={styles.content}>
        <Text style={styles.text}>Sanskar</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,           // Occupies full screen
    resizeMode: 'cover', // Ensures the image covers the entire background
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',    // Ensure text is visible on the background
    fontSize: 24,
  }
});

export default Index;
