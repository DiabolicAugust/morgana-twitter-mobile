import { Text, View, TouchableOpacity } from 'react-native';
import { useAuthStore } from '../../state/AuthStore';

export function HomeScreen() {
  const { logout } = useAuthStore();

  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Text className="mb-5 text-2xl font-bold text-black">Welcome Home! 😎</Text>

      <TouchableOpacity onPress={logout} className="rounded bg-red-500 px-5 py-3">
        <Text className="font-bold text-white">Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
