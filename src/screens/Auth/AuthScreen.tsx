import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useAuthStore } from '../../state/authStore';
import { showToast } from '../../utils/toast';

export function AuthScreen() {
  const { login } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [authState, setAuthState] = useState('login');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      showToast('error', 'Please enter email and password');
      return;
    }

    try {
      setLoading(true);
      await useAuthStore.getState().login(email, password);
      showToast('success', 'meow');
    } catch (error: any) {
      showToast('error', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    if (!email || !password || !username) {
      showToast('error', 'Please enter email, username and password');
      return;
    }

    try {
      setLoading(true);
      await useAuthStore.getState().register(email, username, password);
      await useAuthStore.getState().login(email, password);
      showToast('success', 'Successfuly loggined in!');
    } catch (error: any) {
      showToast('error', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 items-center justify-center bg-zinc-800 p-9">
      <TextInput
        placeholder="Email"
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setEmail}
        className="mb-3 w-full  bg-zinc-900  p-3 text-white placeholder:text-purple-500"
      />
      {authState === 'register' ? (
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCorrect={false}
          className="mb-3 w-full bg-zinc-900 p-3 text-white placeholder:text-purple-500"
        />
      ) : (
        ''
      )}
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="mb-5 w-full bg-zinc-900 p-3 text-white placeholder:text-purple-500"
      />

      <TouchableOpacity
        onPress={authState === 'login' ? handleLogin : handleRegister}
        className="w-full rounded-3xl  bg-purple-500 p-3">
        <Text className="text-center font-bold text-white">
          {authState === 'login' ? 'LOGIN' : 'REGISTER'}
        </Text>
      </TouchableOpacity>

      <View className="top-5 flex-row gap-5">
        <Text className="text-white">
          {authState === 'login' ? 'Dont have an account?' : 'Have an account?'}
        </Text>
        <TouchableOpacity
          onPress={() =>
            authState === 'login' ? setAuthState('register') : setAuthState('login')
          }>
          <Text className="text-purple-700">{authState === 'login' ? 'Sign up' : 'Sign in'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
function setLoading(arg0: boolean) {
  throw new Error('Function not implemented.');
}
