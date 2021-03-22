import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CaroselPage from '../views/CaroselPage';
import cardStage from '../views/cardStage';
import paymentOk from '../views/paymentOk';


const Stack = createStackNavigator()

export default props => (
             <Stack.Navigator initialRouteName="Carosel">
                 <Stack.Screen 
                 name="Carosel"
                 options={{
                     title: 'Loja virtual',
                     headerTitleAlign: 'center',
                     headerStyle: {
                        backgroundColor: '#FF8686',
                    },
                    headerTintColor: '#fff'
                 }}
                 component={CaroselPage} />
                 <Stack.Screen name="cardStage" component={cardStage} />
                 <Stack.Screen name="paymentOk" component={paymentOk} />
             </Stack.Navigator>
)