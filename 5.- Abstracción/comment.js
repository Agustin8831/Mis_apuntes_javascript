export default class Comment {
  constructor(
    {
      content,
      studentName,
      studentRol = "estudiantes"
    }
  ) {

    this.content = content;
    this.studentName = studentName;
    this.studentRol = studentRol;
    this.likes = 0;

  }

  publicar(){
    console.log(`${this.studentName} (${this.studentRol})`);
    console.log("Likes: " + this.likes);
    console.log(this.content);
  }
}