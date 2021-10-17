import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import LottieView from 'lottie-react-native'
import firebase from '../firebase'
import MenuItems from '../components/restaurantDetails/MenuItems'

export default function OrderCompleted() {

    const [lastOrder, setLastOrder] = useState({
        items: [
            {
                title: "Lasagna",
                description: "With butter lettuce, tomato and sauce bechamel",
                price: "$13.50",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpqj7i0fBUm1YGTH2gWULi-Quw6U3YugVO7JcTApE34T1OvSRxCj6OtgiJ9sxJkDU7PEw&usqp=CAU"
            }
        ]
    })

    const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems)

    const total = items
    .map((item => Number(item.price.replace('$', ''))))
    .reduce((prev, curr) => prev + curr, 0)

    const totalUSD = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
    })

    useEffect(() => {
        const db = firebase.firestore();
        const unsubscribe = db.collection("orders")
        .orderBy("createdAt", 'desc')
        .limit(1)
        .onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                setLastOrder(doc.data())
            })
        })
        return () => unsubscribe()
    }, [])

    return (
        <SafeAreaView style={styles.droidSafeArea}>
            <View style={{
                margin: 15,
                alignItems: 'center',
                height: '100%'
            }}>
            <LottieView style={{height: 100,alignSelf: 'center', marginBottom: 30}}
            source={require('../assets/animations/check-mark.json')}
            autoPlay
            speed={0.5}
            loop={false}
            />
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Your order at {restaurantName} has been placed for ${totalUSD}
            </Text>
            <ScrollView showsVerticalScrollIndicator={false}>
            <MenuItems foods={lastOrder.items} hideCheckbox={true} />
            <LottieView style={{height: 200,alignSelf: 'center', marginBottom: 30}}
            source={require('../assets/animations/cooking.json')}
            autoPlay
            speed={0.5}
            />
            </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        backgroundColor: "white",
    }
})