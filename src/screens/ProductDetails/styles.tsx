import {StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';
import CommonStyle from '../../utils/CommonStyle';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  detailsTitle: {
    ...CommonStyle.hOneBold,
    fontSize: 50,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  paginationDot: {
    marginHorizontal: 0,
    width: 20,
  },
  inactiveDot: {},
  dotsContainer: {
    position: 'absolute',
    bottom: 0,
    paddingVertical: 0,
    paddingBottom: 10,
  },
  dotElement: {
    width: 20,
    backgroundColor: Colors.primaryYellow,
    height: 4,
    borderRadius: 20,
  },
  sliderConainter: {
    marginTop: 20,
  },
  price: {
    ...CommonStyle.hOneBold,
    fontSize: 16,
    color: Colors.primaryBlue,
  },
  priceContainer: {
    paddingHorizontal: 20,
    marginTop: 26,
    flexDirection: 'row',
    alignItems: 'center',
  },
  offContainer: {
    backgroundColor: Colors.primaryBlue,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginStart: 20,
  },
  offPrice: {
    ...CommonStyle.labelRegular,
    color: Colors.white,
  },
  btnCotnainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  secondaryBtn: {
    borderWidth: 1,
    borderColor: Colors.primaryBlue,
    borderRadius: 20,
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  secondaryText: {
    ...CommonStyle.bodyTwoSemiBold,
    color: Colors.primaryBlue,
  },
  primaryBtn: {
    marginStart: 20,
    borderWidth: 1,
    borderColor: Colors.primaryBlue,
    borderRadius: 20,
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: Colors.primaryBlue,
  },
  primaryText: {
    ...CommonStyle.bodyTwoSemiBold,
    color: Colors.white,
  },
  detailsContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  detailsText: {
    ...CommonStyle.bodyOneRegular,
  },
});
