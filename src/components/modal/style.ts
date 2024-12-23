import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {color} from '../../theme';
export const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
  },
  modalContent1: {
    backgroundColor: color.backgroundColorModal,
    borderRadius: 10,
    padding: 20,
    width: responsiveWidth(100),
    maxHeight: responsiveHeight(50),
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
  modalTitle1: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: responsiveHeight(2),
    lineHeight: 30.36,
  },
  containerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: color.backgroundColorList,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: color.borderColorList,
  },
  marginSpace: {
    marginBottom: responsiveHeight(1.5),
  },
  containerTop1: {
    flexDirection: 'row',
    padding: 20,
  },
  imgSize: {
    height: responsiveHeight(6),
    width: responsiveWidth(10),
    resizeMode: 'contain',
  },
  forwardContainer: {
    justifyContent: 'center',
    marginRight: responsiveWidth(7),
  },
  imgForward: {
    width: responsiveHeight(1.5),
    height: responsiveWidth(3),
    resizeMode: 'contain',
  },
  containerTop2: {
    paddingLeft: responsiveWidth(5),
    paddingTop: responsiveHeight(1.5),
  },
  textName: {
    color: color.modalTextColor,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 16,
  },
});
