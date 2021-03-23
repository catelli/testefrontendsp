import React from 'react';
import {ScrollView, View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'

import CardForm from '../components/CardForm'
import Card from '../components/Card'
const { width, heigth } = Dimensions.get('window')

export default props => {
    const priceProps = props.route.params.price.toFixed(2);
    const titleProps = props.route.params.prodTitle;
    const cupom10 = priceProps * ( (100-10) / 100 )
    const totalCupom = (priceProps - cupom10).toFixed(2)
    const totalFinal = (priceProps - totalCupom).toFixed(2)
    return (
        <ScrollView style={styles.containerView}>
            <View style={styles.cardAlign}>
                <Card />
            </View>
            <View style={styles.cardView}>
                <CardForm />
            </View>
            <View
            style={{
                borderBottomColor: '#CCCCCC',
                borderBottomWidth: 1,
                margin: 12,
                marginTop: -5
            }}
            />
            <View style={styles.viewRow}>
                <Text style={styles.viewLeft}>{titleProps}</Text>
                <Text style={styles.viewRight}>R$ {priceProps}</Text>
            </View>
            <View style={styles.viewRow}>
                <Text style={styles.viewLeft}>Desconto 10%</Text>
                <Text style={styles.viewRightDes}>- R$ {totalCupom}</Text>
            </View>
            <View
            style={{
                borderBottomColor: '#CCCCCC',
                borderBottomWidth: 1,
                margin: 12,
            }}
            />
            <View style={styles.viewRow}>
                <Text style={styles.viewLeftTotal}>Total:</Text>
                <Text style={styles.viewRightTotal}>R$ {totalFinal}</Text>
            </View>
            <View style={styles.buttonPay}>
                <TouchableOpacity 
                    onPress={() => {
                        props.navigation.push(
                            'paymentOk'
                        )
                    }}
                    style={styles.itemButton}
                >
                    <Text style={styles.itemButtonText}>Pagar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
      );
    
}

const styles = StyleSheet.create({
    cardView: { 
        justifyContent: 'center', 
        marginBottom:15
    },
    viewRow: {
        flexDirection: 'row',
        marginLeft: 12,
        marginRight: 12,
    },
    containerView: {
        flex: 1, 
        backgroundColor: '#FFF',
        overflow: 'scroll',
        height: heigth
    },
    cardAlign: {
        paddingTop: 20,
        paddingBottom   : 20,
        alignItems: 'center'
    },
    viewLeft: {
        width: '50%',
        textAlign: 'left',
        color: '#707070'
    },
    viewRight: {
        width: '50%',
        textAlign: 'right',
        color: '#707070'
    },
    viewLeftTotal: {
        width: '50%',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#707070'
    },
    viewRightTotal: {
        width: '50%',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right',
        color: '#707070'
    },
    viewRightDes: {
        width: '50%',
        textAlign: 'right',
        color: '#FF8686'
    },
    itemButton: {
        backgroundColor: '#FF8686',
        marginTop: 15,
        height: 40,
        marginBottom: 40,
        padding: 10,
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