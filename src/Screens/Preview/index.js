import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image } from 'react-native';


const PreviewScreen = ({ route }) => {
    const { photo } = route.params;
  
    return (
      <View style={{ flex: 1 }}>
        <Text>Photo Preview</Text>
        <Image source={{ uri: photo.uri }} style={{ flex: 1 }} />
      </View>
    );
  };

  export default PreviewScreen