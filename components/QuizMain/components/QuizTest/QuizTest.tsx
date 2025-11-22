import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import QuizCard from '../QuizCards/QuizCard';

export default function QuizTest({ test, onExit }: any) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (correct: boolean) => {
    if (correct) setScore(score + 1);

    if (current + 1 < test.questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    const total = test.questions.length;
    let resultText = '';

    if (score === total) resultText = 'Отлично!';
    else if (score >= total / 2) resultText = 'Неплохо!';
    else resultText = 'Плохо!';

    return (
      <View style={styles.container}>
        <Text variant="headlineMedium">Результат</Text>
        <Text variant="titleMedium">
          {score} / {total} — {resultText}
        </Text>
        <Button mode="contained" onPress={onExit} style={{ marginTop: 16 }}>
          В главное меню
        </Button>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <QuizCard question={test.questions[current]} onAnswer={handleAnswer} />
      <Text>
        Вопрос {current + 1} из {test.questions.length}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
