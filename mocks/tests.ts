export const tests = [
  {
    id: '1',
    title: 'Общие знания',
    description: 'Тест на проверку базовых знаний из разных сфер.',
    category: 'mix', // math, logic, language, cooking, books, movies, mix
    author: {
      id: 'u1',
    },
    timer: 60, // секунды (0 или null = таймера нет)
    rating: 0,
    mode: 'blitz', // blitz | confirm | feedback
    background: {
      type: 'color',
      value: '#f2f2f2',
    },
    questions: [
      {
        id: 'q1',
        type: 'text',
        question: 'Столица Франции?',
        media: null,
        options: ['Берлин', 'Париж', 'Мадрид', 'Рим'],
        correctIndex: 1,
      },
      {
        id: 'q2',
        type: 'text',
        question: '2 + 2 = ?',
        media: null,
        options: ['3', '4'],
        correctIndex: 1,
      },
      {
        id: 'q3',
        type: 'image',
        question: 'Какого цвета небо?',
        media: {
          type: 'image',
          url: 'https://example.com/sky.jpg',
        },
        options: ['Синий', 'Зелёный', 'Красный'],
        correctIndex: 0,
      },
      {
        id: 'q4',
        type: 'video',
        question: 'Что такое React?',
        media: {
          type: 'video',
          url: 'https://example.com/react.mp4',
        },
        options: ['Библиотека', 'Фреймворк', 'Язык'],
        correctIndex: 0,
      },
    ],
  },

  {
    id: '2',
    title: 'Математика',
    description: 'Проверьте свои знания по базовой школьной математике.',
    category: 'math',
    author: {
      id: 'u2',
    },
    timer: null,
    rating: 0,
    mode: 'feedback', // blitz | confirm | feedback
    background: {
      type: 'color',
      value: '#e8f7ff',
    },
    questions: [
      {
        id: 'q1',
        type: 'text',
        question: '5 * 5 = ?',
        media: null,
        options: ['25', '20', '30'],
        correctIndex: 0,
      },
      {
        id: 'q2',
        type: 'audio',
        question: 'Послушайте и выберите правильный ответ',
        media: {
          type: 'audio',
          url: 'https://example.com/audio1.mp3',
        },
        options: ['2', '4', '8'],
        correctIndex: 1,
      },
    ],
  },
];
