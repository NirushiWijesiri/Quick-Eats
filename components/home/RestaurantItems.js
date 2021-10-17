import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const localRestaurants = [
    {
        name: "KFC",
        image_url: "https://ichef.bbci.co.uk/news/1024/branded_news/66A2/production/_107847262_gettyimages-1152276563-594x594.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Mc Donalds",
        categories: ["Cafe", "Bar"],
        image_url: "https://thumbs.dreamstime.com/b/minsk-belarus-december-big-mac-hamburger-menu-mcdonald-s-restaurant-135803175.jpg",
        price: "$$",
        reviews: 3425,
        rating: 4.8,
    },
    {
        name: "Pizza Hut",
        image_url: "https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/slideshow-images/slides/phut.jpg?itok=U8wBTX33",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 5346,
        rating: 4.7,
    },
    {
        name: "Dominos",
        image_url: "https://images.dominos.co.in/srilanka/Sausage_Delight.png",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 2315,
        rating: 4.9,
    },
]

export default function RestaurantItems({navigation, ...props}) {
    return (
        <>
            {props.restaurantsData.map((restaurant, index) => (
                <TouchableOpacity key={index} activeOpacity={1} style={{marginBottom: 30}} onPress={() => navigation.navigate("RestaurantDetail", {
                    name: restaurant.name,
                    image: restaurant.image_url,
                    price: restaurant.price,
                    reviews: restaurant.review_count,
                    rating: restaurant.rating,
                    categories: restaurant.categories
                })}>
                <View 
                style={{marginTop: 10, padding: 15, backgroundColor: "white",}}>
                    <RestaurantImage image={restaurant.image_url} />
                    <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                </View>
                </TouchableOpacity>
            ))}
        </>
    )
}

const RestaurantImage = (props) => (
    <>
    <Image 
        source={{uri: props.image}}
        style = {{width: "100%", height: 180}}
        
    />
    <TouchableOpacity style={{position: 'absolute', right: 20, top: 20}}>
        <MaterialCommunityIcons name='heart-outline' size={25} color="white" />
    </TouchableOpacity>
    </>
)

const RestaurantInfo = (props) => (
    <View style={{
        flexDirection: 'row', 
        justifyContent:'space-between', 
        alignItems: 'center',
        marginTop: 10,
        }}>
        <View>
            <Text style={{fontSize: 15, fontWeight:'bold'}}>{props.name}</Text>
            <Text style={{fontSize: 13, color: "gray"}}>30-45 mins</Text>
        </View>
        <View style={{
            backgroundColor:"#eee", 
            height: 30, 
            width: 30, 
            alignItems:'center', 
            borderRadius: 15,
            justifyContent: 'center'
            }}
        >
            <Text>{props.rating}</Text>
        </View>
    </View>
)