import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import QuizCard from '../QuizCards/QuizCard';

export default function QuizTest({ test, onExit }: any) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  // mode states
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  // TIMER
  const [timeLeft, setTimeLeft] = useState(test.timer ?? null);

  useEffect(() => {
  if (!test.timer) return; // таймер отключён

  if (finished) return; // остановка таймера если тест завершён

  if (timeLeft === 0) {
    setFinished(true); // таймер закончился → финальный экран
    return;
  }

  const interval = setInterval(() => {
    setTimeLeft((t: number) => t - 1);
  }, 1000);

  return () => clearInterval(interval);
}, [timeLeft, finished, test.timer]);


const goNext = (answerIndex: number | null) => {
  if (answerIndex === test.questions[current].correctIndex) {
    setScore((s) => s + 1);
  }

  setSelectedOption(null);
  setShowFeedback(false);

  if (current + 1 < test.questions.length) {
    setCurrent((c) => c + 1);
  } else {
    setFinished(true);
  }
};


  const handleAnswer = (index: number) => {
  setSelectedOption(index);

  // BLITZ — моментальный переход
  if (test.mode === 'blitz') {
    goNext(index);
    return;
  }

  // CONFIRM — просто ждём кнопку Next
  if (test.mode === 'confirm') {
    return;
  }

  // FEEDBACK — показываем 1.5 сек подсветку
  if (test.mode === 'feedback') {
    setShowFeedback(true);
    setTimeout(() => goNext(index), 1500);
    return;
  }
};


  // FINISHED
  if (finished) {
    const total = test.questions.length;
    const resultText =
      score === total ? 'Отлично!' : score >= total / 2 ? 'Неплохо!' : 'Плохо!';

    return (
      <Wrapper background={test.background}>
        <View style={styles.resultBox}>
          <Text variant="headlineMedium">Результат</Text>
          <Text variant="titleMedium">
            {score} / {total} — {resultText}
          </Text>
          <Button mode="contained" onPress={onExit} style={{ marginTop: 16 }}>
            В главное меню
          </Button>

          {test.timer ? (
            <Text style={{ marginTop: 12 }}>Таймер: {timeLeft} сек</Text>
          ) : null}
        </View>
      </Wrapper>
    );
  }

  // ACTIVE TEST
  return (
    <Wrapper background={test.background}>
      <View style={styles.container}>
        <QuizCard
          question={test.questions[current]}
          selectedOption={selectedOption}
          showFeedback={showFeedback}
          onSelect={handleAnswer}
        />

        <Text style={{ marginTop: 12 }}>
          Вопрос {current + 1} из {test.questions.length}
        </Text>

        {test.timer ? (
          <Text style={{ marginTop: 4 }}>Осталось: {timeLeft} сек</Text>
        ) : null}

        {test.mode === 'confirm' && selectedOption !== null && (
          <Button
            mode="contained"
            onPress={() => goNext(selectedOption)}
            style={{ marginTop: 20, width: 140 }}
          >
            Next
          </Button>
        )}
      </View>
    </Wrapper>
  );
}

// Обёртка с поддержкой background
function Wrapper({ children, background }: any) {
  if (!background || background.type === 'color') {
    return (
      <View style={[styles.full, { backgroundColor: background?.value || '#fff' }]}>
        {children}
      </View>
    );
  }

  if (background.type === 'image') {
    return (
      <ImageBackground
        source={{ uri: background.value }}
        resizeMode="cover"
        style={styles.full}
      >
        {children}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: { 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '100%' 
  },
  resultBox: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});
