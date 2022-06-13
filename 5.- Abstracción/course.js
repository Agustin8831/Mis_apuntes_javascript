export default class Course {
  constructor(
    {
      name,
      classes=[],
      isFree = false,
    }
  ){
    this.name = name;
    this.classes = classes;        
    this.isFree = isFree;
  }
}
