import React, {useRef, useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {icons} from '../../assets/icons';
import {string} from '../../utils/strings';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';
const OtpScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const inputs = useRef<Array<TextInput | null>>([]);

  const handleInputChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text.slice(0, 1);
    setOtp(newOtp);

    if (text) {
      if (index < 4) {
        inputs.current[index + 1]?.focus();
      }
    } else {
      if (index > 0) {
        inputs.current[index - 1]?.focus();
      }
    }
  };
  const otpValidationSchema = Yup.object({
    otp: Yup.array()
      .of(
        Yup.string()
          .required('This field is required')
          .matches(/^\d$/, 'Must be a single digit'),
      )
      .length(5, 'OTP must have 5 digits'),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {otp: ['', '', '', '', '']},
    resolver: yupResolver(otpValidationSchema),
  });
  const onSubmit = (data: {otp: string[]}) => {
    console.log('OTP Submitted:', data.otp.join(''));
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.touch}>
          <Image
            source={icons.backArrow}
            resizeMode="contain"
            style={styles.image}
          />
        </TouchableOpacity>
        <Text style={styles.createText}>{string.verifyPhone}</Text>
        <Text style={styles.longText}>{string.enterCode}</Text>
        <Text style={styles.numberText}>{string.phnEg}</Text>
        <Text style={styles.numberText2}>{string.digits}</Text>
        <View style={styles.containerInput}>
          {otp.map((value, index) => (
            <View key={index}>
              <Controller
                name={`otp.${index}`}
                control={control}
                render={({field: {onChange}}) => (
                  <TextInput
                    value={value}
                    onChangeText={text => {
                      onChange(text.slice(0, 1));
                      handleInputChange(text, index);
                    }}
                    style={[
                      styles.input,
                      errors.otp?.[index] && {borderColor: 'red'},
                    ]}
                    keyboardType="numeric"
                    maxLength={1}
                    ref={ref => (inputs.current[index] = ref)}
                  />
                )}
              />
              {errors.otp && (
                <Text style={styles.errorText}>{errors.otp.message}</Text>
              )}
            </View>
          ))}
        </View>

        <Text style={styles.resend}>Resend</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>{string.verify}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OtpScreen;
