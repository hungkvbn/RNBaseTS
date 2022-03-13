import React, {useMemo} from 'react';
import {View} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import createStyles from './styles';
import UserProfile from './UserProfile';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const DashboardScreen: React.FC<IProps> = () => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View style={styles.body}>
      <UserProfile />
    </View>
  );
};

export default DashboardScreen;
