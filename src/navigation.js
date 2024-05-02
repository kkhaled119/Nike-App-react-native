import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductScreen from "./screens/ProductScreen";
import ShoppingCart from "./screens/ShoppingCart";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import { Pressable,Text } from "react-native";
import { useSelector } from "react-redux";
import { selectNumberOfItems } from "./store/cartSlice";

const Stack = createNativeStackNavigator();
const Navigation = () => {
  const numberOfItems=useSelector(selectNumberOfItems)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Product"
          component={ProductScreen}
          options={({navigation})=>({

          
            headerRight: () => (
              <Pressable onPress={()=>navigation.navigate('Cart')} style={{flexDirection:"row"}}>
                <FontAwesome5 name="shopping-cart"  size={18} color="gray"/>
                <Text style={{marginLeft:5,fontWeight:500,}}>{numberOfItems}</Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
