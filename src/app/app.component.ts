import { Component } from '@angular/core';
import { fromEvent } from 'rxjs'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',



})
export class AppComponent {
  
  title = 'learningRxJS';
  clickStore: number[][] = [];
  typingStore: string[] = [];

  mouseAt: any = { x: 0, y: 0 };

  

  handleMouseMove(event) {
    console.log('start')
    this.mouseAt = { x: 0, y: 0 };
    var listen = setInterval(
      () => {
        console.log("1.", this.mouseAt.x, this.mouseAt.y)
        this.mouseAt.x = event.clientX;
        console.log("2.", this.mouseAt.x, this.mouseAt.y)

        this.mouseAt.y = event.clientY;
        console.log("3.", this.mouseAt.x, this.mouseAt.y)
        clearInterval(listen);
      }, 1000);

  }

  constructor() {

    const body = document.body;

    
    console.log('Using dispatchEvent');
    
    
    
    // body.dispatchEvent(new Event('click'));
    
    // document.onmousemove = this.handleMouseMove;

  //   document.onmousemove = function(e) {
  //     var event = e || window.event;
  //     window.MouseEvent. = event.clientX;
  //     window.mouseY = event.clientY;
  // }
  let mouser : MouseEvent = new MouseEvent("mousemove",{view:window}) ;
    console.log("ggdgdsdsdsds")
    var listen1 = setInterval(
      () => {

        var a1 = new MouseEvent("mousemove");
    
        body.dispatchEvent(a1);


        // console.log("ggdg")
        
        console.log("1.", this.mouseAt.x, this.mouseAt.y)
        this.mouseAt.x = a1.pageX;
        console.log("2.", this.mouseAt.x, this.mouseAt.y)

        this.mouseAt.y = a1.pageY;
        console.log("3.", this.mouseAt.x, this.mouseAt.y)
        // clearInterval(listen1);
      }, 1000);


    // setTimeout(() => { console.log(this.mouseAt)}, 1000)
    // setTimeout((event) => {var x = event.clientX;
    //   var y = event.clientY;}, 1000)

    // function handleMouseMove(event) {

    //   this.mouseAt.x = event.clientX;
    //   this.mouseAt.y = event.clientY;
    // event = event || window.event; // IE-ism





    // setTimeout(() => { this.mouseAt[0] = x, this.mouseAt[1] = y }, 1000)





  }


}




