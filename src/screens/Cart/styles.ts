import {StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';
import CommonStyle from '../../utils/CommonStyle';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  cartItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.borderColor,
    paddingBottom: 15,
    paddingTop: 20,
    marginHorizontal: 24,
  },
  thumbImage: {
    width: 80,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  priceContent: {
    marginStart: 25,
    flex: 1,
  },
  titleText: {
    ...CommonStyle.bodyTwoMedium,
  },
  itemQtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  minusImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  qty: {
    ...CommonStyle.bodyTwoMedium,
    paddingHorizontal: 10,
  },
  totalContainer: {
    marginHorizontal: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 36,
    marginTop: 30,
    backgroundColor: Colors.lightColor,
    paddingBottom: 30,
  },
  totalTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  primaryBtn: {
    borderWidth: 1,
    borderColor: Colors.primaryBlue,
    borderRadius: 20,
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: Colors.primaryBlue,
    marginTop: 35,
  },
  primaryText: {
    ...CommonStyle.bodyTwoSemiBold,
    color: Colors.white,
  },
});
