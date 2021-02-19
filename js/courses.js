//imported course elements and api as modules.
import * as CoursesElements from "./elements.js";
import * as Api from './data.js'

//i have created arrow function and call fetch method to get data from the API.then call getCourses API and passed the data from courses api.
const fetchCourses = () => {
  fetch(Api.coursesAPI)
    .then((res) => res.json())
    .then((coursesData) => getCourses(coursesData));
};
// i have created arrow function with parameter
//check if there any data and the loop trought it. created li element, add a few classes and append them to their parents but also show the data from API.
//added click event to be able to click and choose.
// called function chooseCourse() and passed the selected answer as parameter.
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
// an arrow function with the selected parameter(course)
//check if there is a course and then append it to the elements from Elemets.js module.
const chooseCourse = (course) => {
  if (course) {
    CoursesElements.courseName.innerHTML = course.courseName;
    CoursesElements.school.innerHTML = course.school;
    CoursesElements.credit.innerHTML = `${course.credit} hp`;
    CoursesElements.startWeek.innerHTML = `Startar v ${course.startWeek}`;
    CoursesElements.endWeek.innerHTML = `Slutar v ${course.endWeek}`;
  }
};

//exported fetchCourses

export { fetchCourses };
