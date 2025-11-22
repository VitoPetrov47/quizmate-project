import { RootState } from '@/store';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function HomeScreen() {
  const router = useRouter();
  const isAuthorized = useSelector((state: RootState) => state.auth.isAuthorized);

  useEffect(() => {
    if (isAuthorized) {
      router.replace('/main');
    }
  }, [isAuthorized, router]);

  const goNext = () => {
    if (isAuthorized) router.replace('/main');
    else router.replace('/auth');
  };

  return (
    <View className="flex-1 justify-center gap-10 items-center bg-white pt-20 pb-16">
      <View>
        <Text className="text-4xl mb-4 text-center font-bold text-gray-900">
          QuizMate
        </Text>

        <Text className="text-lg text-gray-600 text-center px-10">
          Test your knowledge. Challenge your mind.  
        </Text>
      </View>

      <TouchableOpacity
        className="bg-blue-600 px-10 py-4 rounded-xl"
        onPress={goNext}
      >
        <Text className="text-white text-xl font-semibold">
          Start
        </Text>
      </TouchableOpacity>
    </View>
  );
}
