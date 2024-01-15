import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/Header';
import styles from './styles';
import Colors from '../../utils/Colors';
import Images from '../../utils/Images';
import {
  addToCart,
  deleteItemFromCart,
  removeCart,
} from '../../redux/slice/addCart';
import {Product} from '../../utils/type';

const Cart = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();

  const addCartReducer = useSelector((state: any) => state.addCart);

  const handleAddTocart = (item: any) => {
    dispatch(addToCart(item));
  };

  const handleRemovecart = (item: any) => {
    if (item.quantity == 1) {
      dispatch(deleteItemFromCart(item));
    } else {
      dispatch(removeCart(item));
    }
  };

  const cartItems = ({item, index}: any) => {
    return (
      <View style={styles.cartItemContainer}>
        <Image source={{uri: item.thumbnail}} style={styles.thumbImage} />
        <View style={styles.priceContent}>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.titleText}>${item.price}</Text>
        </View>
        <View style={styles.itemQtyContainer}>
          <TouchableOpacity onPress={() => handleRemovecart(item)}>
            <Image source={Images.minus} style={styles.minusImage} />
          </TouchableOpacity>
          <Text style={styles.qty}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => handleAddTocart(item)}>
            <Image source={Images.plus} style={styles.minusImage} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const ListFooter = () => {
    let subTotal = 0;
    addCartReducer.cart.map((item: Product) => {
      subTotal = subTotal + item.price * item.quantity;
    });
    return (
      <View style={styles.totalContainer}>
        <View style={styles.totalTextContainer}>
          <Text>Subtotal</Text>
          <Text>${subTotal}</Text>
        </View>
        <View style={styles.totalTextContainer}>
          <Text>Delivery</Text>
          <Text>$2.00</Text>
        </View>
        <View style={styles.totalTextContainer}>
          <Text>Total</Text>
          <Text>${subTotal + 2}</Text>
        </View>
        <TouchableOpacity style={styles.primaryBtn}>
          <Text style={styles.primaryText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
      <Header
        backAction={navigation.goBack}
        showBag={false}
        title={`Shopping Cart (${addCartReducer.cart.length})`}
      />
      <View style={{flex: 1}}>
        <FlatList
          data={addCartReducer.cart}
          renderItem={cartItems}
          contentContainerStyle={{flexGrow: 1}}
          keyExtractor={item => item.id}
          ListFooterComponent={ListFooter}
        />
      </View>
    </SafeAreaView>
  );
};

export default Cart;
