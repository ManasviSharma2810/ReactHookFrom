import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {icons} from '../../assets/icons';
import CountryPicker, {Country} from 'react-native-country-picker-modal';
import {styles} from './styles';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';

const CreateAccount: React.FC = () => {
  const [countryCode, setCountryCode] = useState('US');
  const [callingCode, setCallingCode] = useState('+1');
  const [showPassword, setShowPassword] = useState(true);
  const navigation:any = useNavigation();
  const schema = yup.object({
    name: yup.string().required('Name is required'),
    phone: yup
      .string()
      .required('Phone number is required')
      .matches(/^\d{10}$/, 'Phone number must be digits only'),
    email: yup
      .string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Enter a valid email',
      )
      .required('Email is required'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });
  const {
    control,
    handleSubmit,
    formState: {errors,isValid},
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const onSubmit = (data: any) => {
    console.log('Form Data:', data);
    navigation.navigate('ProfileSetup');
    
  };
  const togglePassword = () => {
    setShowPassword(!showPassword);
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
        <Text style={styles.createText}>Create your Profile</Text>
        <Text style={styles.longText}>
          Complete your profile to unlock the full potential {'\n'}of the app
          and personalize your experience
        </Text>
        <View>
          <Controller
            control={control}
            name="name"
            render={({field: {onChange, value}}) => (
              <TextInput
                style={[styles.textInput, errors.name && styles.errorInput]}
                placeholder="Name"
                placeholderTextColor="#4F535E"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          {errors.name && (
            <Text style={styles.errorText}>{errors.name.message}</Text>
          )}
          <View style={styles.phoneView}>
            <View style={styles.countryCodeContainer}>
              <CountryPicker
                countryCode={countryCode}
                withFlag
                withCallingCode
                withFilter
                withAlphaFilter
                onSelect={(country: Country) => {
                  setCountryCode(country.cca2);
                  setCallingCode(country.callingCode[0]);
                }}
              />
              <Text>{callingCode}</Text>
            </View>
            <Controller
              control={control}
              name="phone"
              render={({field: {onChange, value}}) => (
                <TextInput
                  style={[
                    styles.textInputPhone,
                    errors.phone && styles.errorInput,
                  ]}
                  placeholder="Phone Number"
                  placeholderTextColor="#4F535E"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
          </View>
          {errors.phone && (
            <Text style={styles.errorText}>{errors.phone.message}</Text>
          )}

          <Controller
            control={control}
            name="email"
            render={({field: {onChange, value}}) => (
              <TextInput
                style={[styles.textInput, errors.email && styles.errorInput]}
                placeholder="Email ID"
                placeholderTextColor="#4F535E"
                value={value}
                onChangeText={onChange}
                keyboardType="email-address"
              />
            )}
          />
          {errors.email && (
            <Text style={styles.errorText}>{errors.email.message}</Text>
          )}
          <View>
            <Controller
              control={control}
              name="password"
              render={({field: {onChange, value}}) => (
                <TextInput
                  style={[
                    styles.textInput,
                    errors.password && styles.errorInput,
                  ]}
                  placeholder="Password"
                  placeholderTextColor="#4F535E"
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry={showPassword}
                />
              )}
            />
            {/* <TouchableOpacity style={styles.toggleEye} onPress={togglePassword}>
              {showPassword ? (
                <Icon name="visibility-off" size={25} color="blue" />
              ) : (
                <Icon name="visibility" size={25} color="blue" />
              )}
            </TouchableOpacity> */}
          </View>

          {errors.password && (
            <Text style={styles.errorText}>{errors.password.message}</Text>
          )}
        </View>
        <View style={styles.checkBoxView}>
          <Image source={icons.blankCB} style={styles.styleCB} />
          <Text style={styles.textAgree}>
            I agree to the{' '}
            <Text style={{fontWeight: 'bold', color: '#000080'}}>
              terms of use{' '}
            </Text>{' '}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CreateAccount;
