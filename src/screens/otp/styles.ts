import { StyleSheet } from "react-native"
import { color } from "../../theme"
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions"
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
      },
      innerContainer: {
        marginHorizontal: responsiveWidth(5),
        marginVertical: responsiveHeight(10),
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
      numberText:{
        color:color.phnText
      },
      numberText2:{
        color:color.phnText,
        marginTop:responsiveHeight(4),
        fontWeight:'400',
        fontSize:14
      },
      containerInput: {
        flexDirection: 'row',
        paddingVertical:responsiveHeight(2)
      },
      input: {
        width: responsiveWidth(15),
        height: responsiveHeight(6.5),
        borderWidth: 1,
        borderColor: color.inputBorder,
        textAlign: 'center',
        fontSize: 18,
        marginHorizontal:responsiveWidth(1.5),
        borderRadius: 16,
      },
      resend:{
        fontSize:14,
        fontWeight:'500',
        color:color.upload
      },
      button: {
        height: responsiveHeight(6),
        width: '100%',
        borderRadius: 16,
        top: responsiveHeight(5),
        backgroundColor: color.buttonColor,
      },
      buttonText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700',
        color: '#FFFFFF',
        padding: responsiveHeight(2),
      },
      errorText: {
        color: 'red',
        textAlign: 'center',
        marginTop: 10,
      },
})