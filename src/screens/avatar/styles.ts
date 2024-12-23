import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {color} from '../../theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  innerContainer: {
    marginHorizontal: responsiveWidth(5),
    marginVertical: responsiveHeight(10),
  },
  image: {
    left: responsiveWidth(3),
    height: responsiveHeight(2),
    top: responsiveHeight(1.5),
  },
  touch: {
    height: responsiveHeight(5),
    width: responsiveWidth(10),
    backgroundColor: color.arrowBG,
    borderRadius: 15,
  },
  flatList: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: responsiveHeight(6),
    width: '100%',
    borderRadius: 16,
    top: responsiveHeight(10),
    backgroundColor: color.buttonColor,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    padding: responsiveHeight(2),
  },
  createText: {
    marginTop: responsiveHeight(5),
    fontWeight: '700',
    fontSize: 28,
    color: color.createText,
  },
  longText: {
    color: color.longText,
    fontSize: 16,
    marginVertical: responsiveHeight(2),
    fontWeight: '400',
  },
  avatarWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    resizeMode: 'contain',
  },

  avatarContainer: {
    width: responsiveWidth(25),
    height: responsiveHeight(12),
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  selectedAvatar: {
    borderWidth: 3,
    borderColor: color.upload,
    borderRadius: 60,
    height: responsiveHeight(13),
    width: responsiveWidth(28),
  },

  avatarIcons: {
    width: responsiveWidth(25),
    height: responsiveHeight(12),
    borderRadius: 35,
  },

  checkmarkContainer: {
    position: 'absolute',
    top: responsiveWidth(-3),
    // right: 0,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkmark: {
    width: responsiveWidth(6),
    height: responsiveHeight(3),
  },
});
