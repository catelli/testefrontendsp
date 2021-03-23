import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native'

const { width, height } = Dimensions.get('window')


const CarouselItem = ({ item }) => {
    return (
        <View style={styles.cardView}>
            <View style={styles.textView}>
                <Text style={styles.itemTitle}>{item.name}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
                <Text style={styles.itemDescription}>Duração:{item.duration} </Text>
                <Text style={styles.itemDescription}>Investimento</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
                <TouchableOpacity style={styles.itemButton}>
                    <Text price={item.price} style={styles.itemButtonText}>Comprar</Text>
                </TouchableOpacity>
            </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: width - 138,
        height: height / 2,
        backgroundColor: '#FFF',
        marginLeft: 69,
        marginRight: 69,
        marginTop: 10,
        borderRadius: 10,
        shadowColor: '#0000001A',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 10,
    },

    textView: {
        position: 'absolute',
        top: 10,
        margin: 10,
        left: 5,
    },
    itemTitle: {
        color: '#707070',
        fontSize: 24,
        paddingRight: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: "bold",
        elevation: 5
    },
    itemDescription: {
        color: '#000',
        fontSize: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5
    },
    itemPrice: {
        color: '#7BBDF5',
        fontSize: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5
    },
    itemButton: {
        backgroundColor: '#FF8686',
        marginTop: 15,
        height: 45,
        padding: 12,
        marginLeft: 15,
        marginRight: 20,
        alignItems: 'center',
        borderRadius: 8,
    },
    itemButtonText: {
        color: '#FFF',
        fontSize: 14
    }
})

export default CarouselItem