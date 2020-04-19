import { BucketListService } from './../bucket-list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Task} from '../models/task';

@Component({
  selector: 'app-proof',
  templateUrl: './proof.component.html',
  styleUrls: ['./proof.component.scss']
})
export class ProofComponent implements OnInit {

  task: Task;

  constructor(
    private route: ActivatedRoute,
    private service: BucketListService,
    private location: Location) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getBucketListItem(id);
  }

}
