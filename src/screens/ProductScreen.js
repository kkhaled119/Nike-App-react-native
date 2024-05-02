import { StyleSheet, Text, View, FlatList, Image,Pressable,TouchableOpacity } from "react-native";
import React from "react";

import { useSelector,useDispatch } from "react-redux";
import { productSlice } from "../store/productSlice";


const ProductScreen = ({navigation}) => {
  const dispatch= useDispatch()
  const products=useSelector(state=>state.products.products)
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable onPress={()=>{
          dispatch(productSlice.actions.setSelectedProduct(item.id))

          navigation.navigate('ProductDetails')}} style={styles.itemContainer}>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.image}
          />
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: "100%",
      aspectRatio: 1,
    },
    itemContainer: {
      width: "50%",
      padding: 1,
    },
  });