import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {color} from '../../theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
  },
  innerContainer: {
    marginHorizontal: responsiveWidth(5),
    marginVertical: responsiveHeight(10),
  },
  dateText: {
    padding: 10,
    bottom: responsiveHeight(4),
    color: color.profilePic,
  },
  profileAndUpload: {
    justifyContent: 'center',
    marginHorizontal: responsiveWidth(5),
  },
  aboveUP:{
flexDirection:'row'
  },
  uploadContainer: {
    height: responsiveHeight(16),
    width: responsiveWidth(34),
    
  },

  selectedText: {
    padding: 10,
    top: responsiveHeight(0.8),
    color: color.profilePic,
    justifyContent: 'center',
  },
  profileText: {
    fontSize: 14,
    color: color.profilePic,
    paddingVertical: 12,
  },
  upload: {
    color: color.upload,
    fontSize: 16,
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
  innerViewStyle: {
    flexDirection: 'row',
  },
  girlView: {
    marginTop: 20,
    width: responsiveWidth(1),
    height: responsiveHeight(1),
    backgroundColor: '#e1ebfe',
  },
  personStyle: {
    borderRadius: 100,
    width: responsiveWidth(32),
    height: responsiveHeight(15),
  },
  textInput: {
    backgroundColor: '#ffffff',
    height: responsiveHeight(6),
    marginTop: responsiveHeight(2),
    borderRadius: 16,
    borderWidth: 0.4,
    borderColor: 'E7EBF3',
    padding: 15,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: responsiveHeight(0.5),
  },
  errorInput: {
    borderColor: 'red',
    borderWidth:1
  },
  calender: {
    height: responsiveHeight(4),
    width: responsiveWidth(6),
    resizeMode: 'contain',
    left: responsiveWidth(80),
    marginTop: responsiveHeight(1),
  },
  calenderView: {
    width: '100%',
    height: responsiveHeight(6.5),
    borderWidth: 0.4,
    borderColor: color.border,
    borderRadius: 16,
    marginTop: responsiveHeight(3),
  },
  down: {
    height: responsiveHeight(2),
    width: responsiveWidth(3),
    resizeMode: 'contain',
    left: responsiveWidth(81),
    marginTop: responsiveHeight(-2),
  },
  button: {
    height: responsiveHeight(6),
    width: '100%',
    borderRadius: 16,
    top: responsiveHeight(2),
    backgroundColor: color.buttonColor,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    padding: responsiveHeight(2),
  },

  dropdown: {
    marginTop: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    maxHeight: 200,
    padding: 5,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: color.borderDD,
    borderRadius: 8,
  },
  dropdownText: {
    fontSize: 16,
    color: color.backgroundDDText,
  },
  selectedItem: {
    backgroundColor: '',
    borderWidth: 1,
    padding: 10,
  },
  downDownTextSelected: {
    color: color.borderDD,
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'transparent',
  },
  filledCircle: {
    backgroundColor: '#00C853',
    borderColor: '#00C853',
  },
  filledImageCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  cross:{
    height:responsiveHeight(3),
    width:responsiveWidth(5),
    resizeMode:'contain',
    top:responsiveHeight(41.5),
    left:responsiveWidth(81),
    position:'absolute'
  }
});
