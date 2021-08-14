import React from 'react'
import {Link} from 'react-router-dom'

export default function Error() {
  return (
    <div class="basic-info">
      <h1>Error Page: 404</h1>
      <h3>Page not found</h3>
      <Link className="btn" to={'/'}>Go back</Link>
    </div>
  )
}
