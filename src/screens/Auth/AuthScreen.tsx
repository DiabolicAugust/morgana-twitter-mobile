import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useAuthStore } from '../../state/AuthStore';

export function AuthScreen() {
  const { login } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email === 'test@test.com' && password === '123456') {
      await login('fake-jwt-token'); // ✅ Replace with real token later
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <View className="flex-1 items-center justify-center bg-gray-100 p-5">
      <Text className="mb-5 text-2xl font-bold text-black">Welcome!</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="mb-3 w-full rounded border border-gray-300 bg-white p-3"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="mb-5 w-full rounded border border-gray-300 bg-white p-3"
      />

      <TouchableOpacity onPress={handleLogin} className="w-full rounded bg-blue-500 p-3">
        <Text className="text-center font-bold text-white">Login</Text>
      </TouchableOpacity>
    </View>
  );
}
