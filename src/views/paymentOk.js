import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default props => {
 
    return(
        <View style={styles.containerView}>
            <Text style={styles.sucessText}>Sucesso!</Text>
            <Text style={styles.sucessText}>Compra concluída</Text>
            <Image
                style={styles.checkImg}
                source={
                require('../imgs/check.png')
                }
            />
            <Text style={styles.infoText}>Você receberá um email com os detalhes da sua compra.</Text>
            <View style={styles.buttonOk}>
                <TouchableOpacity 
                    onPress={() => {
                        props.navigation.push(
                            'Carosel'
                        )
                    }}
                    style={styles.itemButton}
                >
                    <Text style={styles.itemButtonText}>Ok</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    );
}


const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        backgroundColor: '#FFF',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    sucessText: {
        textAlign: 'center',
        paddingLeft: '10%',
        paddingRight: '10%',
        color: '#707070',
        fontSize: 24
    },
    infoText: {
        textAlign: 'center',
        paddingLeft: '10%',
        paddingRight: '10%',
        color: '#707070',
        fontSize: 14
    },
    buttonOk: {
        width: '100%',
        alignItems: 'center'
    },
    checkImg: {
        width: 100,
        height: 100,
        marginTop: 30,
        marginBottom: 30
    },
    itemButton: {
        backgroundColor: '#FF8686',
        bottom: -50,
        width: '85%',
        height: 40,
        marginBottom: 40,
        padding: 10,
        alignItems: 'center',
        borderRadius: 8,
    },
    itemButtonText: {
        color: '#FFF',
        fontSize: 14
    }

});