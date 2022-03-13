import React, {useMemo} from 'react';
import {Pressable, StyleProp, ViewStyle, Text} from 'react-native';
import {Colors} from '../../constants/colors';
import createStyles from './styles';

interface IProps {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<ViewStyle>;
}

const Button: React.FC<IProps> = ({
  title,
  onPress,
  disabled,
  buttonStyle,
  textStyles,
}) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <Pressable
      style={[
        styles.button,
        {
          backgroundColor: disabled ? Colors.grey : Colors.green,
        },
        buttonStyle,
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.text, textStyles]}>{title}</Text>
    </Pressable>
  );
};

export default Button;
