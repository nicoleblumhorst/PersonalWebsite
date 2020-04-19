import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../models/skill.model';
import { SkillSection } from '../models/skill-section.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input() skills: SkillSection[];

  constructor() { }

  ngOnInit(): void {
  }

}
