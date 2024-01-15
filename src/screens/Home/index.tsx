import React from 'react';
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
  const bannerItem = ({item}: any) => {
    return (
      <View style={styles.bannerContainer}>
        <Image source={item.image} style={styles.bannerImage} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primaryBlue} />
      <SafeAreaView style={styles.topContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.greetName}>Hey, Rahul</Text>
          <TouchableOpacity>
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
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={bannerItem}
        data={bannerData}
        pagingEnabled
        contentContainerStyle={styles.flatlist}
      />
      <Text>Recommended</Text>
    </View>
  );
};

export default Home;
