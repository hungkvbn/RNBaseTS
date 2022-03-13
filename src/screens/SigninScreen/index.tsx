import React, {useMemo} from 'react';
import {View, Text, Image, ImageBackground, TextInput} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import createStyles from './styles';
import {INITIAL_BACKGROUND, LOGO} from '../../assets';
import {useTranslation} from 'react-i18next';
import {Button} from '../../components';
import {useSigninForm} from './hooks';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const SigninScreen: React.FC<IProps> = () => {
  const {t} = useTranslation();
  const styles = useMemo(() => createStyles(), []);
  const {email, password, setEmail, setPassword, onSubmit} = useSigninForm();

  return (
    <View style={styles.body}>
      <ImageBackground source={INITIAL_BACKGROUND} style={styles.backround}>
        <Image source={LOGO} style={styles.logo} />
        <Text style={styles.text}>{t('COMMON.slogan')}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            value={email}
            placeholder={t('COMMON.email')}
            style={styles.input}
            onChangeText={setEmail}
          />
          <TextInput
            value={password}
            placeholder={t('COMMON.password')}
            style={styles.input}
            onChangeText={setPassword}
          />
        </View>
        <Button
          buttonStyle={styles.btn}
          onPress={onSubmit}
          title={t('SIGNIN-SCREEN.login')}
        />
      </ImageBackground>
    </View>
  );
};

export default SigninScreen;
