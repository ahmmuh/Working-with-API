//courses api code

const getCourses = () => {
  fetch("http://webbred2.utb.hb.se/~fewe/api/api.php?data=courses")
    .then((res) => res.json())
    .then((coursesData) => getSingelCourse(coursesData));
};
getCourses();

const getSingelCourse = (coursesData) => {
  const courseListContainer = document.querySelector(".courseList");
  const defaultText = document.querySelector(".defaultText");
  coursesData.forEach((course) => {
    const li = document.createElement("li");
    li.style.color = "blue";
    li.className = "list-group-item";
    li.innerHTML = course.courseName;
    courseListContainer.appendChild(li);
    li.addEventListener("click", function () {
      defaultText.style.display = "none";
      chooseCourse(course);
    });
  });
};

const chooseCourse = (course) => {
  const courseName = document.querySelector(".courseName");
  const school = document.querySelector(".schoolName");
  const credit = document.querySelector(".credit");
  const startWeek = document.querySelector(".startWeek");
  const endWeek = document.querySelector(".endWeek");
  courseName.innerHTML = course.courseName;
  school.innerHTML = course.school;
  credit.innerHTML = `${course.credit} hp`;
  startWeek.innerHTML = `Startar v ${course.startWeek}`;
  endWeek.innerHTML = `Slutar v ${course.endWeek}`;
};
