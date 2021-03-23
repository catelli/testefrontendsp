import React, {useEffect, useState, Component} from 'react';
import {View, Text, StyleSheet, Dimensions, FlatList, Animated } from 'react-native';

//api Produtos
import apiEndpoint from '../../../api'

import CarouselItem from './CaroselItem'

const { width, heigth } = Dimensions.get('window')
let flatList


export default props => {
    
    
    const  [products, setProducts] = useState([]);
    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, width)
    const [dataList, setDataList] = useState([])
    useEffect(() => {
        async function loadProducts(){
            const response = await apiEndpoint.get('/products');
            setProducts(response.data)
            console.log(response.data)
            setDataList(response.data)
            //infiniteScroll(dataList)
        } 
    loadProducts();
},[])
    return (
        <View style={{
                flex: 1,
                backgroundColor: '#FFF'
        }}>
            <View>
                <Text style={{
                    fontSize: 32,
                    padding: 24,
                    color: '#FF8686'
                }}>
                    Conheça nossos cursos:
                </Text>
            </View>
            <View style={{
                flex: 1
            }}>
                <FlatList data={products}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment="center"
                    scrollEventThrottle={16}
                    decelerationRate={"fast"}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <CarouselItem navigation={props.navigation} item={item} />
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }]
                    )}
                />
                <View style={styles.dotView}>
                    {products.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })
                        
                        return (
                            <Animated.View
                                key={i}
                                style={{ opacity, 
                                         height: 10, 
                                         width: 10, 
                                         backgroundColor: '#FF8686', 
                                         borderColor: '#FF8686', 
                                         margin: 8, 
                                         borderRadius: 5 
                                        }}
                            />
                        )
                    })}

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    dotView: { flexDirection: 'row', justifyContent: 'center', marginBottom:15}
})
  