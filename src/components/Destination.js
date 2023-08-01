import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { destinationData } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const Destination = () => {
  return (
    <View className="flex flex-wrap flex-row space-x-2">
      {destinationData.map((item, index) => {
        return <DestinationCard item={item} key={index} />;
      })}
    </View>
  );
};

export default Destination;

const DestinationCard = ({ item }) => {
    const navigation=useNavigation()
    const [isFavorite,setIsFavorite]=useState(false)
  return (
    <TouchableOpacity
    onPress={()=>navigation.navigate('Destination',{...item}) }
      style={{
        height: wp(65),
        width: wp(44),
      }}
      className="flex justify-end  relative py-32 p-4 my-2 ml-2"
    >
      <Image
        source={item.image}
        className="absolute"
        style={{
          height: wp(65),
          width: wp(44),
          borderRadius: 35,
        }}
      />
      <LinearGradient
        style={{
          height: wp(15),
          width: wp(44),
          borderBottomLeftRadius: 35,
          borderBottomRightRadius: 35,
        }}
        className="absolute bottom-0"
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        colors={["transparent", "rgba(0,0,0,0.8)"]}
      />
      <TouchableOpacity 
      onPress={()=>setIsFavorite(!isFavorite)}
      style={{
        backgroundColor:'rgba(255,255,255,0.4)'
      }}
      className='bg-white rounded-full w-fit p-2 m-2 absolute top-1 right-1'>
        <HeartIcon color={ isFavorite?'red':'white'}/>
      </TouchableOpacity>
      <Text
        className="font-semibold text-white"
        style={{
          fontSize: wp(4),
        }}
      >
        {item.title}
      </Text>
      <Text
        className=" mb-8 text-neutral-700"
        style={{
          fontSize: wp(2.2),
        }}
      >
        {item.shortDescription}
      </Text>
    </TouchableOpacity>
  );
};
