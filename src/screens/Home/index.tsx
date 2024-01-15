import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import Colors from '../../utils/Colors';
import Images from '../../utils/Images';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../../redux/slice/products';
import CommonStyle from '../../utils/CommonStyle';
import {useNavigation} from '@react-navigation/native';
import {addToCart} from '../../redux/slice/addCart';

const bannerData = [
  {
    id: 'xSe23',
    image: Images.card,
  },
  {
    id: 'xSe22',
    image: Images.card,
  },
];

const Home = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();

  const productsReducer = useSelector((state: any) => state.products);
  const addCartReducer = useSelector((state: any) => state.addCart);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const bannerItem = ({item}: any) => {
    return (
      <View style={styles.bannerContainer}>
        <Image source={item.image} style={styles.bannerImage} />
      </View>
    );
  };

  const handleAddTocart = (item: any) => {
    dispatch(addToCart(item));
  };

  const recommItem = ({item, index}: any) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('productDetails', {
            id: item.id,
          })
        }
        style={[styles.recomContainer, index % 2 !== 0 && styles.marginEnd]}>
        <Image source={Images.heartUnfill} style={styles.heartImage} />
        <Image source={{uri: item.thumbnail}} style={styles.productImage} />
        <View style={styles.productDetails}>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${item.price}</Text>
            <TouchableOpacity
              style={styles.addCart}
              onPress={() => handleAddTocart(item)}>
              <Text style={styles.addCartBtn}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={CommonStyle.labelRegular}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const listHeader = () => {
    return (
      <>
        <SafeAreaView style={styles.topContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.greetName}>Hey, Rahul</Text>
            <TouchableOpacity onPress={() => navigation.navigate('cart')}>
              {addCartReducer.cart.length > 0 && (
                <View style={styles.cartItemsContainer}>
                  <Text style={styles.cartItems}>
                    {addCartReducer.cart.length}
                  </Text>
                </View>
              )}
              <Image source={Images.bag} style={styles.bagImage} />
            </TouchableOpacity>
          </View>
          <View style={styles.searchContainer}>
            <Image source={Images.search} style={styles.searchImage} />
            <TextInput
              style={styles.searchInput}
              placeholderTextColor={Colors.placeHolderColor}
              placeholder="Search Products or store"
            />
          </View>
          <View style={styles.locationContainer}>
            <View>
              <Text style={styles.deliveryLabel}>Delivery to</Text>
              <Text style={styles.location}>
                Green Way 3000, Sylhet{'   '}
                <Image source={Images.arrowDown} style={styles.arrowDown} />
              </Text>
            </View>
            <View>
              <Text style={styles.deliveryLabel}>Within</Text>
              <Text style={styles.location}>
                1 Hour{'   '}
                <Image source={Images.arrowDown} style={styles.arrowDown} />
              </Text>
            </View>
          </View>
        </SafeAreaView>
        <View style={{backgroundColor: Colors.white}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={bannerItem}
            data={bannerData}
            pagingEnabled
            contentContainerStyle={styles.flatlist}
          />
        </View>
        <Text style={styles.recommendedHeading}>Recommended</Text>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primaryBlue} />
      <SafeAreaView style={styles.topContainer} />
      <FlatList
        data={productsReducer?.products?.products}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={listHeader}
        renderItem={recommItem}
        style={{backgroundColor: Colors.primaryBlue}}
        contentContainerStyle={{backgroundColor: Colors.white}}
        numColumns={2}
      />
    </View>
  );
};

export default Home;
