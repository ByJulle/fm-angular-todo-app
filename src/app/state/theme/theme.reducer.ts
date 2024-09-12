import { createReducer, on } from '@ngrx/store';
import { THEME } from '../../types/theme';
import { switchTheme } from './theme.actions';

export interface ThemeState {
  theme: THEME;
}

const initialState: ThemeState = {
  theme: THEME.LIGHT,
};

export const themeReducer = createReducer(
  initialState,
  on(switchTheme, (state, { theme }) => ({ theme })),
);
