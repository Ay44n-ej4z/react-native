import React from 'react'
import { Dimensions, FlatList, View } from 'react-native'
import CarItem from '../carItems/index.js'
import styles from './styles'
import cars from './cars'

const carLists = (props) => {
    return (
        <View style = {styles.container}>
            <FlatList 
            data = {cars}
            renderItem = {({item}) => <CarItem car = {item} /> }
            showsVerticalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval = {Dimensions.get('window').height}
            />
        </View>
    )
}

export default carLists
