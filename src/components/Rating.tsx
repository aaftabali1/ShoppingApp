import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Images from '../utils/Images';
import {RatingType} from '../utils/type';

const Rating = ({rating, totalReview}: RatingType) => {
  return (
    <View style={styles.ratingContainer}>
      {rating <= 0.5 && (
        <Image source={Images.halfStar} style={styles.starImage} />
      )}
      {rating <= 1 && rating > 0.5 && (
        <Image source={Images.fullStar} style={styles.starImage} />
      )}
      {rating <= 1.5 && rating > 1 && (
        <>
          <Image source={Images.fullStar} style={styles.starImage} />
          <Image source={Images.halfStar} style={styles.starImage} />
        </>
      )}
      {rating <= 2 && rating > 1.5 && (
        <>
          <Image source={Images.fullStar} style={styles.starImage} />
          <Image source={Images.fullStar} style={styles.starImage} />
        </>
      )}
      {rating <= 2.5 && rating > 2 && (
        <>
          <Image source={Images.fullStar} style={styles.starImage} />
          <Image source={Images.fullStar} style={styles.starImage} />
          <Image source={Images.halfStar} style={styles.starImage} />
        </>
      )}
      {rating <= 3 && rating > 2.5 && (
        <>
          <Image source={Images.fullStar} style={styles.starImage} />
          <Image source={Images.fullStar} style={styles.starImage} />
          <Image source={Images.fullStar} style={styles.starImage} />
        </>
      )}
      {rating <= 3.5 && rating > 3 && (
        <>
          <Image source={Images.fullStar} style={styles.starImage} />
          <Image source={Images.fullStar} style={styles.starImage} />
          <Image source={Images.fullStar} style={styles.starImage} />
          <Image source={Images.halfStar} style={styles.starImage} />
        </>
      )}
      {rating <= 4 && rating > 3.5 && (
        <>
          <Image source={Images.fullStar} style={styles.starImage} />
          <Image source={Images.fullStar} style={styles.starImage} />
          <Image source={Images.fullStar} style={styles.starImage} />
          <Image source={Images.fullStar} style={styles.starImage} />
        </>
      )}
      {rating <= 4.5 && rating > 4 && (
        <>
          <Image source={Images.fullStar} style={styles.starImage} />
          <Image source={Images.fullStar} style={styles.starImage} />
          <Image source={Images.fullStar} style={styles.starImage} />
          <Image source={Images.fullStar} style={styles.starImage} />
          <Image source={Images.halfStar} style={styles.starImage} />
        </>
      )}
      {rating <= 5 && rating > 4.5 && (
        <>
          <Image source={Images.fullStar} style={styles.starImage} />
          <Image source={Images.fullStar} style={styles.starImage} />
          <Image source={Images.fullStar} style={styles.starImage} />
          <Image source={Images.fullStar} style={styles.starImage} />
          <Image source={Images.fullStar} style={styles.starImage} />
        </>
      )}
      <Text>{totalReview} Reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  starImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginEnd: 5,
  },
});

export default Rating;
