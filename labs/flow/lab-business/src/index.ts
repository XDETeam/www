import { CompositeFunctor } from "@xde/flow-manager";

import administratoredInstance from "./functors/Administratored";
import businessOperatingSuccessfullyInstance from "./functors/BusinessOperatingSuccessfully";
import businessOperatingSuccessfullyInFutureInstance from "./functors/BusinessOperatingSuccessfullyInFuture";
import courseHandledInstance from "./functors/CourseHandled";
import coursePreparedInstance from "./functors/CoursePrepared";
import lessonHandledInstance from "./functors/LessonHandled";
import refundedAmountInstance from "./functors/RefundedAmount";
import studentHandledInstance from "./functors/StudentHandled";
import studentHappyInstance from "./functors/StudentHappy";
import studentInterestedInstance from "./functors/StudentInterested";
import teacheredInstance from "./functors/Teachered";
import teachersSalariedInstance from "./functors/TeachersSalaried";

class Root extends CompositeFunctor<any, any> {
	name = "root";
	from = [];
	to = [];
}
export const root = new Root();
root.addChildren([
	administratoredInstance,
	businessOperatingSuccessfullyInstance,
	businessOperatingSuccessfullyInFutureInstance,
	courseHandledInstance,
	coursePreparedInstance,
	lessonHandledInstance,
	refundedAmountInstance,
	studentHandledInstance,
	studentHappyInstance,
	studentInterestedInstance,
	teacheredInstance,
	teachersSalariedInstance,
]);
