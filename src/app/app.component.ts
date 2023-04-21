import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, from, fromEvent, interval, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{
 
  title = 'Rxjsoprts';
  agents!: Observable<string>;
  agentName!: string;
  studentList = ['Ram','Sham','Dham','Shani bhai']
  students: Observable<string[]> = of(this.studentList)
  // from operator
  OrderList = ['Samosa','Pizza','Egg','Shani bhai']
  orders: Observable<string> = from(this.OrderList)
  orderp!: string;

  @ViewChild('validate')
  validate!: ElementRef;
  @ViewChild('getLink')
  getLinkData!: ElementRef;
  constructor()    {}
  ngOnInit(): void {

    this.orders.subscribe(data=>{
      // console.log(data);
      //  this.orderp = data
      const seqn =  interval(500);
      seqn.subscribe(num=>{
        if(num<5)
        {
          console.log(data + num);
        }
        // console.log(data + num);
      })
     })
  

  //  this.students.subscribe(data=>{
  //   console.log(data);
  //  })



    // this.agents = new Observable(
    //   function(observer){
    //     try{
    //       observer.next('Ram')
    //       setInterval(()=>{
    //         observer.next('Sham')
    //       },3000)
    //       setInterval(()=>{
    //         observer.next('Dham')
    //       },6000)
    //     }
    //     catch(e){
    //       observer.error(e)
    //     }
    //   }
    // );

    // this.agents.subscribe(data=>{
    //   // console.log(data);  
    //    this.agentName = data;
    // })
  }

  ngAfterViewInit(){
    // const btnObs = fromEvent(this.validate?.nativeElement,'click');
    // btnObs.subscribe(data=>{
    //  console.log(data);
    // })
    const linkObs = fromEvent(this.getLinkData?.nativeElement, 'mouseover')        // for mouse event.
    linkObs.subscribe(data=>{
      console.log(data);
    })
 }
  rxjsObsEvent(){
     const btnObs = fromEvent(this.validate?.nativeElement,'click');
       btnObs.subscribe(data=>{
        console.log(data);
       })
    }

  // getEventObs(){
  //   const linkObs = fromEvent(this.getLinkData?.nativeElement, 'mouseover')
  //   linkObs.subscribe(data=>{
  //     console.log(data);
  //   })
  // }
}
