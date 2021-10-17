import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantDetails/About'
import MenuItems from '../components/restaurantDetails/MenuItems'
import ViewCart from '../components/restaurantDetails/ViewCart'

const foods = [
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpqj7i0fBUm1YGTH2gWULi-Quw6U3YugVO7JcTApE34T1OvSRxCj6OtgiJ9sxJkDU7PEw&usqp=CAU"
    },
    {
        title: "Tandoori Chicken",
        description: "My favourite type of chicken he he hee...",
        price: "$19.50",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpQuJ7l34-uM1HnqLAS1LUfpyoq5TcwnE3bhWVayoVPBMBr1Dq6G1S2L8qNm7jL-e6Pfg&usqp=CAU"
    },
    {
        title: "Chilaquiles",
        description: "Looks yummy and I wanna try this sooner...",
        price: "$34.50",
        image: "https://img.apmcdn.org/b15d0c53f1a00ab439dc1bec8d6bacce1715be4f/uncropped/ef968d-splendid-table-atk-chilaquiles-lede02.jpg"
    },
    {
        title: "Chicken Caesar Salad",
        description: "Salad salad salaaaaaaaaaaaaaadddddddddd...",
        price: "$12.50",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf4iMv3qy1cgUG8j-iRGsqBcgwZd3jmQ3wQA&usqp=CAU"
    },
    {
        title: "Chicken Caesar Salad",
        description: "Salad salad salaaaaaaaaaaaaaadddddddddd...",
        price: "$12.50",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf4iMv3qy1cgUG8j-iRGsqBcgwZd3jmQ3wQA&usqp=CAU"
    },
    {
        title: "Chicken Caesar Salad",
        description: "Salad salad salaaaaaaaaaaaaaadddddddddd...",
        price: "$12.50",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf4iMv3qy1cgUG8j-iRGsqBcgwZd3jmQ3wQA&usqp=CAU"
    },
    {
        title: "Chicken Caesar Salad",
        description: "Salad salad salaaaaaaaaaaaaaadddddddddd...",
        price: "$12.50",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf4iMv3qy1cgUG8j-iRGsqBcgwZd3jmQ3wQA&usqp=CAU"
    }
]

export default function RestaurantDetail({route, navigation}) {
    return (
        <View>
            <About route={route} />
            <Divider width={1.8} style={{marginVertical: 20}} />
            <MenuItems restaurantName={route.params.name} foods={foods} />
            <ViewCart navigation={navigation} />
        </View>
    )
}
