/**
 * Bachelor of Theology (B.Th) syllabus structure.
 * Each semester has N modules; each module has 12 lessons; each lesson has 12 slides (in teach content).
 */

export const SEMESTERS = [
  {
    number: 1,
    year: 1,
    title: "First Semester",
    titleFriendly: "Part 1",
    modules: [
      "Survey of the Old Testament",
      "Orientation to Christian Theology",
      "Introduction to the Study of Religions",
      "Introduction to Mission and Church Planting",
      "English Grammar",
      "Greek Preliminary",
    ],
  },
  {
    number: 2,
    year: 1,
    title: "Second Semester",
    titleFriendly: "Part 2",
    modules: [
      "History of Israel",
      "Pentateuch",
      "Synoptic Gospels",
      "Gospel of John",
      "Introduction to Christian Doctrines",
      "History of Christianity: Medieval",
      "Major Religious Traditions in India",
      "Pastoral Care and Counselling",
      "Discipleship and Christian Living",
      "Theology of Mission & Evangelism",
    ],
  },
  {
    number: 3,
    year: 2,
    title: "Third Semester",
    titleFriendly: "Part 3",
    modules: [
      "Biblical Archaeology",
      "Prophets",
      "Poetical Books and Wisdom Literature",
      "Book of the Acts of Apostles",
      "Pauline Epistles",
      "Major Issues in Christology",
      "Introduction to Christian Ethics",
      "History of Christianity: Modern",
      "A Detailed Study of Religious Tradition: Hinduism",
      "Christian Education",
    ],
  },
  {
    number: 4,
    year: 2,
    title: "Fourth Semester",
    titleFriendly: "Part 4",
    modules: [
      "Biblical Archaeology",
      "Prophets",
      "Poetical Books and Wisdom Literature",
      "Book of the Acts of Apostles",
      "Pauline Epistles",
      "Major Issues in Christology",
      "Introduction to Christian Ethics",
      "History of Christianity: Modern",
      "A Detailed Study of Religious Tradition: Hinduism",
      "Christian Education",
    ],
  },
  {
    number: 5,
    year: 3,
    title: "Fifth Semester",
    titleFriendly: "Part 5",
    modules: [
      "Apocalyptic Literature with Special Focus on the Book of Daniel",
      "Biblical Hebrew - Preliminary",
      "General Epistles",
      "Biblical Greek - Preliminary",
      "Indian Christian Theology",
      "History of Christianity in India",
      "Modern Religious and Secular Movements in India",
      "Christian Homiletics",
      "Christian Communication",
      "Modern Trends in Missions",
    ],
  },
  {
    number: 6,
    year: 3,
    title: "Sixth Semester",
    titleFriendly: "Part 6",
    modules: [
      "Bible Hermeneutics: Methods and Perspectives",
      "The Book of the Revelation",
      "Theology of the New Testament",
      "Biblical Greek - Preliminary",
      "Modern Trends in Theology",
      "History of Pentecost Movement",
      "Christian Response to Religious Cults",
      "Leadership and Pastoral Administration",
      "Discipleship and Christian Living",
    ],
  },
];

/** Lesson ID format: bth-s{1-6}-m{1-N}-l{1-12} */
export function lessonId(semester, moduleIndex, lessonIndex) {
  return `bth-s${semester}-m${moduleIndex + 1}-l${lessonIndex + 1}`;
}

/** All lesson IDs for the syllabus (for progress/storage). */
export function getAllLessonIds() {
  const ids = [];
  SEMESTERS.forEach((sem) => {
    sem.modules.forEach((_, mIdx) => {
      for (let l = 0; l < 12; l++) ids.push(lessonId(sem.number, mIdx, l));
    });
  });
  return ids;
}
