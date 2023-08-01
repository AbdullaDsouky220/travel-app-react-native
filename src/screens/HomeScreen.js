import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import React from "react";
import Categories from "../components/Categories";
import SortCategories from "../components/SortCategories";
import Destination from "../components/Destination";
const ios = Platform.OS === "ios";
const topMargin = ios ? "mt-3" : "mt-10";
export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className={topMargin}>
        {/* AVATART */}
        <View className="flex flex-row justify-between items-center mb-10 space-x-8 mx-4">
          <Text
            style={{ fontSize: wp(7) }}
            className="font-bold text-neutral-700 "
          >
            Let's Discover
          </Text>
          <TouchableOpacity>
            <Image
              style={{ height: wp(12), width: wp(12) }}
              source={require("../../assets/images/avatar.png")}
            />
          </TouchableOpacity>
        </View>
        {/* Search bar */}
        <View className="mb-4 mx-4">
          <View className="flex flex-row items-center bg-neutral-100 space-x-2 pl-8  p-4  w-full rounded-full">
            <MagnifyingGlassIcon strokeWidth={3} color="gray" size={20} />
            <TextInput
              placeholder="search destination"
              placeholderTextColor="gray"
              className="flex-1 text-base tracking-wide mb-1 pl-1"
            />
          </View>
        </View>
        {/* caterogreies */}
        <View className='space-x-3 flex p-4'>
          <Categories/>
        </View>
        {/* sort categoreis */}
        <View className='space-x-3 flex p-4'>
          <SortCategories/>
        </View>
        {/* destination */}
        <View className=' flex '>
          <Destination/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
