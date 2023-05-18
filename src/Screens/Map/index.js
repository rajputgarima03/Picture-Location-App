import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import photo1 from '../../../assets/photo1.png'
import photo2 from '../../../assets/photo1.png'




const MapScreen = () => {
  console.log("-0-0-0-0-0-0-0-0-0")
  const locations = [
    { 
      location: { 
        coords: { 
          latitude: 37.78825, 
          longitude: -122.4324 
        }
      },
      photo: photo1
    },
    { 
      location: { 
        coords: { 
          latitude: 37.7749, 
          longitude: -122.4194 
        }
      },
      photo: photo2
    },
  
  ];
  
    return (
      <View style={{ flex: 1 }}>
        <MapView style={{ flex: 1 }}>
          {locations.map((location, index) => (
            <Marker
              key={index}
              coordinate={location.location.coords}
              onPress={() => navigation.navigate('Preview', { photo: location.photo })}
            />
          ))}
        </MapView>
      </View>
    );
  };
  
  export default MapScreen