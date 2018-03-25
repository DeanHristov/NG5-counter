import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';

import { CounterState } from '../store/reducers/counter.reducer';
import {
  COUNTER_INCREMENT, COUNTER_DECREMENT,
  COUNTER_RESET
} from '../store/actions/counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  value: number;

  constructor(private state: Store<CounterState>) {}

  ngOnInit() {
    this.state.select<any>('counter')
      .map(state => state.count)
      .subscribe(count => this.value = count);
  }

  increment () {
    this.state.dispatch({
      type: COUNTER_INCREMENT
    });
  }

  decrement () {
    this.state.dispatch({
      type: COUNTER_DECREMENT
    });
  }

  reset () {
    this.state.dispatch({
      type: COUNTER_RESET
    });
  }

}
