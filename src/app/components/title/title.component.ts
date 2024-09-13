import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { switchTheme } from '../../state/theme/theme.actions';
import { THEME } from '../../types/theme';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {
  constructor(private store: Store) {}

  toggleTheme() {
    this.store.dispatch(switchTheme({ theme: THEME.DARK }));
  }
}
