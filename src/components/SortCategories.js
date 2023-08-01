import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { sortCategoryData } from '../constants'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { theme } from '../theme';

export default function SortCategories() {

    const  [activeSort, setActiveSort] = useState('Popular')
  return (
    <View className='flex space-x-3 flex-row items-center justify-around bg-gray-100 p-2 rounded-full'>
        {
                sortCategoryData.map((sort,index)=>{
                    let isActive=sort===activeSort;
                    let activeClass=isActive?'bg-white shadow':''
                    return (
                        <TouchableOpacity
                        onPress={()=>setActiveSort(sort)}
                         key={index} className={' p-3 rounded-full ' +activeClass}>
                            <Text className='text-neutral-700 font-medium' 
                            
                            style={{fontSize:wp(3.2),color:isActive?theme.text:'rgba(0,0,0,0.7)'}}>

                            {
                                sort
                            }
                            </Text>
                        </TouchableOpacity>
                    )
                })
        }
    </View>
  )
}