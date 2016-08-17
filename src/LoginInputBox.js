import React from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const windowSize = Dimensions.get('window');
const StyleSheet = require('./F8StyleSheet');
const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  inputWrapper: {
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    paddingLeft: 10,
  },
  inputBox: {
    height: 50,
    width: windowSize.width / 1.5,
    backgroundColor: 'transparent',
  },
  btnWrapper: {
    paddingTop: 10,
  },
  btnContainer: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  btnIcon: {

  },
  divider: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    borderWidth: 0.3,
    borderColor: 'rgba(127, 127, 127, 0.8)',
  },
  forgetPwdWrapper: {
    position: 'absolute',
    bottom: 15,
    right: 20,
  },
});

export default function LoginInputBox(props) {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.inputBox}
          autoCapitalize={'none'}
          autoCorrect={false}
          autoFocus={false}
          keyboardType={'default'}
          placeholder={props.placeholderUserName}
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.inputBox}
          autoCapitalize={'none'}
          autoCorrect={false}
          autoFocus={false}
          secureTextEntry
          keyboardType={'default'}
          placeholder={props.placeholderPassword}
        />
        <TouchableOpacity onPress={props.onForgetPwdPress} style={styles.forgetPwdWrapper}>
          <FontAwesome
            allowFontScaling={false}
            name="question-circle"
            size={25}
            color={'rgba(255, 255, 255, 0.5)'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.btnWrapper}>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={props.onLoginPress}
        >
          <FontAwesome
            name="sign-in"
            size={24}
            color={'#000'}
            style={styles.btnIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

LoginInputBox.propTypes = {
  userName: React.PropTypes.string,
  password: React.PropTypes.string,
  placeholderUserName: React.PropTypes.string,
  placeholderPassword: React.PropTypes.string,
  onLoginPress: React.PropTypes.func,
  onForgetPwdPress: React.PropTypes.func,
};

LoginInputBox.defaultProps = {
  userName: '',
  password: '',
  placeholderUserName: 'Username',
  placeholderPassword: 'Password',
};
