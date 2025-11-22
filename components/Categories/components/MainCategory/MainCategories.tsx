import { tests } from '@/mocks/tests';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

export default function Categories({ onSelect }: any) {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={{ marginBottom: 16 }}>
        Выберите тест
      </Text>

      {tests.map((test) => (
        <Button
          key={test.id}
          mode="contained"
          style={{ marginVertical: 8, width: '80%' }}
          onPress={() => onSelect(test)}
        >
          {test.title}
        </Button>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
