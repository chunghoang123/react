import React from 'react'
import { Link    } from 'react-router-dom'


export default function HomePage() {
  return (
    <div>
        <nav>
            <Link to = "/register"> </Link>
            <Link to = "/login"> </Link>

        </nav>
      
    </div>
  )
}
