import { BucketListService } from './bucket-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.scss']
})
export class BucketListComponent implements OnInit {

  constructor(public bucketListService: BucketListService) { }

  ngOnInit(): void {
  }

}
