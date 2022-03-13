import React from 'react';
import {Text} from 'react-native';
import {useGetProfile} from '../../hooks';

interface IProps {}

const UserProfile: React.FC<IProps> = () => {
  const [userProfile] = useGetProfile();
  return (
    <>
      <Text>{`${userProfile?.name.first} ${userProfile?.name.last}`}</Text>
      <Text>{userProfile?.email}</Text>
    </>
  );
};

export default UserProfile;
