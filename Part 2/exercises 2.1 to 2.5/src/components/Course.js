import React from 'react'
  
  const Content = (props) => {
    const courseList = props.courses.map(courseDetails => 
            <div key={courseDetails.id}>
                <h1 key={courseDetails.id}>{courseDetails.name}</h1>
                {courseDetails.parts.map(eachCourse => 
                <div key={eachCourse.id}>
                    <p key={eachCourse.id}>{eachCourse.name} {eachCourse.exercises}</p>
                </div>
                )}
                Total of {courseDetails.parts.reduce((sum, part) => sum + part.exercises,0)} exercises
            </div>
        )

    return (
      courseList
    )
  }

const Course = (props) => {
    return (
      <div>
        <Content courses={props.courses}/>
      </div>
    )
  }

  export default Course