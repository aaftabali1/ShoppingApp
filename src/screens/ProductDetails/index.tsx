import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header';
import Colors from '../../utils/Colors';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductDetails} from '../../redux/slice/productDetails';
import Rating from '../../components/Rating';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {addToCart} from '../../redux/slice/addCart';
import {Product} from '../../utils/type';

const ProductDetails = ({route}: any) => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();

  const [activeIndex, setActiveIndex] = useState(0);

  const productsReducer = useSelector((state: any) => state.productDetails);

  useEffect(() => {
    dispatch(fetchProductDetails(route?.params?.id));
  }, []);

  const handleAddTocart = (item: Product) => {
    dispatch(addToCart(item));
  };

  const handleBuyNow = (item: Product) => {
    dispatch(addToCart(item));
    navigation.navigate('cart');
  };

  const ImageSliderItem = ({item, index}: {item: string; index: number}) => {
    return (
      <Image
        key={index}
        source={{uri: item}}
        style={{width: '100%', height: 207, resizeMode: 'cover'}}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
        <Header
          backAction={navigation.goBack}
          showBag={true}
          cartAction={() => navigation.navigate('cart')}
        />
        <Text style={styles.detailsTitle}>{productsReducer.data.title}</Text>
        <Rating rating={productsReducer.data.rating} totalReview={110} />
        <View style={styles.sliderConainter}>
          <Carousel
            data={productsReducer.data.images}
            renderItem={ImageSliderItem}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={Dimensions.get('window').width}
            sliderHeight={207}
            itemHeight={207}
            layout="default"
            autoplay
            onSnapToItem={index => setActiveIndex(index)} // Update the activeIndex
          />
          <Pagination
            dotsLength={productsReducer.data.images?.length}
            activeDotIndex={activeIndex}
            containerStyle={styles.dotsContainer}
            dotStyle={styles.paginationDot}
            dotElement={<View style={styles.dotElement} />}
            inactiveDotStyle={styles.inactiveDot}
            dotContainerStyle={{marginHorizontal: 0}}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${productsReducer.data?.price}</Text>
          <View style={styles.offContainer}>
            <Text style={styles.offPrice}>
              $
              {(
                (productsReducer.data?.price *
                  productsReducer.data?.discountPercentage) /
                100
              ).toPrecision(4)}{' '}
              OFF
            </Text>
          </View>
        </View>
        <View style={styles.btnCotnainer}>
          <TouchableOpacity
            onPress={() => handleAddTocart(productsReducer.data)}
            style={styles.secondaryBtn}>
            <Text style={styles.secondaryText}>Add To Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={() => handleBuyNow(productsReducer.data)}>
            <Text style={styles.primaryText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsText}>Details</Text>
          <Text>{productsReducer.data?.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;
