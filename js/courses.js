const fetchCourses = () => {
  fetch("http://webbred2.utb.hb.se/~fewe/api/api.php?data=courses")
    .then((res) => res.json())
    .then((coursesData) => getCourses(coursesData));
};

const getCourses = (coursesData) => {
  const courseListContainer = document.querySelector(".courseList");
  const defaultText = document.querySelector(".defaultText");
  if (coursesData) {
    coursesData.forEach((course) => {
      const li = document.createElement("li");
      li.style.color = "blue";
      li.className = "list-group-item";
      if (courseListContainer) {
        courseListContainer.appendChild(li);
        li.innerHTML = course.courseName;
      }
      li.addEventListener("click", function () {
        defaultText.style.display = "none";
        chooseCourse(course);
      });
    });
  }
};

const chooseCourse = (course) => {
  const courseName = document.querySelector(".courseName");
  const school = document.querySelector(".schoolName");
  const credit = document.querySelector(".credit");
  const startWeek = document.querySelector(".startWeek");
  const endWeek = document.querySelector(".endWeek");
  if (course) {
    courseName.innerHTML = course.courseName;
    school.innerHTML = course.school;
    credit.innerHTML = `${course.credit} hp`;
    startWeek.innerHTML = `Startar v ${course.startWeek}`;
    endWeek.innerHTML = `Slutar v ${course.endWeek}`;
  }
};

export { fetchCourses };
