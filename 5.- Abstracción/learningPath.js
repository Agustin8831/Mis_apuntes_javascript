export default class LearningPath {
  constructor(
    {
      name,
      logo,
      description,
      levels,
      teachers = [],
      cursos = [],
    }
  ){
    this.name = name;
    this.logo = logo;
    this.description = description;
    this.teachers = teachers;
    this.levels = levels;
    this.cursos = cursos;
  }
}