import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";

import CartListItem from "../components/CartListItem";
import { useSelector } from "react-redux";
import { selectDeliveryPrice, selectSubtotal, selectTotal } from "../store/cartSlice";
 

export default function ShoppingCart() {
  const subtotal=useSelector(selectSubtotal)
  const deliveryFee=useSelector(selectDeliveryPrice)
 const total =useSelector(selectTotal);
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={() => (
          <View style={styles.totalsContainer}>
            <View style={styles.row}>
              <Text style={styles.text}>Subtotal</Text>
              <Text style={styles.text}>{subtotal}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.text}>Delivary</Text>
              <Text style={styles.text}>{deliveryFee}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.textBold}>Total</Text>
              <Text style={styles.textBold}>{total}</Text>
            </View>
          </View>
        )}
      />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Cheack out </Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "gainsboro",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,

    fontWeight: "bold",
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
