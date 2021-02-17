import * as CoursesElements from "./elements.js";
import * as Api from './data.js'
const fetchCourses = () => {
  fetch(Api.coursesAPI)
    .then((res) => res.json())
    .then((coursesData) => getCourses(coursesData));
};

const getCourses = (coursesData) => {
  if (coursesData) {
    coursesData.forEach((course) => {
      const li = document.createElement("li");
      li.style.color = "blue";
      li.className = "list-group-item";
      if (CoursesElements.courseListContainer) {
        CoursesElements.courseListContainer.appendChild(li);
        li.innerHTML = course.courseName;
      }
      li.addEventListener("click", function () {
       CoursesElements.defaultText.style.display = "none";
        chooseCourse(course);
      });
    });
  }
};

const chooseCourse = (course) => {
  if (course) {
    CoursesElements.courseName.innerHTML = course.courseName;
    CoursesElements.school.innerHTML = course.school;
    CoursesElements.credit.innerHTML = `${course.credit} hp`;
    CoursesElements.startWeek.innerHTML = `Startar v ${course.startWeek}`;
    CoursesElements.endWeek.innerHTML = `Slutar v ${course.endWeek}`;
  }
};

export { fetchCourses };
