import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import Categories from '../components/home/Categories'
import HeaderTabs from '../components/home/HeaderTabs'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems'
import SearchBar from '../components/home/SearchBar'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import BottomTabs from '../components/home/BottomTabs'

const YELP_API_KEY = "MlGSLF2cJC5G_r6dlqGBcy1g2oAf7e6yXGob0hY_dTZFQkv37UMjfenlMPOKXa-awUXduii3Thp49X0r-_yBE39WLxNX0bigWJVuqjMzLs1tW7DtPdMD359D2gZaYXYx"

export default function Home({navigation}) {
    const [restaurantsData, setRestaurantsData] = useState(localRestaurants)
    const [city, setCity] = useState("San Francisco")
    const [activeTab, setActiveTab] = useState("Delivery")

    const getRestaurantsFromYelp = () => {
        const yelpurl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`
    

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        }
        return fetch(yelpurl, apiOptions)
            .then((res) => res.json())
            .then((json) => setRestaurantsData(json.businesses.filter((business) => 
                business.transactions.includes(activeTab.toLowerCase())
                )))
    }

    useEffect(() => {
        getRestaurantsFromYelp()
    }, [city, activeTab])

    return (
        <SafeAreaView style={styles.droidSafeArea}>
            <View style={{backgroundColor: "white", padding: 15, }}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Categories />
                <RestaurantItems restaurantsData={restaurantsData} navigation={navigation} />
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        backgroundColor: "#eee",
    }
})