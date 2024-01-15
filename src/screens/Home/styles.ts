import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';
import Fonts from '../../utils/Fonts';
import CommonStyle from '../../utils/CommonStyle';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  greetName: {
    color: Colors.lightColor,
    fontSize: 22,
    fontFamily: Fonts.semiBold,
  },
  headerContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 35,
  },
  bagImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.secondaryBlue,
    marginHorizontal: 20,
    alignItems: 'center',
    paddingVertical: 19,
    paddingHorizontal: 28,
    borderRadius: 200,
    marginBottom: 30,
  },
  topContainer: {
    backgroundColor: Colors.primaryBlue,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 0,
    ...CommonStyle.bodyTwoMedium,
    color: Colors.lightColor,
    paddingHorizontal: 20,
  },
  searchImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  locationContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingBottom: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  deliveryLabel: {
    textTransform: 'uppercase',
    color: Colors.lightColor,
    fontFamily: Fonts.bold,
    fontSize: 11,
    opacity: 0.5,
  },
  location: {
    ...CommonStyle.bodyTwoMedium,
    color: Colors.lightColor,
  },
  arrowDown: {
    width: 10,
    resizeMode: 'contain',
    paddingStart: 10,
  },
  bannerContainer: {
    height: 153,
    width: Dimensions.get('screen').width - 100,
    paddingEnd: 20,
    marginTop: 20,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  flatlist: {
    paddingStart: 20,
  },
});
