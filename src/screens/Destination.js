import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import { ChevronLeftIcon, HeartIcon, SunIcon } from 'react-native-heroicons/solid';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { theme } from '../theme';
import { ClockIcon, MapPinIcon } from 'react-native-heroicons/outline';

export default function Destination(props) {

const item=props.route.params;
const [isFavorite,setIsFavorite]=useState(false)
const navigation=useNavigation()
  return (
    <View className=' bg-white relative flex-1 mb-2'>
     <Image source={item.image}
     style={{
        height:hp(55),
        width:wp(100)
     }}
     />
     <StatusBar style='light'/>
     <SafeAreaView className='absolute  top-0 w-full flex flex-row justify-between items-center my-2'>
     <View className='absolute top-2 w-full flex flex-row justify-between items-center '>
     <TouchableOpacity
      onPress={()=>navigation.navigate('Home')}
      style={{
        backgroundColor:'rgba(255,255,255,0.4)'
      }}
      className='bg-white rounded-full w-fit p-2 m-2  top-1 right-1'>
        <ChevronLeftIcon color={ 'white'}
        size={wp(7)} strokeWidth={4}
        />
      </TouchableOpacity>
     <TouchableOpacity
      onPress={()=>setIsFavorite(!isFavorite)}
      style={{
        backgroundColor:'rgba(255,255,255,0.4)'
      }}
      className='bg-white rounded-full w-fit p-2 m-2  top-1 right-1'>
        <HeartIcon color={ isFavorite?'red':'white'} size={wp(7)} strokeWidth={4} />
      </TouchableOpacity>
     </View>

     </SafeAreaView>

     <ScrollView 
     style={{
        borderTopLeftRadius:40,
        borderTopRightRadius:40
     }}
     className='bg-white -mt-14 flex flex-1  p-4 space-x-2  ' >
      <View className=' mt-4 flex flex-row justify-between space-x-2'>
        <Text
        style={{
            fontSize:wp(5.2)
        }}
        className='font-bold text-neutral-700'>
            {item.title}
        </Text>
        <Text
        style={{
            fontSize:wp(6),
            color:theme.text
        }}
        className='font-bold text-neutral-700'>
            {item.price}$
        </Text>
      </View>
      <View className=' mt-4 flex flex-row justify-between space-x-2'>
        <Text
        style={{
            fontSize:wp(3.2)
        }}
        className='font-bold text-neutral-500 tracking-wider'>
            {item.longDescription}
        </Text>
      </View>
     <View className='flex flex-row justify-between'>
     <View className=' mt-4 flex flex-row  items-center space-x-2'>
       <ClockIcon 
            size={wp(6.2)}
            color={'skyblue'}
        />
        <View>

        <Text
        style={{
            fontSize:wp(3.5)
        }}
        className='font-bold   text-neutral-700 tracking-wider'>
            {item.duration}
        </Text>
        <Text
        style={{
            fontSize:wp(2.7)
        }}
        className='font-bold text-neutral-500 tracking-wider'>
            Duration
        </Text>
            </View>
      </View>
     <View className=' mt-4 flex flex-row  items-center space-x-2'>
       <MapPinIcon 
            size={wp(6.2)}
            color={'#f87171'}
        />
        <View>

        <Text
        style={{
            fontSize:wp(3.5)
        }}
        className='font-bold   text-neutral-700 tracking-wider'>
            {item.distance}
        </Text>
        <Text
        style={{
            fontSize:wp(2.7)
        }}
        className='font-bold text-neutral-500 tracking-wider'>
            Distance
        </Text>
            </View>
      </View>
     <View className=' mt-4 flex flex-row  items-center space-x-2'>
       <SunIcon 
            size={wp(6.2)}
            color={'orange'}
        />
        <View>

        <Text
        style={{
            fontSize:wp(3.5)
        }}
        className='font-bold   text-neutral-700 tracking-wider'>
            {item.weather}
        </Text>
        <Text
        style={{
            fontSize:wp(2.7)
        }}
        className='font-bold text-neutral-500 tracking-wider'>
            weather
        </Text>
            </View>
      </View>
     </View>
     </ScrollView>
     <TouchableOpacity className='bg-orange-500 mb-16 p-4 px-10 rounded-full m-auto '>
        <Text className='text-white'>
            Book Now
        </Text>
     </TouchableOpacity>
    </View>
  )
}