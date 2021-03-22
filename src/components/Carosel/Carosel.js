import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

//api Produtos
import apiEndpoint from '../../../api'

//carousel
import Carousel from 'react-native-snap-carousel';

export default props => {


    const  [products, setProducts] = useState([]);
    useEffect(() => {
        async function loadProducts(){
            const response = await apiEndpoint.get('/products');
            console.log(
                JSON.stringify(response.data)
                );

            setProducts(response.data);
        } 
    loadProducts();
},[]);
    

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
            }}>Conheça nossos cursos:</Text>
            </View>
            <View style={{
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: '#FFF'
            }}>
                <Text>
                    {products.name}
                </Text>
            </View>
        </View>
        
      );
    
}

  