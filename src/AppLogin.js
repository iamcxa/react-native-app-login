import React, { Component } from 'react';
import {
  Dimensions,
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import LoginInputBox from './LoginInputBox';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// const coverImg = require('../images/dashboard.png');
// const bgImg = require('../images/bg.jpg');
const StyleSheet = require('F8StyleSheet');
const windowSize = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bgWrapper: {
    flex: 1,
    top: 0,
    left: 0,
    position: 'absolute',
    backgroundColor: 'gray',
  },
  bgImg: {
    width: windowSize.width,
    height: windowSize.height,
  },
  headerWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerTitle: {
    // paddingTop: 10,
    color: '#FFF',
    fontSize: 24,
    fontWeight: '900',
    textShadowColor: '#333',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 10,
    ios: {
      shadowOffset: {
        width: 3,
        height: 3,
      },
      shadowColor: 'black',
      shadowOpacity: 1.0,
    },
    android: {
      // top: 100,
      // left: windowSize.width / 2 - 70,
    },
  },
  coverImg: {
    width: windowSize.width,
    height: 210,
  },
  versionWrapper: {
    position: 'absolute',
    top: 15,
    padding: 2,
  },
  imgSrcText: {
    width: windowSize.width,
    textAlign: 'center',
    fontSize: 11,
    fontWeight: 'bold',
    color: '#555',
    fontStyle: 'italic',
    ios: {
      shadowOffset: {
        width: 2,
        height: 2,
      },
      shadowColor: 'black',
      shadowOpacity: 1.0,
    },
  },
  rightsInfoWrapper: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  LoginInputBox: {
    flex: 1.4,
    backgroundColor: 'transparent',
  },
  footerWrapper: {
    position: 'absolute',
    bottom: 10,
    flex: 1,
  },
  footerTitle: {
    color: 'rgba(181, 181, 181, 0.75)',
    fontSize: 10,
    fontWeight: '100',
    textAlign: 'center',
    width: windowSize.width,
  },
});

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areaId: 0,
      typeId: 0,
    };
  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  areaOnChange = (id) => {
    this.setState({
      areaId: id,
    });
  };
  typeOnChange = (id) => {
    this.setState({
      typeId: id,
    });
  };
  rightsInfoHandle = () => {
    const msg = 'ㄧ、採果小旅行(以下簡稱本程式)所有之內容，本程式擁有著作權，均受到中 ' +
    '華民國著作權法及國際著作權法律的保障。非經本程式同意，任何人均不得以任何方式重製、改作、' +
      '編輯等使用本網站內所有內容，如有侵害，本程式將依法訴追所有之民、刑事責任。本程式資訊內容受' +
      '著作權法保護者，除有合理使用情形外，應取得本程式之同意或授權後，方得利用；若涉及其他著作' +
      '權人之著作內容者，亦應取得該著作權人之同意或授權後，方得利用。' +
      '\n\n二、為報導、評論、教學、研究或其他正當目的，在合理範圍內，得引用本程式上之資訊；引' +
      '用時並請註明出處。其他合理使用情形，請參考著作權法第44條至第65條之規定。' +
      '\n\n三、為供網路使用者便利，任何網站連結至本程式網站，毋須經本程式同意。' +
      '\n\n四、本程式僅提供相關網站之連結，對利用人涉及該網站內容之使用行為，本程式不負責任。' +
      '\n\n五、本程式所提供相關連結網站之網頁或資料，均為被連結網站所提供，相關權利為該等網站' +
      '或合法權利人所有，本程式不擔保其正確性、即時性或完整性。';
    Alert.alert('服務條款', msg);
  };
  render() {
    const { version, imgCover, imgBg } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.bgWrapper}>
          <Image source={imgBg} style={styles.bgImg} />
        </View>
        <View style={styles.headerWrapper}>
          <View style={styles.titleWrapper}>
            <View style={styles.versionWrapper}>
              <Text allowFontScaling={false} style={styles.imgSrcText}>
                v-{version}
              </Text>
            </View>
            <Image
              resizeMode={Image.resizeMode.contain}
              style={styles.coverImg}
              source={imgCover}
            />
            <Text style={styles.headerTitle} allowFontScaling={false}>
              請登入
            </Text>
          </View>
          <TouchableOpacity onPress={this.rightsInfoHandle} style={styles.rightsInfoWrapper}>
            <FontAwesome
              allowFontScaling={false}
              name="info-circle"
              size={25}
              color={'rgba(255, 255, 255, 0.5)'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.LoginInputBox}>
          <LoginInputBox />
        </View>
        <View style={styles.footerWrapper}>
          <Text style={styles.footerTitle} allowFontScaling={false}>
            BossTool is copyrigth still working in progress
          </Text>
        </View>
      </View>
    );
  }
}

LoginPage.propTypes = {
  version: React.PropTypes.string,
  onListItemPress: React.PropTypes.func,
  imgCover: React.PropTypes.string,
  imgBg: React.PropTypes.string,
};

LoginPage.defaultProps = {
  version: '1.0.0',
  onListItemPress: null,
  imgCover: '',
  imgBg: '',
};
