import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-clip',
  templateUrl: './clip.component.html',
  styleUrls: ['./clip.component.css']
})
export class ClipComponent implements OnInit{

  public id :string = ''

  constructor(
    private route : ActivatedRoute
  ){}

    ngOnInit(): void {
        this.route.params.subscribe((params : Params)=>{
         this.id = params['id']
        })
    }
}