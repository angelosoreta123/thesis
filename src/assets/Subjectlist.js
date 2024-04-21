const all_subject = [
  {
    subject_code: "CC113-M",
    name: "Introduction to Computing",
    units: "3 units",
  },
  {
    subject_code: "CC131L-M",
    name: "Computer Programming 1, Laboratory",
    units: "1 unit",
  },
  {
    subject_code: "CC132-M",
    name: "Computer Programming 1, Lecture",
    units: "2 units",
  },
  {
    subject_code: "GEC1-M",
    name: "Understanding the Self",

    units: "3 units",
  },
  {
    subject_code: "GEC3-M",
    name: "The Contemporary World",
    units: "3 units",
  },
  {
    subject_code: "GEC7-M",
    name: "Science, Technology and Society",
    units: "3 units",
  },
  {
    subject_code: "MATHA05S-M",
    name: "Fundamentals of Math Analysis",
    units: "5 units",
  },
  {
    subject_code: "NSTP1-M",
    name: "National Service Training Program 1",
    units: "3 units",
  },
  {
    subject_code: "PE1-M",
    name: "Physical Fitness",
    units: "2 units",
  },
  {
    subject_code: "CHEMGENL-M",
    name: "General Chemistry, Laboratory",
    units: "4 units",
  },
  {
    subject_code: "CHEMGEN-M",
    name: "General Chemistry, Lecture",
    units: "1 unit",
  },
  {
    subject_code: "MATHA05-M",
    name: "PRECALCULUS",
    units: "5 units",
  },
  {
    subject_code: "CC101L-M",
    name: "Computer Programming 2, Laboratory",
    units: "1 unit",
  },
  {
    subject_code: "CC102-M",
    name: "Computer Programming 2, Lecture",
    units: "2 units",
  },
  {
    subject_code: "CS103",
    name: "Discrete Structures",
    units: "3 units",
  },
  {
    subject_code: "CS123-M",
    name: "Linear Algebra",
    units: "3 units",
  },
  {
    subject_code: "GEC4-M",
    name: "Mathematics in the Modern World",
    units: "3 units",
  },
  {
    subject_code: "GEC5-M",
    name: "Purposive Communication",
    units: "3 units",
  },
  {
    subject_code: "GEC6-M",
    name: "Art Appreciation",
    units: "3 units",
  },
  {
    subject_code: "MATHA35-M",
    name: "Differential and Integral Calculus",
    units: "5 units",
  },
  {
    subject_code: "NSTP2-M",
    name: "National Service Training Program 2",
    units: "3 units",
  },
  {
    subject_code: "PE2-M",
    name: "Rhythmic Activities",
    units: "2 units",
  },
  {
    subject_code: "PHYSGENL-M",
    name: "General Physics, Laboratory",
    units: "1 unit",
  },
  {
    subject_code: "PHYSGEN-M",
    name: "General Physics, Lecture",
    units: "4 units",
  },
  {
    subject_code: "CC211L-M",
    name: "Data Structures and Algorithms, Laboratory",
    units: "1 unit",
  },
  {
    subject_code: "CC212-M",
    name: "Data Structures and Algorithms, Lecture",
    units: "2 units",
  },
  {
    subject_code: "CC233-M",
    name: "Human Computer Interaction",
    units: "3 units",
  },
  {
    subject_code: "CC251L-M",
    name: "Object Oriented Programming, Laboratory",
    units: "1 unit",
  },
  {
    subject_code: "CC252-M",
    name: "Object Oriented Programming, Lecture",
    units: "2 units",
  },
  {
    subject_code: "CC271L-M",
    name: "Computer Architecture and Organization, Laboratory",
    units: "1 unit",
  },
  {
    subject_code: "CC272-M",
    name: "Computer Architecture and Organization, Lecture",
    units: "2 units",
  },
  {
    subject_code: "CS213-M",
    name: "Combinatorics and Graph Theory",
    units: "3 units",
  },
  {
    subject_code: "GEC8-M",
    name: "Ethics",
    units: "3 units",
  },
  {
    subject_code: "PE3-M",
    name: "Individual and Dual Sports",
    units: "2 units",
  },
  {
    subject_code: "GEC2-M",
    name: "Readings in Philippine History",
    units: "3 units",
  },
  {
    subject_code: "PE3-M",
    name: "Individual and Dual Sports",
    units: "2 units",
  },
  {
    subject_code: "CC201L-M",
    name: "Information Management, Laboratory",
    units: "1 unit",
  },
  {
    subject_code: "CC202-M",
    name: "Information Management, Lecture",
    units: "2 units",
  },
  {
    subject_code: "CC223-M",
    name: "Application Development and Emerging Technologies",
    units: "3 units",
  },
  {
    subject_code: "CS203-M",
    name: "Design and Analysis of Algorithms",
    units: "3 units",
  },
  {
    subject_code: "CS221L-M",
    name: "Networks and Communications, Laboratory",
    units: "1 unit",
  },
  {
    subject_code: "CS222-M",
    name: "Networks and Communications, Lecture",
    units: "2 units",
  },
  {
    subject_code: "CS241L-M",
    name: "Operating Systems, Laboratory",
    units: "1 unit",
  },
  {
    subject_code: "CS242-M",
    name: "Operating Systems, Lecture",
    units: "2 units",
  },
  {
    subject_code: "CSE1-M",
    name: "CS Professional Elective 1",
    units: "3 units",
  },
  {
    subject_code: "MATHSTAT03-M",
    name: "Probability and Statistics",
    units: "3 units",
  },
  {
    subject_code: "PE4-M",
    name: "Team Sports",
    units: "2 units",
  },
  {
    subject_code: "CC311L-M",
    name: "Web Development, Laboratory",
    units: "1 unit",
  },
  {
    subject_code: "CC312-M",
    name: "Web Development, Lecture",
    units: "2 units",
  },
  {
    subject_code: "CS313-M",
    name: "Information Assurance and Security",
    units: "3 units",
  },
  {
    subject_code: "CS331L-M",
    name: "Software Engineering 1, Laboratory",
    units: "1 unit",
  },
  {
    subject_code: "CS332-M",
    name: "Software Engineering 1, Lecture",
    units: "2 units",
  },
  {
    subject_code: "CS353-M",
    name: "Automata Theory and Formal Languages",
    units: "3 units",
  },
  {
    subject_code: "CS373--M",
    name: "Data Analytics",
    units: "3 units",
  },
  {
    subject_code: "CS393-M",
    name: "Parallel and Distributed Computing",
    units: "3 units",
  },
  {
    subject_code: "CSE2-M",
    name: "CS Professional Elective 2",
    units: "3 units",
  },
  {
    subject_code: "GEC3",
    name: "The Contemporary World",
    units: "3 units",
  },
  {
    subject_code: "GEC5",
    name: "Purposive Communication",
    units: "3 units",
  },
  {
    subject_code: "CC303-M",
    name: "Methods of Research in Computing",
    units: "3 units",
  },
  {
    subject_code: "CS321L-M",
    name: "Artificial Intelligence, Laboratory",
    units: "1 unit",
  },
  {
    subject_code: "CS322-M",
    name: "Artificial Intelligence, Lecture",
    units: "2 units",
  },
  {
    subject_code: "CS341L-M",
    name: "Software Engineering 2, Laboratory",
    units: "1 unit",
  },
  {
    subject_code: "CS342-M",
    name: "Software Engineering 2, Lecture",
    units: "2 units",
  },
  {
    subject_code: "CS361L--M",
    name: "Programming Language (Design and Implementation), Laboratory",
    units: "1 unit",
  },
  {
    subject_code: "CS362--M",
    name: "Programming Language (Design and Implementation), Lecture",
    units: "2 units",
  },
  {
    subject_code: "CS383-M",
    name: "Modeling and Simulation",
    units: "3 units",
  },
  {
    subject_code: "CSE3-M",
    name: "CS Professional Elective 3",
    units: "3 units",
  },
  {
    subject_code: "CSE4-M",
    name: "CS Professional Elective 4",
    units: "3 units",
  },
  {
    subject_code: "CC413-M",
    name: "Social and Professional Issues",
    units: "3 units",
  },
  {
    subject_code: "CS413-M",
    name: "Thesis Writing 1",
    units: "3 units",
  },
  {
    subject_code: "GEE11D-M",
    name: "Living in the IT Era",
    units: "3 units",
  },
  {
    subject_code: "GEE12D-M",
    name: "The Entrepreneurial Mind",
    units: "3 units",
  },
  {
    subject_code: "GEE13D-M",
    name: "Reading Visual Art",
    units: "3 units",
  },
  {
    subject_code: "GEM14-M",
    name: "Life and Works of Rizal",
    units: "3 units",
  },
  {
    subject_code: "CS406-M",
    name: "Supervised Industrial Training (486 hours)",
    units: "9 units",
  },
  {
    subject_code: "CS423",
    name: "Thesis Writing 2",
    units: "3 units",
  }
];

export default all_subject;
