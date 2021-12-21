import React from 'react'
import CourseGrid from '../Organisms/CourseGrid'
import { connect } from 'react-redux'

const Courses = ({courses}) => <CourseGrid courses={courses} />

const mapStateToProps = state => ({
  courses: state.courseReducer.courses
})

export default connect(mapStateToProps, {})(Courses)