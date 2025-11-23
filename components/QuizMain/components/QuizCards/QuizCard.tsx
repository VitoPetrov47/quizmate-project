import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

export default function QuizCard({
  question,
  selectedOption,
  showFeedback,
  onSelect,
}: any) {
  const getButtonStyle = (idx: number) => {
    if (!showFeedback) return {};

    const isCorrect = idx === question.correctIndex;
    const isSelected = idx === selectedOption;

    if (isCorrect && isSelected) {
      return { backgroundColor: '#4caf50' }; // зелёный — выбран и верный
    }
    if (!isCorrect && isSelected) {
      return { backgroundColor: '#f44336' }; // красный — выбран неверный
    }
    if (isCorrect && !isSelected) {
      return { backgroundColor: '#ffeb3b' }; // жёлтый — правильный, но не выбран
    }
    return { backgroundColor: '#e0e0e0' }; // серый — остальные
  };

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="titleMedium" style={{ marginBottom: 16 }}>
          {question.question}
        </Text>

        {/* MEDIA */}
        {question.media?.type === 'image' && (
          <Image
            source={{ uri: question.media.url }}
            style={{ width: '100%', height: 160, borderRadius: 8, marginBottom: 16 }}
            resizeMode="cover"
          />
        )}

        {/* TODO video/audio */}
        {question.media?.type === 'video' && (
          <Text style={{ marginBottom: 8 }}>[Видео пока не реализовано]</Text>
        )}

        {question.media?.type === 'audio' && (
          <Text style={{ marginBottom: 8 }}>[Аудио пока не реализовано]</Text>
        )}

        {/* OPTIONS */}
        {question.options.map((opt: string, idx: number) => (
          <Button
            key={idx}
            mode="outlined"
            style={[styles.optionBtn, getButtonStyle(idx)]}
            disabled={showFeedback} // нельзя нажимать во время анимации feedback
            onPress={() => onSelect(idx)}
          >
            {opt}
          </Button>
        ))}
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    marginVertical: 8,
  },
  optionBtn: {
    marginVertical: 4,
  },
});
