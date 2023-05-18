import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import { Permissions } from 'react-native-unimodules';
import Map from '../Map'

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [locations, setLocations] = useState([]);
  const cameraRef = useRef(null);

  useEffect(() => {
    const checkPermissions = async () => {
      const { status: cameraStatus } = await Permissions.askAsync(Permissions.CAMERA);
      const { status: locationStatus } = await Permissions.askAsync(Permissions.LOCATION);

      setHasPermission(cameraStatus === 'granted' && locationStatus === 'granted');
    };

    checkPermissions();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      console.log('--------------------------------',cameraRef.current)
      const photo = await cameraRef.current.takePictureAsync();
      const location = await Location.getCurrentPositionAsync();
      console.log('----------------i just did it', photo,location)
      setLocations([...locations, { photo, location }]);
    }
    if (hasPermission === null) {
      return <Text>waiting...</Text>;
    }
  
    if (hasPermission === false) {
      return <Text>No access to camera or location</Text>;
    }
  };

 

  return ( 
    <View style = {{flex :1}}>
      <Camera style={{ flex: 1 }} ref={cameraRef}>
        <Button title="Take Picture" onPress={takePicture} />
      </Camera>
     <Map/>
     
    </View>
  );
};

export default CameraScreen;
