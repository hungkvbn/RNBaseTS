import {useCallback, useState} from 'react';
import {useSignIn} from '../../services/auth';

const useSigninForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [signIn, statusState] = useSignIn();

  const onSubmit = useCallback(() => {
    signIn({userId: email, password});
  }, [email, password, signIn]);

  return {setEmail, setPassword, email, password, onSubmit, statusState};
};

export {useSigninForm};
