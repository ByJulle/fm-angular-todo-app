import { ThemeState } from './theme.reducer';
import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectThemeState = (state: AppState) => state.theme;
export const selectTheme = createSelector(
  selectThemeState,
  (state: ThemeState) => state.theme,
);
