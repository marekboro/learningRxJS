import { fromEvent } from 'rxjs'
import { Component, TemplateRef } from '@angular/core'
import {Observable} from 'rxjs'
import { Template } from '@angular/compiler/src/render3/r3_ast'

@Component({
    selector: 'bigB',
    // templateUrl: './bigButton.html'
    template: `<div>
    <button (click)="onClickMe($event)"  class= "btn btn-primary" id="myButton1" > press me now</button>
    <button (click)="onClickMe($event)"  id="myButton" > press me now d</button>
</div>`
})


export class BigB {

    

    constructor() {
        console.log("Dupa bigb ")
        // const btn = $('#btn')
        // const button = document.getElementById('myButton');




        const button = document.getElementById('#myButton')
        const myObservable = fromEvent(button, 'click');
        // const subsctiption = myObservable.subscribe($event => console.log($event));
        

        // const sub2 = myObservable.subscribe( value => console.log(" dupa ", value))
      
        // const sub3 = myObservable.subscribe( 
        //     function(event){console.log("event")},
        //     function(err){console.log(err)},
        //     function(){console.log("finalised")}    
        // )
        // const subsctiption1 = myObservable.subscribe({
        //     next: event => console.log("pressed a button", event),
        //     error: error => console.log("error: ", error),
        //     complete: () => console.log("complete")
        // });
    }

    onClickMe($event){
        console.log($event)
    }

   

}
