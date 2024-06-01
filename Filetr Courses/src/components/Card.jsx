
// eslint-disable-next-line react/prop-types
const Card = ({ course }) => {
  console.log("course from card : ", course);
  return (
    <div>
      {!course ? (<div>Loading...</div>) : (
        <div>
          <img src={course.image.url} alt={course.alt} />
          <h2>{course.title}</h2>
          <p>{course.description}</p>
        </div>
      )}

    </div>
  )
}

export default Card
