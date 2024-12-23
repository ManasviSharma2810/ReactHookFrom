import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  FlatList,
  Text,
  Alert,
} from 'react-native';
import {styles} from './styles';
import Avatars from '../../assets/avatar_data';
import {icons} from '../../assets/icons';
import {string} from '../../utils/strings';
import {images} from '../../assets/images';
import {useNavigation} from '@react-navigation/native';

const AvatarScreen = () => {
  const navigation: any = useNavigation();
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const handleClickAvatar = (id: any) => {
    const selected = Avatars.find(avatar => avatar.id === id);

    if (selected) {
      setSelectedAvatar(id);
      setImageUri(selected.source);
    } else {
      console.error('Avatar not found');
    }
  };
  const handleContinue = () => {
    if (imageUri) {
      navigation.navigate('ProfileSetup', {profileImage: imageUri});
    } else {
      Alert.alert('Please select an avatar to continue');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={icons.backArrow}
            resizeMode="contain"
            style={styles.image}
          />
        </TouchableOpacity>
        <Text style={styles.createText}>{string.selectA}</Text>
        <Text style={styles.longText}>{string.desSetupProfile}</Text>

        <FlatList
          data={Avatars}
          keyExtractor={item => item.id.toString()}
          numColumns={3}
          renderItem={({item}) => {
            const isSelected = selectedAvatar === item.id;
            return (
              <TouchableOpacity onPress={() => handleClickAvatar(item.id)}>
                <View style={styles.avatarWrapper}>
                  <View
                    style={[
                      styles.avatarContainer,
                      isSelected && styles.selectedAvatar,
                    ]}>
                    <Image source={item.source} style={styles.avatarIcons} />
                    {isSelected && (
                      <View style={styles.checkmarkContainer}>
                        <Image source={images.tick} style={styles.checkmark} />
                      </View>
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
          contentContainerStyle={styles.flatList}
        />

        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>{string.continueButton}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AvatarScreen;
