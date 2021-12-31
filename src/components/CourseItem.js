import React from 'react'
import { useParams } from 'react-router-dom'

export default function CourseItem() {
    const {course}=useParams();

    return (
        <div>
            {course}
        </div>
    )
}
