import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, debounceTime, from, take, takeLast, takeWhile } from 'rxjs';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  searchForm!: FormGroup|any;
  name!: FormControl;
 
  categories = ['Mobiles','TV', 'Chargers', 'Headphones']
  category: Observable<string>= from(this.categories)
constructor(private formBuilder:FormBuilder){}
  ngOnInit(): void {
      this.searchForm = new FormGroup({
        name: new FormControl('start search')
      })
      this.searchForm.get('name')?.valueChanges.pipe(
      //   // take operator will take till its defined range.
      //   // take(5),     // take N values.
      //   takeWhile((v) => this.checkCondition(v)),
        debounceTime(300)
        ).subscribe((data: any) =>{
          console.log(data)
      this.category.pipe(
        takeLast(2)
      )
        .subscribe((data2) =>{
        console.log(data2)
      })
    })   
      // this.searchForm.get('name')?.valueChanges.subscribe((data: any) =>{
      //     console.log(data)
      //   })
  }
  checkCondition(value:any){
    return value.length > 5? false:true;
  }
   readValue(){
    
   }   
}
