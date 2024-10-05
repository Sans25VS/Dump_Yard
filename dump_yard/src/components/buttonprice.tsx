import { Text, View, Image, StyleSheet } from 'react-native';
import React from 'react';

const ButtonPrice = () => {
  const button1 = '$10000';   // (Unused variable - ensure it's needed)
  const imageHeight = 400;
  const imageWidth = 400;
  const CharacterName = 'Tingo';   // Displayed in Text component
  const carRatings = 100;     // (Unused variable - ensure it's needed)

  return (
    <View style={styles.container}>
      <Image 
        source={require("../assets/background.png")} 
        style={{ width: imageWidth, height: imageHeight }}
      />
      <Image 
        source={require("../assets/bandar.png")}  // Fixed typo and added quotes
        style={{ width: imageWidth, height: imageHeight }}
      />
      <Text>{CharacterName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ButtonPrice;
