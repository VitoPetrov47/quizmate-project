export const tests = [
  {
    id: '1',
    title: 'Общие знания',
    questions: [
      {
        id: 'q1',
        question: 'Столица Франции?',
        options: ['Берлин', 'Париж', 'Мадрид', 'Рим'],
        correctIndex: 1,
      },
      {
        id: 'q2',
        question: '2 + 2 = ?',
        options: ['3', '4'],
        correctIndex: 1,
      },
      {
        id: 'q3',
        question: 'Цвет неба?',
        options: ['Синий', 'Зелёный', 'Красный'],
        correctIndex: 0,
      },
      {
        id: 'q4',
        question: 'React — это?',
        options: ['Библиотека', 'Фреймворк', 'Язык'],
        correctIndex: 0,
      },
    ],
  },
  {
    id: '2',
    title: 'Математика',
    questions: [
      {
        id: 'q1',
        question: '5 * 5 = ?',
        options: ['25', '20', '30'],
        correctIndex: 0,
      },
      {
        id: 'q2',
        question: 'Корень из 16?',
        options: ['2', '4', '8'],
        correctIndex: 1,
      },
    ],
  },
];
