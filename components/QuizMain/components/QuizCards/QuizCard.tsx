import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

export default function QuizCard({ question, onAnswer }: any) {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="titleMedium" style={{ marginBottom: 16 }}>
          {question.question}
        </Text>

        {question.options.map((opt: string, idx: number) => (
          <Button
            key={idx}
            mode="outlined"
            style={{ marginVertical: 4 }}
            onPress={() => onAnswer(idx === question.correctIndex)}
          >
            {opt}
          </Button>
        ))}
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { width: '90%', marginVertical: 8 },
});
