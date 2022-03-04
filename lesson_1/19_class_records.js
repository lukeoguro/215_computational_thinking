const WEIGHTS = { exams: 0.65, exercises: 0.35 };

function generateClassRecordSummary(data) {
  return {
    studentGrades: getStudentGrades(data),
    exams: getExamSummaries(data),
  };
}

function getStudentGrades(data) {
  return Object.keys(data).map((student) => {
    let scores = data[student].scores;
    let studentGrade = getStudentGrade(scores);
    let letterGrade = getLetterGrade(studentGrade);

    return `${studentGrade} (${letterGrade})`;
  });
}

function getStudentGrade(scores) {
  let grade = (avg(scores.exams) * WEIGHTS.exams) +
    (sum(scores.exercises) * WEIGHTS.exercises);
  return Math.round(grade);
}

function avg(array) {
  return sum(array) / array.length;
}

function sum(array) {
  return array.reduce((acc, score) => acc + score);
}

function getLetterGrade(grade) {
  if (grade >= 93) {
    return 'A';
  } else if (grade >= 85) {
    return 'B';
  } else if (grade >= 77) {
    return 'C';
  } else if (grade >= 69) {
    return 'D';
  } else if (grade >= 60) {
    return 'E';
  } else {
    return 'F';
  }
}

function getExamSummaries(data) {
  let examData = getExamData(data);
  return examData.map(scores => getExamSummary(scores));
}

function getExamData(data) {
  let examData = Object.keys(data).map((student) => {
    return data[student].scores.exams;
  });
  return transpose(examData);
}

function transpose(matrix) {
  return matrix[0].map((_, colIdx) => matrix.map(row => row[colIdx]));
}

function getExamSummary(scores) {
  return {
    average: avg(scores),
    minimum: Math.min(...scores),
    maximum: Math.max(...scores),
  };
}

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: ['87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)'],
//     exams: [
//       { average: 75.6, minimum: 50, maximum: 100 },
//       { average: 86.4, minimum: 70, maximum: 100 },
//       { average: 87.6, minimum: 60, maximum: 100 },
//       { average: 91.8, minimum: 80, maximum: 100 },
//     ],
// }