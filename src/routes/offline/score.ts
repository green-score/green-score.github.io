import { Score } from '../../types/score';

const score: { [id: string]: Score } = {
  1: {
    id: '1',
    description: 'Manual description for why.',
    factor: {
      id: '1',
      description: 'This is a factor',
      discrete: false,
      maxValue: 100,
      name: 'oil',
      minValue: 0,
    },
    companyID: '1',
    value: 90.0,
    subscores: [],
  },
  2: {
    id: '2',
    description: 'Manual description for why.',
    factor: {
      id: '2',
      description: 'This is a factor',
      discrete: false,
      maxValue: 100,
      name: 'gas',
      minValue: 0,
    },
    companyID: '2',
    value: 50.0,
    subscores: [],
  },
  3: {
    id: '3',
    description: 'Manual description for why.',
    factor: {
      id: '3',
      description: 'This is a factor',
      discrete: false,
      maxValue: 100,
      name: 'money',
      minValue: 0,
    },
    companyID: '3',
    value: 50.0,
    subscores: [],
  },
};

export const getTestScore = (id: string) => score[id];

export default {
  getTestScore,
};
