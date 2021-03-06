import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity} from 'react-native'

const { width, height } = Dimensions.get('window')


const CarouselItem = ({ item, navigation }) => {
    
    return (
        <View style={styles.cardView}>
            <View style={styles.textView}>
                <Text style={styles.itemTitle}>{item.name}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
                <View style={styles.itemRow}>
                    <Text style={styles.itemDescriptionDura}>Duração: </Text>
                    <Text style={styles.itemDescription}>{item.duration}</Text>
                </View>
                <View style={styles.itemRowLine}>
                    <Text style={styles.itemDescriptionInves}>Investimento:</Text>
                  
                </View>
                <View style={styles.itemRowPrice}>
                    <Text style={styles.itemDescriptionRs}>R$</Text>
                    <Text style={styles.itemPrice}>{item.price.toFixed(2)}</Text>
                </View>
                
                <TouchableOpacity 
                    onPress={() => {
                        navigation.navigate(
                            'cardStage',
                            {
                                price: item.price,
                                prodTitle: item.name,
                            }
                        )
                    }}
                    style={styles.itemButton}
                >
                    <Text style={styles.itemButtonText}>Comprar</Text>
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
    itemRow: {
        flexDirection: 'row',
        paddingBottom: 10
    },
    itemRowPrice: {
        flexDirection: 'row',
        left: '16%',
    },
    itemRowLine: {
        width: '70%',
        alignItems: 'center',
        marginTop: -10
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
        lineHeight: 20,
        fontSize: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5
    },
    itemDescriptionInves: {
        color: '#000',
        lineHeight: 20,
        alignItems: 'flex-start',
        fontSize: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
        top: 5
    },
    itemDescriptionDura: {
        color: '#000',
        fontWeight: 'bold',
        lineHeight: 20,
        fontSize: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5
    },
    itemDescriptionRs: {
        color: '#7BBDF5',
        fontWeight: 'bold',
        lineHeight: 20,
        fontSize: 12,
        shadowColor: '#000',
        top: 5,
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5
    },
    itemPrice: {
        color: '#7BBDF5',
        fontWeight: 'bold',
        fontSize: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5
    },
    itemButton: {
        backgroundColor: '#FF8686',
        marginTop: 5,
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