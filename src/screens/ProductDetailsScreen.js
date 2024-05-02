import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import products from "../data/products";
import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../store/cartSlice";

const ProductDetailsScreen = () => {
  const product = useSelector((state) => state.products.selectedProduct);
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();
  const addToCartItem = () => {
    
    dispatch(cartSlice.actions.addCartItem({ product }));

  };
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ width: width, aspectRatio: 1 }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />

        <View style={{ padding: 20 }}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={addToCartItem} style={styles.btn}>
        <Text style={styles.btnText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },

  price: {
    fontWeight: "500",
    fontSize: 16,
  },
  description: {
    marginVertical: 10,
    lineHeight: 30,
    fontSize: 18,
    fontWeight: "300",
  },
  btn: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: "70%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    justifyContent: "center",
  },
  btnText: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
    fontWeight: "500",
  },
});

export default ProductDetailsScreen;
