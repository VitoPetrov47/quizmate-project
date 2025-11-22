import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../../store/slices/authSlice';

export default function AuthScreen() {
  const dispatch = useDispatch();
  const router = useRouter();

  const selectUser = (role: 'user1' | 'user2' | 'admin') => {
    dispatch(login(role));
    router.replace('/main');
  };

  return (
    <View className="flex-1 justify-center items-center space-y-6">

      <Text className="text-3xl font-bold mb-10">Select user</Text>

      <View className="flex flex-col gap-4">
        <TouchableOpacity 
          className="bg-blue-500 px-8 py-4 rounded-xl"
          onPress={() => selectUser('user1')}
        >
          <Text className="text-white text-xl">User 1</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className="bg-green-500 px-8 py-4 rounded-xl"
          onPress={() => selectUser('user2')}
        >
          <Text className="text-white text-xl">User 2</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className="bg-purple-500 px-8 py-4 rounded-xl"
          onPress={() => selectUser('admin')}
        >
          <Text className="text-white text-xl">Admin</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
