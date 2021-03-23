import React from 'react';
import {createStackNavigator, TransitionSpecs, HeaderStyleInterpolators} from '@react-navigation/stack';
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
                     headerLeft: null,
                     headerTitleAlign: 'center',
                     headerStyle: {
                        backgroundColor: '#FF8686',
                    },
                    headerTintColor: '#fff'
                 }}
                 component={CaroselPage} />
                 <Stack.Screen 
                 name="cardStage" 
                 options={{
                    title: 'Pagamento com Cartão',
                    headerTitleAlign: 'center',
                    headerStyle: {
                       backgroundColor: '#FF8686',
                   },
                   headerTintColor: '#fff'
                }}
                 component={cardStage} />
                 <Stack.Screen 
                 name="paymentOk" 
                 options={{
                    title: 'Pagamento com Cartão',
                    headerLeft: null,
                    headerTitleAlign: 'center',
                    headerStyle: {
                       backgroundColor: '#FF8686',
                   },
                   headerTintColor: '#fff'
                }}
                 component={paymentOk} />
             </Stack.Navigator>
)