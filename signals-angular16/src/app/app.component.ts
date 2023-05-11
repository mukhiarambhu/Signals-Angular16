import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'signals-angular16';
  count=signal(0)

  double =computed(()=>this.count()*2)

  countType=computed(()=>this.count() % 2===0 ? 'even':'odd')

  constructor(){
    effect(()=>{
      console.log('count changed to ',this.count())
      console.log(this.count(),'is', this.countType())
    })
  }

  Increase(){
    this.count.update(c=>c+1)
  }

  Decrease(){
    this.count.update(c=>c-1)
  }
  reset (){
    this.count.set(0)
  }

}
