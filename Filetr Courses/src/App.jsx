import Navbar from "./components/Navbar"
import Filter from "./components/Filter"
import Cards from "./components/Cards"
import { apiUrl, filterData } from './data';
import { useEffect, useState } from "react";

const App = () => {

  const [courses, setCourses] = useState(null);
  const [filteredCourses, setFilteredCourses] = useState(filterData[0].title);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const Response = await res.json();
        setCourses(Response.data);

      } catch (error) {
        console.log("something went wrong!");
      }
    }
    fetchData();

  }, []);

  // console.log("courses ", courses);

  return (
    <div>
      <Navbar />

      <Filter
        filterData={filterData}
        filteredCourses={filteredCourses}
        setFilteredCourses={setFilteredCourses} />

      <Cards courses={courses} filteredCourses = {filteredCourses}/>
    </div>
  )
}

export default App
