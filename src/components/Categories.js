import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import {theme} from '../theme/index'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { categoriesData } from '../constants';
const Categories = () => {
  return (
    <View className='space-x-4'>
    <View className='flex flex-row items-center justify-between'>
        <Text className='font-medium ' style={{fontSize:wp(4.8)}} >
            Categories
        </Text>
        <TouchableOpacity>
            <Text style={{color:theme?.text}}>
                See all
            </Text>
        </TouchableOpacity>
    </View>
    <ScrollView showsHorizontalScrollIndicator={false}
    horizontal
    contentContainerStyle={{paddingHorizontal:1}}
    className='space-x-3 mt-3'
    >
        {
            categoriesData.map((cat,i)=>(
                <View key={i} className='flex flex-col items-center '>

                <Image 
                className='rounded-3xl'
                source={cat.image} style={{height:wp(20),width:wp(20)}}/>
                <Text className='mt-1 text-neutral-700 font-medium' style={{fontSize:wp(3)}}>
                    {cat.title}
                </Text>
                </View>
            ))
        }

    </ScrollView>
    </View>
  )
}

export default Categories