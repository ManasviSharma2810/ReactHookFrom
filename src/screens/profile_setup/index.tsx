import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {styles} from './style';
import {icons} from '../../assets/icons';
import {string} from '../../utils/strings';
import * as yup from 'yup';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {images} from '../../assets/images';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {color} from '../../theme';
import CustomModal from '../../components/modal';
import {
  launchCamera,
  launchImageLibrary,
  CameraOptions,
} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';

const ProfileSetup = ({route}: any) => {
  const {profileImage} = route.params || {};
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [imageUri, setImageUri] = useState<string | null>(null);
  const navigation: any = useNavigation();
  const data = [
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
    {label: 'Others', value: 'Others'},
    {label: 'Prefer not to say', value: 'PreferNotToSay'},
  ];
  const handleConfirm = ({date, onChange}: any) => {
    const formattedDate = date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: '2-digit',
      year: '2-digit',
    });
    onChange(formattedDate);
    setDatePickerVisibility(false);
  };

  const openCamera = () => {
    const options: CameraOptions = {
      mediaType: 'photo',
      includeBase64: false,
    };

    launchCamera(options, response => {
      if (response?.didCancel) {
        console.log('User cancelled camera launch');
      } else if (response?.errorCode) {
        console.error(`Camera Error: ${response.errorMessage}`);
      } else if (response?.assets && response.assets.length > 0) {
        const image: string | undefined = response.assets[0].uri;
        if (image) {
          console.log('Captured Image URI:', image);
          setImageUri(image);
          setShowPhotoModal(false);
        } else {
          console.error('No URI found for the captured image.');
        }
      } else {
        console.error('Unknown error occurred while using the camera.');
      }
    });
  };

  const openGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
      },
      response => {
        if (response?.assets && response.assets.length > 0) {
          const uri = response.assets[0].uri;
          if (uri) {
            setImageUri(uri);
            setShowPhotoModal(false);
          } else {
            console.error('No URI found for the selected image.');
          }
        } else {
          console.error('No assets found or selection was canceled.');
        }
      },
    );
  };

  const schema = yup.object({
    username: yup
      .string()
      .required('Name is required')
      .min(3, 'Username must be at least 3 characters long')
      .max(20, 'Username must be at most 20 characters long')
      .matches(
        /^[a-zA-Z0-9_]+$/,
        'Username can only contain letters, numbers, and underscores',
      ),

    birthday: yup.string().required('Birthday is required'),
    gender: yup.string().required('Gender is required'),
    referralCode: yup.string().required('Referral Code is required'),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      username: '',
      birthday: '',
      gender: '',
      referralCode: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log('Form Data:', data);
  };

  const onUploadPhoto = () => {
    setShowPhotoModal(true);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.touch}>
          <Image
            source={icons.backArrow}
            resizeMode="contain"
            style={styles.image}
          />
        </TouchableOpacity>
        <Text style={styles.createText}>{string.profileSetupText}</Text>
        <Text style={styles.longText}>{string.desSetupProfile}</Text>
        <View style={styles.innerViewStyle}>
          <View style={styles.aboveUP}>
            <View style={styles.uploadContainer}>
              <Image
                style={styles.personStyle}
                source={
                  imageUri
                    ? {uri: imageUri}
                    : profileImage
                    ? profileImage
                    : images.person
                }
              />
            </View>

            <View style={styles.profileAndUpload}>
              <Text style={styles.profileText}>{string.ppText}</Text>
              <TouchableOpacity onPress={onUploadPhoto}>
                <Text style={styles.upload}>{string.uploadPro}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Controller
          control={control}
          name="username"
          render={({field: {onChange, value}}) => (
            <TextInput
              style={[styles.textInput, errors.username && styles.errorInput]}
              placeholder={string.usernamePlaceholder}
              placeholderTextColor={color.placeholderText}
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <Image
          source={errors.username ? images.cross : images.ddtick}
          style={styles.cross}
        />
        {errors.username && (
          <Text style={styles.errorText}>{errors.username.message}</Text>
        )}
        <Controller
          control={control}
          name="birthday"
          render={({field: {onChange, value}}) => (
            <>
              <TouchableOpacity onPress={() => setDatePickerVisibility(true)}>
                <View
                  style={[
                    styles.calenderView,
                    errors.birthday && styles.errorInput,
                  ]}>
                  <Image source={images.calender} style={styles.calender} />
                  <Text style={styles.dateText}>
                    {' '}
                    {value || string.birthdayPlaceholder}
                  </Text>
                </View>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={date => handleConfirm({date, onChange})}
                onCancel={() => setDatePickerVisibility(false)}
                display="inline"
              />
            </>
          )}
        />
        {errors.birthday && (
          <Text style={styles.errorText}>{errors.birthday.message}</Text>
        )}

        <Controller
          control={control}
          name="gender"
          render={({field: {onChange, value}}) => (
            <>
              <TouchableOpacity onPress={() => setShowPicker(!showPicker)}>
                <View
                  style={[
                    styles.calenderView,
                    errors.gender && styles.errorInput,
                  ]}>
                  <Text style={styles.selectedText}>
                    {value || 'Select Gender'}
                  </Text>
                  <Image source={icons.downArrow} style={styles.down} />
                </View>
              </TouchableOpacity>
              {showPicker && (
                <View style={styles.dropdown}>
                  {data.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.dropdownItem,
                        value === item.value && styles.selectedItem,
                      ]}
                      onPress={() => {
                        onChange(item.value);
                        setShowPicker(false);
                      }}>
                      <Text
                        style={[
                          styles.dropdownText,
                          value === item.value && styles.downDownTextSelected,
                        ]}>
                        {item.label}
                      </Text>

                      {value === item.value ? (
                        <Image
                          source={images.ddtick}
                          style={styles.filledImageCircle}
                        />
                      ) : (
                        <View style={styles.circle} />
                      )}
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </>
          )}
        />

        {errors.gender && (
          <Text style={styles.errorText}>{errors.gender.message}</Text>
        )}

        <Controller
          control={control}
          name="referralCode"
          render={({field: {onChange, value}}) => (
            <TextInput
              style={[
                styles.textInput,
                errors.referralCode && styles.errorInput,
              ]}
              placeholder={string.referralCodePlaceholder}
              placeholderTextColor={color.placeholderText}
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.referralCode && (
          <Text style={styles.errorText}>{errors.referralCode.message}</Text>
        )}

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>{string.continueButton}</Text>
        </TouchableOpacity>
      </View>
      <CustomModal
        transparent={true}
        visible={showPhotoModal}
        animationType="slide"
        onRequestClose={() => setShowPhotoModal(false)}
        onPress1={() => setShowPhotoModal(false)}
        onPress2={openGallery}
        onPress3={openCamera}
        onPress4={() => {
          navigation.navigate('AvatarScreen');
          setShowPhotoModal(false);
        }}
      />
    </ScrollView>
  );
};

export default ProfileSetup;
