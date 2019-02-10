import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learning RXJS';

  of('qualquer coisa').subscribe(val => console.log(val));
  // timer(5000).subscribe(() => console.log('5s'));
  // tap = nao altera o valor do fluxo
  // pluck = pega uma key do objeto retornado
  // timer(1000, 1000).pipe(
  //   map(val => ({ titulo: 'dijidjsfo', val})),
  //   // tap(() => 'qwertyu'),
  //   tap(val => console.log('A', val)),
  //   filter(val => val.val % 2 === 0),
  //   pluck('titulo'),
  //   // map(() => '5s')
  // ).subscribe( val => console.log('B', val));

  const t1 = timer(1000);
  const t2 = timer(2000);

  // forkJoin - > sincroniza duas ou mais operações assincronas
  forkJoin(
    t1.pipe(
      map(() => 'aqui é o t1')
    ),
    t2.pipe(
      map(() => 'aqui é o t2')
    )
  ).subscribe(val => console.log('os dois retornaram', val));

  const url = 'https://viacep.com.br/ws/'; // 13562180/json/';
  
}
