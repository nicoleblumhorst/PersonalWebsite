import { Injectable } from '@angular/core';
import {Task} from './models/task';

@Injectable({
    providedIn: 'root'
  })
  export class BucketListService {
    private list: Task[];
  
    constructor() {
      this.list = new Array();
      this.generateBucketList();
    }

    getBucketList(): Task[] {
      return this.list;
    }

    private generateBucketList() {
      this.list.push(new Task('Write a full length story', false));
      this.list.push(new Task('Make a YouTube video', false));
      this.list.push(new Task('See a Manchester Derby', false));
      this.list.push(new Task('See an El Clásico match', false));
      this.list.push(new Task('See a World Cup final match', false));
      this.list.push(new Task('Live in another country', false));
      this.list.push(new Task('Make an Android app (and get it on the Play Store)', false));
      this.list.push(new Task('Make an iOS app (and get it on the App Store)', false));
      this.list.push(new Task('Make a web app (and deploy it)', true));
      this.list.push(new Task('See the ball drop in Time Square', false));
      this.list.push(new Task('Go to Hanau, Germany', false));
      this.list.push(new Task('Take Grandma Karla\'s ashes to the bahamas', false));
      this.list.push(new Task('Get a tattoo', true));
      this.list.push(new Task('Watch \'The Bucket List\'', false));
      this.list.push(new Task('Buy a house', true));
      this.list.push(new Task('Buy a car', true));
      this.list.push(new Task('See Idina Menzel preform live', true));
      this.list.push(new Task('See a show on Broadway', false));
      this.list.push(new Task('See the Rockefeller Center Christmas Tree in NYC', false));
      this.list.push(new Task('Go sky diving', true));
      this.list.push(new Task('Go to Oktoberfest in Germany', false));
      this.list.push(new Task('Eat sushi in Japan', false));
      this.list.push(new Task('Stay in a hostel', true));
      this.list.push(new Task('Go to a music festival', true));
      this.list.push(new Task('Bike across a state (such as RAGBRAI or BAM)', false));
      this.list.push(new Task('Donate blood', false));
      this.list.push(new Task('Pull down my shorts and slide on the ice', false));
    }
  }