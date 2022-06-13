import Comment from "./comment.js";

class Student {
  constructor(
    {
      name,
      username,
      email,
      instagram,
      facebook,
      twitter,
      learningPath = [],
      approvedCourses = []
    }
  ){
    this.name = name;
    this.username = username;
    this.email = email;
    this.socialMedia = {
      instagram,
      facebook,
      twitter
    }
    this.learningPath = learningPath;
    this.approvedCourses = approvedCourses;
  }

  publicarComentario(contenidoComentario){
    const comment = new Comment({
        content: contenidoComentario,
        studentName: this.name,
    });
    comment.publicar();
  }
}

export class FreeStudent extends Student {
  constructor(props){
    super(props);
  }

  approveCourse(newCourse){
    if(newCourse.isFree){
      this.approvedCourses.push(newCourse);
    }else {
      console.log("No puedes tomas este curso" + this.name);
    }
  };
}

export class Teacher extends Student {
  constructor(props){
    super(props);
  }

  publicarComentario(contenidoComentario){
    const comment = new Comment({
        content: contenidoComentario,
        studentName: this.name,
        studentRol: "Profesor"
    });
    comment.publicar();
  } 
}