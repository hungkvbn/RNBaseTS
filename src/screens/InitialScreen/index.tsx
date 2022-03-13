import React, {useMemo} from 'react';
import {View, Text, ImageBackground, Image, Pressable} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import createStyles from './styles';
import {AuthStackParams} from '../../navigation/NavigatorManager';
import {INITIAL_BACKGROUND, LOGO} from '../../assets';
import {Button} from '../../components';

interface IProps {
  navigation: NavigationProp<AuthStackParams, 'Signin'>;
  route: RouteProp<AuthStackParams, 'Signin'>;
}

const InitialScreen: React.FC<IProps> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  const {t} = useTranslation();

  return (
    <View style={styles.body}>
      <ImageBackground source={INITIAL_BACKGROUND} style={styles.backround}>
        <Image source={LOGO} style={styles.logo} />
        <Text style={styles.text}>{t('INITIAL-SCREEN.title')}</Text>
        <View style={styles.footer}>
          <Button
            onPress={() => navigation.navigate('Signin')}
            title={t('INITIAL-SCREEN.get_start')}
          />
          <Pressable onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.loginText}>Or Login</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default InitialScreen;
