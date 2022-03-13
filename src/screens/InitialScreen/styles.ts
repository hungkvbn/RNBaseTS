import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../constants/colors';

const createStyles = () =>
  StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: RFValue(25),
      fontWeight: '300',
      color: Colors.light_grey,
      textAlign: 'center',
      marginHorizontal: RFValue(50),
    },
    backround: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      backgroundColor: Colors.orange,
    },
    logo: {
      width: RFValue(130),
      height: RFValue(130),
      marginTop: RFValue(20),
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
    },
    loginText: {
      fontSize: RFValue(20),
      marginTop: RFValue(20),
      color: Colors.light_grey,
      marginBottom: RFValue(50),
      textAlign: 'center',
      fontWeight: '500',
    },
  });

export default createStyles;
