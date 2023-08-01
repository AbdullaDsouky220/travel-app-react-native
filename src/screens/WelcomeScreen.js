import { View, Image, Text, StatusBar, TouchableOpacity } from "react-native";
import React from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
export default function WelcomeScreen() {

  const navigation=useNavigation()
  return (
    <View className="flex flex-1 justify-end bg-blue-400">
      <StatusBar />
      <Image 
        source={require('../../assets/images/_welcome.png')}
        className='absolute h-full w-full'
        /> 
        <View className='p-5 pb-8 space-y-8'>
          <LinearGradient
          style={{height:hp(60),width:wp(100)}}
          className='absolute bottom-0'
          start={{x:0.5,y:0}}
          end={{x:0.5,y:1}}
          colors={['transparent','rgba(3,105,161,0.8)']}
          />

          <View className='space-x-3'>
            <Text style={{fontSize:wp(10)}}className='text-white text-5xl font-bold '>
              Traveling Made Easy
            </Text>
            <Text style={{fontSize:wp(4)}}className='text-neutral-200 text-xl font-medium '>
              Experience the world's best adventure aorund the world with us
            </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
              <Text style={{fontSize:wp(5.5)}} className='font-bold bg-orange-500 m-auto mt-4 p-4 px-12 text-white rounded-full'>
                Let's go!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
}
