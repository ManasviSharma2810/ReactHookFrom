import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { color } from '../../theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFFFFF',
  },
  innerContainer: {
    marginHorizontal: responsiveWidth(5),
    marginVertical: responsiveHeight(10),
  },
  createText: {
    marginTop: responsiveHeight(5),
    fontWeight: '700',
    fontSize: 28,
    color: '#0B152D',
  },
  longText: {
    color: '#9CA0AB',
    fontSize: 16,
    marginTop: 5,
    fontWeight: '400',
  },
  touch: {
    height: responsiveHeight(5),
    width: responsiveWidth(10),
    backgroundColor: '#D3D3D3',
    borderRadius: 15,
  },
  image: {
    left: responsiveWidth(3),
    height: responsiveHeight(2),
    top: responsiveHeight(1.5),
  },
  textInput: {
    backgroundColor: '#ffffff',
    height: responsiveHeight(6),
    marginTop: responsiveHeight(4),
    borderRadius: 16,
    borderWidth: 0.2,
    borderColor: 'E7EBF3',
    padding: 15,
  },
  textInputPhone: {
    flex: 1,
    width: responsiveWidth(1),
    borderRadius: 16,
    height: responsiveHeight(6),
    marginLeft: responsiveWidth(4),
    borderWidth: 0.2,
    borderColor: 'E7EBF3',
    padding: 10,
  },
  countryCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 8,
     borderWidth: 0.2,
    borderColor: 'E7EBF3',
    borderRadius: 16,
  },
  phoneView: {
    flexDirection: 'row',
    marginTop: responsiveHeight(4),
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
  styleCB: {
    height: responsiveHeight(2.2),
    width: responsiveWidth(5),
  },
  checkBoxView: {
    top: responsiveHeight(8),
    flexDirection: 'row',
  },
  textAgree: {
    marginLeft: responsiveWidth(2),
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: responsiveHeight(1),
  },
  errorInput: {
    borderColor: 'red',
  },
  toggleEye: {
    marginTop: responsiveHeight(4),
    position: 'absolute',
    right: 0,
    padding: 15,
  },
  disabledButton: {
    backgroundColor: '#A9A9A9',
  },
});
