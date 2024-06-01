import Card from './Card';
// eslint-disable-next-line react/prop-types
const Cards = ({ courses, filteredCourses }) => {
  const allCourses = [];
  const getCourses = () => {
    if (filteredCourses === 'All') {
      if (!courses) {
        console.log("courses is null!", courses);
      }
      else {
        Object.values(courses).forEach((courseCategory) => {
          courseCategory.forEach((course) => {
            allCourses.push(course);
          })
        })
        return allCourses;
      }
    }
    else{
      // pass only specific filteredCourses data
      return courses[filteredCourses];
    }
  }
  getCourses();
  console.log("all ", allCourses);

  return (
    <div>
      {
        allCourses.map((course) => {
          return (
            <Card key={course.id} course={course} />
          )
        })
      }
    </div>
  )
}

export default Cards
