import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing',
  standalone: true,
  imports: [],
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.css'
})
export class RoutingComponent implements OnInit {

  @Input({
    transform: (val: string) => Number(val)
  }) id!: number;

  ngOnInit() {
    console.log(this.id);
    console.log(typeof (this.id));
  }

}
