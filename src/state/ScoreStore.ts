import { useLocalObservable } from 'mobx-react';
import { ScoreCascade } from '../types/score';

export interface ScoreStore {
  scoreVersionID: string;
  factorID: string;
  scoreCascade?: ScoreCascade; // to be computed
}

const useScoreStore = () => {
  const store = useLocalObservable<ScoreStore>(() => ({
    scoreVersionID: undefined,
    factorID: undefined,
    scoreCascade: undefined,
  }));

  return store;
};

export default useScoreStore;
