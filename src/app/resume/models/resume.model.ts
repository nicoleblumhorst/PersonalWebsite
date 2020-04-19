import { Work } from './work.model';
import { Project } from './project.model';
import { Education } from './education.model';
import { SkillSection } from './skill-section.model';

export class Resume {
  skills: SkillSection[];
  projects: Project[];
  work: Work[];
  education: Education[];
}
