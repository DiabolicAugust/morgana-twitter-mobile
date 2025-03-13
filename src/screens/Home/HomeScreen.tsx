import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { useAuthStore } from '../../state/authStore';
import { LegendFeed } from '../../components/LegendFeed';

export function HomeScreen() {
  const { logout } = useAuthStore();

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1">
        <LegendFeed />
      </View>
      {/* <TouchableOpacity
        onPress={logout}
        className="rounded bg-red-500 px-5 py-3"
      >
        <Text className="font-bold text-white">Logout</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
}
