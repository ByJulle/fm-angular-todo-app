import { createAction, props } from '@ngrx/store';
import { THEME } from '../../types/theme';

export const switchTheme = createAction(
  '[Theme] switching theme',
  props<{ theme: THEME }>(),
);
