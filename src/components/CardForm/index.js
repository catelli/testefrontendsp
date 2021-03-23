import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native'

export default props => {
    
    return (
        <View  style={styles.containerView}>
            <View style={styles.containerView}>
                <Text style={styles.placeHolderTop}>Número do cartão de crédito</Text>
                <TextInput
                    style={styles.input}
                    placeholder="1234 1234 1234 1234 1234"
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.containerView}>
                <Text style={styles.placeHolderTop}>Nome</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="default"
                />
            </View> 
            <View style={styles.containerViewRow}>
                <View style={styles.viewSideVali}>
                    <Text style={styles.placeHolderTop}>Validade</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="00/00"
                        keyboardType="default"
                    />
                </View>
                <View style={styles.viewSideCVV}>
                    <Text style={styles.placeHolderTop}>CVV</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="000"
                        keyboardType="numeric"
                    />
                </View>
            </View>
        </View>
        
    );
    
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderColor: '#CCCCCC',
      padding: 10,
      borderRadius: 8,
    },
    placeHolderTop: {
        alignSelf: 'flex-start',
        paddingLeft: 5,
        paddingRight: 5,
        marginLeft: 20,
        marginBottom: -17,
        fontSize: 8,
        color: '#707070',
        position: 'relative',
        zIndex: 2,
        backgroundColor: '#FFF'
    },
    containerViewRow: {
        flexDirection: 'row',
    },
    viewSideVali:{
        width: "60%",
        alignSelf: "flex-start"
    },
    viewSideCVV:{
        width: "40%",
        alignSelf: "flex-start"
    }
  });