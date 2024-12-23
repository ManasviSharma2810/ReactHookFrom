import React from 'react';
import {
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from 'react-native';
import {images} from '../../assets/images';
import {icons} from '../../assets/icons';
import {styles} from './style';
import { string } from '../../utils/strings';
const CustomModal = ({
  visible,
  onRequestClose,
  onPress1,
  onPress2,
  onPress3,
  onPress4
}: any) => {
  return (
    <View>
      <Modal
        transparent={true}
        visible={visible}
        animationType="slide"
        onRequestClose={onRequestClose}>
        <TouchableWithoutFeedback onPress={onPress1}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContent1}>
              <Text style={styles.modalTitle1}>{string.profilePhoto}</Text>

              <TouchableOpacity onPress={onPress2}>
                <View style={styles.containerTop}>
                  <View style={styles.containerTop1}>
                    <Image source={images.gallery} style={styles.imgSize} />
                    <View style={styles.containerTop2}>
                      <Text style={styles.textName}>{string.uploadFromGlry}</Text>
                    </View>
                  </View>
                  <View style={styles.forwardContainer}>
                    <Image
                      source={icons.imgForward}
                      style={styles.imgForward}
                    />
                  </View>
                </View>
              </TouchableOpacity>

              <View style={styles.marginSpace}></View>

              <TouchableOpacity onPress={onPress3}>
                <View style={styles.containerTop}>
                  <View style={styles.containerTop1}>
                    <Image source={images.camera} style={styles.imgSize} />
                    <View style={styles.containerTop2}>
                      <Text style={styles.textName}>{string.uploadPro}</Text>
                    </View>
                  </View>
                  <View style={styles.forwardContainer}>
                    <Image
                      source={icons.imgForward}
                      style={styles.imgForward}
                    />
                  </View>
                </View>
              </TouchableOpacity>

              <View style={styles.marginSpace}></View>

              <TouchableOpacity onPress={onPress4}>
                <View style={styles.containerTop}>
                  <View style={styles.containerTop1}>
                    <Image source={images.avatar} style={styles.imgSize} />
                    <View style={styles.containerTop2}>
                      <Text style={styles.textName}>{string.selectAvatar}</Text>
                    </View>
                  </View>
                  <View style={styles.forwardContainer}>
                    <Image
                      source={icons.imgForward}
                      style={styles.imgForward}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default CustomModal;
