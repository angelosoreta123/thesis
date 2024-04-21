const all_subject = [
  {
    subject_code: "CC113-M",
    name: "Introduction to Computing",
  },
  {
    subject_code: "CC131L-M",
    name: "Computer Programming 1, Laboratory",
  },
  {
    subject_code: "CC132-M",
    name: "Computer Programming 1, Lecture",
  },
  {
    subject_code: "GEC1-M",
    name: "Understanding the Self",
  },
  {
    subject_code: "GEC3-M",
    name: "The Contemporary World",
  },
  {
    subject_code: "GEC7-M",
    name: "Science, Technology and Society",
  },
  {
    subject_code: "MATHA05S-M",
    name: "Fundamentals of Math Analysis",
  },
  {
    subject_code: "NSTP1-M",
    name: "National Service Training Program 1",
  },
  {
    subject_code: "PE1-M",
    name: "Physical Fitness",
  },
  {
    subject_code: "CHEMGENL-M",
    name: "General Chemistry, Laboratory",
  },
  {
    subject_code: "CHEMGEN-M",
    name: "General Chemistry, Lecture",
  },
  {
    subject_code: "MATHA05-M",
    name: "PRECALCULUS",
  },
  {
    subject_code: "CC101L-M",
    name: "Computer Programming 2, Laboratory",
  },
  {
    subject_code: "CC102-M",
    name: "Computer Programming 2, Lecture",
  },
  {
    subject_code: "CS103",
    name: "Discrete Structures",
  },
  {
    subject_code: "CS123-M",
    name: "Linear Algebra",
  },
  {
    subject_code: "GEC4-M",
    name: "Mathematics in the Modern World",
  },
  {
    subject_code: "GEC5-M",
    name: "Purposive Communication",
  },
  {
    subject_code: "GEC6-M",
    name: "Art Appreciation",
  },
  {
    subject_code: "MATHA35-M",
    name: "Differential and Integral Calculus",
  },
  {
    subject_code: "NSTP2-M",
    name: "National Service Training Program 2",
  },
  {
    subject_code: "PE2-M",
    name: "Rhythmic Activities",
  },
  {
    subject_code: "PHYSGENL-M",
    name: "General Physics, Laboratory",
  },
  {
    subject_code: "PHYSGEN-M",
    name: "General Physics, Lecture",
  },
  {
    subject_code: "CC211L-M",
    name: "Data Structures and Algorithms, Laboratory",
  },
  {
    subject_code: "CC212-M",
    name: "Data Structures and Algorithms, Lecture",
  },
  {
    subject_code: "CC233-M",
    name: "Human Computer Interaction",
  },
  {
    subject_code: "CC251L-M",
    name: "Object Oriented Programming, Laboratory",
  },
  {
    subject_code: "CC252-M",
    name: "Object Oriented Programming, Lecture",
  },
  {
    subject_code: "CC271L-M",
    name: "Computer Architecture and Organization, Laboratory",
  },
  {
    subject_code: "CC272-M",
    name: "Computer Architecture and Organization, Lecture",
  },
  {
    subject_code: "CS213-M",
    name: "Combinatorics and Graph Theory",
  },
  {
    subject_code: "GEC8-M",
    name: "Ethics",
  },
  {
    subject_code: "PE3-M",
    name: "Individual and Dual Sports",
  },
  {
    subject_code: "GEC2-M",
    name: "Readings in Philippine History",
  },
  {
    subject_code: "PE3-M",
    name: "Individual and Dual Sports",
  },
  {
    subject_code: "CC201L-M",
    name: "Information Management, Laboratory",
  },
  {
    subject_code: "CC202-M",
    name: "Information Management, Lecture",
  },
  {
    subject_code: "CC223-M",
    name: "Application Development and Emerging Technologies",
  },
  {
    subject_code: "CS203-M",
    name: "Design and Analysis of Algorithms",
  },
  {
    subject_code: "CS221L-M",
    name: "Networks and Communications, Laboratory",
  },
  {
    subject_code: "CS222-M",
    name: "Networks and Communications, Lecture",
  },
  {
    subject_code: "CS241L-M",
    name: "Operating Systems, Laboratory",
  },
  {
    subject_code: "CS242-M",
    name: "Operating Systems, Lecture",
  },
  {
    subject_code: "CSE1-M",
    name: "CS Professional Elective 1",
  },
  {
    subject_code: "MATHSTAT03-M",
    name: "Probability and Statistics",
  },
  {
    subject_code: "PE4-M",
    name: "Team Sports",
  },
  {
    subject_code: "CC311L-M",
    name: "Web Development, Laboratory",
  },
  {
    subject_code: "CC312-M",
    name: "Web Development, Lecture",
  },
  {
    subject_code: "CS313-M",
    name: "Information Assurance and Security",
  },
  {
    subject_code: "CS331L-M",
    name: "Software Engineering 1, Laboratory",
  },
  {
    subject_code: "CS332-M",
    name: "Software Engineering 1, Lecture",
  },
  {
    subject_code: "CS353-M",
    name: "Automata Theory and Formal Languages",
  },
  {
    subject_code: "CS373--M",
    name: "Data Analytics",
  },
  {
    subject_code: "CS393-M",
    name: "Parallel and Distributed Computing",
  },
  {
    subject_code: "CSE2-M",
    name: "CS Professional Elective 2",
  },
  {
    subject_code: "GEC3",
    name: "The Contemporary World",
  },
  {
    subject_code: "GEC5",
    name: "Purposive Communication",
  },
  {
    subject_code: "CC303-M",
    name: "Methods of Research in Computing",
  },
  {
    subject_code: "CS321L-M",
    name: "Artificial Intelligence, Laboratory",
  },
  {
    subject_code: "CS322-M",
    name: "Artificial Intelligence, Lecture",
  },
  {
    subject_code: "CS341L-M",
    name: "Software Engineering 2, Laboratory",
  },
  {
    subject_code: "CS342-M",
    name: "Software Engineering 2, Lecture",
  },
  {
    subject_code: "CS361L--M",
    name: "Programming Language (Design and Implementation), Laboratory",
  },
  {
    subject_code: "CS362--M",
    name: "Programming Language (Design and Implementation), Lecture",
  },
  {
    subject_code: "CS383-M",
    name: "Modeling and Simulation",
  },
  {
    subject_code: "CSE3-M",
    name: "CS Professional Elective 3",
  },
  {
    subject_code: "CSE4-M",
    name: "CS Professional Elective 4",
  },
  {
    subject_code: "CC413-M",
    name: "Social and Professional Issues",
  },
  {
    subject_code: "CS413-M",
    name: "Thesis Writing 1",
  },
  {
    subject_code: "GEE11D-M",
    name: "Living in the IT Era",
  },
  {
    subject_code: "GEE12D-M",
    name: "The Entrepreneurial Mind",
  },
  {
    subject_code: "GEE13D-M",
    name: "Reading Visual Art",
  },
  {
    subject_code: "GEM14-M",
    name: "Life and Works of Rizal",
  },
  {
    subject_code: "CS406-M",
    name: "Supervised Industrial Training (486 hours)",
  },
  {
    subject_code: "CS423",
    name: "Thesis Writing 2",
  }
];

export default all_subject;
