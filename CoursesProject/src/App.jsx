import { useState } from 'react'
import Course from './Course'
import './App.css'

function getRandomCourse() {
  const courseArray = [ 'Angular', 'Bootstrap', 'Ccsharp', 'KompleWeb' ];
  return courseArray[Math.floor(Math.random() * courseArray.length)];
}

function App() {

  const [courses, setCourses] = useState([])

  const handleClick = () => {
    setCourses([...courses, getRandomCourse()])
  }

  const courseList = courses.map((course, index) => (
    <Course key={index} courseName={course} />
  ))

  return (
    <div className="App">
      <button onClick={handleClick}>Kurs Ekle</button>
      {courseList}
    </div>
  );
}
export default App
