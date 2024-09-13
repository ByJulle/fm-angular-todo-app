import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { switchTheme } from '../../state/theme/theme.actions';
import { THEME } from '../../types/theme';
import { selectTheme } from '../../state/theme/theme.selectors';
import { AppState } from '../../state/app.state';
import { of, Subscription } from 'rxjs';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {
  currentTheme: THEME = THEME.LIGHT;
  themeSubscription$!: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.themeSubscription$ = this.store
      .select(selectTheme)
      .subscribe((theme) => (this.currentTheme = theme));
  }

  ngOnDestroy() {
    if (this.themeSubscription$) {
      this.themeSubscription$.unsubscribe();
    }
  }

  toggleTheme() {
    this.store.dispatch(
      switchTheme({
        theme: this.currentTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT,
      }),
    );
  }
}
