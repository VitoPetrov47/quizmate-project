import Categories from '@/components/Categories/components/MainCategory/MainCategories';
import QuizTest from '@/components/QuizMain/components/QuizTest/QuizTest';
import React, { useState } from 'react';
import { View } from 'react-native';

export default function MainScreen() {
  const [selectedTest, setSelectedTest] = useState(null);

  if (selectedTest) {
    return <QuizTest test={selectedTest} onExit={() => setSelectedTest(null)} />;
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Categories onSelect={(test: any) => setSelectedTest(test)} />
    </View>
  );
}
