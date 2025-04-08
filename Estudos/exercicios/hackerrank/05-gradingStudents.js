// Link do desafio: https://www.hackerrank.com/challenges/grading

const gradingStudents = grades => {
  for (let i in grades) {
    if (grades[i] >= 38) {
      let nx5 = grades[i];
      while (nx5 % 5 !== 0) {
        nx5++;
      }
      nx5 - grades[i] < 3 ? console.log(nx5) : console.log(grades[i]);
    } else {
      console.log(grades[i]);
    }
  }
};
gradingStudents([84, 29, 57, 92]);
