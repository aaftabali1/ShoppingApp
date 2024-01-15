import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Images from '../utils/Images';
import Colors from '../utils/Colors';
import CommonStyle from '../utils/CommonStyle';
import {useSelector} from 'react-redux';
import {HeaderType} from '../utils/type';

const Header = ({backAction, showBag, cartAction, title}: HeaderType) => {
  const addCartReducer = useSelector((state: any) => state.addCart);
  return (
    <View
      style={[
        styles.headerContainer,
        title == '' && {justifyContent: 'flex-start'},
      ]}>
      <TouchableOpacity onPress={backAction}>
        <Image source={Images.backBtn} style={styles.backImage} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      {showBag ? (
        <TouchableOpacity onPress={cartAction}>
          {addCartReducer.cart.length > 0 && (
            <View style={styles.cartItemsContainer}>
              <Text style={styles.cartItems}>{addCartReducer.cart.length}</Text>
            </View>
          )}
          <Image source={Images.bag} style={styles.bagIcon} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  backImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  headerContainer: {
    marginTop: 45,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bagIcon: {
    tintColor: Colors.bagColor,
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  title: {
    ...CommonStyle.bodyOneRegular,
    marginStart: 20,
  },
  cartItemsContainer: {
    backgroundColor: Colors.primaryYellow,
    borderRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -12,
    zIndex: 12,
    marginEnd: -12,
    marginStart: 12,
  },
  cartItems: {
    ...CommonStyle.bodyTwoSemiBold,
    color: Colors.white,
  },
});

export default Header;
