import { fetchCourses } from "./courses.js";
import * as Auth from "./auth.js";

Auth.getAuthInfo();
Auth.authenticated();
Auth.findUser();
fetchCourses();
