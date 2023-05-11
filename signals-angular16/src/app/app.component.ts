import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'signals-angular16';
  count=signal(0);
  showCount=signal(false);

  double =computed(()=>this.count()*2);

  countType=computed(()=>this.count() % 2===0 ? 'even':'odd');

  todos=signal([{title:'Learn Signals',done:false}])

  conditionalCount=computed(()=>{
    if(this.showCount()){
      return `The count is ${this.count()}`
    }else{
      return null
    }
  })

  constructor(){
    effect(()=>{
      console.log('count changed to ',this.count())
      console.log(this.count(),'is', this.countType())
      console.log('showcount',this.showCount())
      console.log('list of todos',this.todos())
    })
  }

  Increase(){
    this.count.update(c=>c+1)
    this.showCount.set(true)

  }

  Decrease(){
    this.count.update(c=>c-1)
  }
  reset (){
    this.count.set(0)
    this.showCount.set(false)
  }

 addTask(){
  this.todos.update((value)=>([...value,{title:'Learn Signals2',done:false}]))
 }
}
