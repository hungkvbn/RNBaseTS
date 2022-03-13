import React, {useMemo} from 'react';
import {View, Text} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import createStyles from './styles';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const SettingScreen: React.FC<IProps> = () => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View style={styles.body}>
      <Text style={styles.text}> Setting Screen</Text>
    </View>
  );
};

export default SettingScreen;
