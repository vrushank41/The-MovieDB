'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
import "./error.css"
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div  className='flex justify-center items-center mt-auto relative'>
    <div class="🤚">
	  <div class="👉"></div>
    <div class="👉"></div>
    <div class="👉"></div>
    <div class="👉"></div>
    <div class="🌴"></div>		
    <div class="👍"></div>
    </div>
</div>
  )
}