"use client" //Hydrates the content on the client but on server it is loaded
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

import React from 'react'

export const SubmitButton = () => {
    const {pending}=useFormStatus()
  return (
    <button type="submit" className='bg-teal-500 px-4 py-2 rounded-lg text-white disabled:bg-teal-800 disabled:cursor-not-allowed' disabled={pending}>
        {pending? <>Loading..</> : <>Add Comment</>}
    </button>
  )
}
