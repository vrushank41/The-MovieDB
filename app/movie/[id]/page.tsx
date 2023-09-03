export const dynamic="force-dynamic"

import React, { useState } from 'react'
import { db } from '../../db'
import { revalidatePath } from 'next/cache'
import { SubmitButton } from '../../components/SubmitButton'


async function getData(id:string){
  //get comments for the movie given by the users
  const data=await db.comment.findMany({
    where:{
      movieId:id
    },
    orderBy:{
      createdAt:"desc"
    },
  })
  return data
}

async function postData(formData:FormData) {
  "use server"
  const data=await db.comment.create({
    data:{
      message:formData.get("comment") as string,
      movieId:formData.get("id") as string
    }
  })

  revalidatePath("/movie/[id]")
}

const MovieID = async({params}:{params:{id:string}}) => {
  const data=await getData(params.id)
  return (
    <div className='rounded-lg border p-2 text-black w-full'>
      <h1 className='font-semibold text-xl m-4'>Your Opinion</h1>
      <div>
        <form action={postData}>
          <textarea placeholder="Add your comment" name="comment" id="comment" className='w-full border border-teal-500 rounded-lg p-2'>
          </textarea>
          <input type="hidden" value={params.id} name="id"/>
          <SubmitButton/>
        </form>
        <div className='mt-5 flex flex-col gap-y-3'>
          {data.map((post)=>(
            <div key={post.id}>
              <h1 className='font-semibold text-lg'>{post.message}</h1>
            </div> 
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieID