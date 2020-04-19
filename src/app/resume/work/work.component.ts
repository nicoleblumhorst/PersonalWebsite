import { Component, Input, OnInit } from '@angular/core';
import { Work } from '../models/work.model';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  @Input() work: Work[];

  constructor() { }

  ngOnInit(): void {
  }

}
