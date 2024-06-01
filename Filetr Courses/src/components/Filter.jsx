
const Filter = ({ filterData, filteredCourses, setFilteredCourses }) => {

  const filterHandler = (title) => {
    console.log(filteredCourses);
    setFilteredCourses(title)
  }

  return (
    <div>
      {filterData.map((data) => {
        return (
          <button onClick={()=> filterHandler(data.title)} key={data.id}>{data.title}</button>
        )
      })}
    </div>
  )
}

export default Filter
