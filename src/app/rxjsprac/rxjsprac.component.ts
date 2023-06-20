import { Component } from '@angular/core';
import { combineLatest, delay, from, map, of, pluck, startWith } from 'rxjs';

@Component({
  selector: 'app-rxjsprac',
  templateUrl: './rxjsprac.component.html',
  styleUrls: ['./rxjsprac.component.css']
})
export class RxjspracComponent {
  //emits any number of provided values in sequence
  // source = of(1, 2, 3, 4, 5);
  // //output: 1,2,3,4,5
  // sub = this.source.subscribe(val => console.log(val));

  //  source = of({ name: 'Brian' }, [1, 2, 3], function hello() {
  //   return 'Hello';
  // });
  // //output: {name: 'Brian'}, [1,2,3], function hello() { return 'Hello' }
  //  subscribe = this.source.subscribe(val => console.log(val));

  //  arraySource = from([1, 2, 3, 4, 5]);
  // //output: 1,2,3,4,5
  //  subscribe = this.arraySource.subscribe(val => console.log(val));

  ngOnInit() {
//     const map = new Map();
// map.set(1, 'Hi');
// map.set(2, 'Bye');

// const mapSource = from(map);
// //output: [1, 'Hi'], [2, 'Bye']
// const subscribe = mapSource.subscribe(val => console.log(val));
       this.pluckfunc();
       this.comblat()
  }
  pluckfunc(){
  
    const source = from([
      { name: 'Joe', age: 30, job: { title: 'Developer', language: 'JavaScript' } },
      //will return undefined when no job is found
      { name: 'Sarah', age: 35 }
    ]);
    //grab title property under job
    const example = source.pipe(pluck('job', 'title'));
    //output: "Developer" , undefined
    const subscribe = example.subscribe(val => console.log(val));
  }
  comblat(){
    const observables = {
      a: of(1).pipe(delay(1000), startWith(0)),
      b: of(5).pipe(delay(5000), startWith(0)),
      c: of(10).pipe(delay(10000), startWith(0))
    };
    const combined = combineLatest(observables);
    combined.subscribe(value => console.log(value));
  }
}
