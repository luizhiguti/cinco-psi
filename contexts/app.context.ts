import React, { createContext } from 'react';

export interface IAppContext {
  currentSection: string;
  setCurrentSection: Function;
}

const DEFAULT_VALUE: IAppContext = {
  currentSection: '',
  setCurrentSection: () => {},
};

export const AppContext = createContext(DEFAULT_VALUE);
