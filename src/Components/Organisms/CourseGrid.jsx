import React from 'react'
import CourseCard from '../Molecules/CourseCard'

const CourseGrid = ({courses}) =>(
    <div className="ed-grid m-grid-4">
        {courses.map (c => (
            <CourseCard
              key={c.id}
              id={c.id}
              title={c.title}
              image={c.image}
              price={c.price}
              profesor={c.profesor}
            />
          ))
        }
    </div>
)

export default (CourseGrid)