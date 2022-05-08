import { action } from 'mobx';
import { useLocalObservable } from 'mobx-react';
// import { ScoreCascade } from '../types/score';

export interface ScoreStore {
  open: boolean;

  openScoreVersionID?: string;
  openFactorID?: string;
  // scoreCascade?: ScoreCascade; // to be computed

  // scoreCascadeCache?: { [key: string]: ScoreCascade };

  openScore: (scoreVersionID: string, factorID: string) => void;
  closeScore: () => void;
}

const useScoreStore = () => {
  const store = useLocalObservable<ScoreStore>(() => ({
    open: false,
    openScoreVersionID: undefined,
    openFactorID: undefined,
    // scoreVersionID: undefined,
    // factorID: undefined,
    // scoreCascade: undefined,
    openScore: action((scoreVersionID: string, factorID: string) => {
      store.openScoreVersionID = scoreVersionID;
      store.openFactorID = factorID;
      store.open = true;
    }),
    closeScore: action(() => {
      store.open = false;
      store.openScoreVersionID = undefined;
      store.openFactorID = undefined;
    }),
  }));

  return store;
};

export default useScoreStore;
