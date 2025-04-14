// Link do desafio: https://www.hackerrank.com/challenges/grading

const gradingStudents = grades => {
  const nArr = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38) {
      let nx5 = grades[i];
      while (nx5 % 5 !== 0) {
        nx5++;
      }
      nx5 - grades[i] < 3 ? nArr.push(nx5) : nArr.push(grades[i]);
    } else {
      nArr.push(grades[i]);
    }
  }
  return nArr;
};
console.log(gradingStudents([84, 29, 57, 92]));
