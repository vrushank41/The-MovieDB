import React from 'react'
import "./style.css"


const page = async () => {
  const res=await fetch('https://64a9a34a8b9afaf4844af067.mockapi.io/api/v1/products',{
        cache:'no-cache',
    })

    const data=await res.json()


    return (
      <div className='flex flex-col w-auto items-center justify-center'>
          <h1 className='text-3xl font-bold text-center'>Product warehouse</h1>
          <form action={""} className="flex flex-col m-2 p-2">
              <section>
                  <label for="product" className="text-2xl text-teal-200">Product</label>
                  <input type="text" name="product" id="product" className="border-gray-300 rounded-md p-2 text-black text-2xl m-2" />
              </section>
              <section>
                  <label for="description" className="text-2xl text-teal-200">Description</label>
                  <input type="text" name="description" id="description" className="border-gray-300 rounded-md p-2 text-black text-2xl m-2" />
              </section>
              <button className="border-gray-400 bg-green-900 rounded-2xl inline-flex items-center justify-center p-4 hover:bg-green-500">
                  Add Product
              </button>
          </form>
          <h2 className='font-bold text-4xl p-5'>List of products from mockapi(FAker.js)</h2>
          <section className='flex flex-wrap gap-5 max-w-screen m-5 justify-center'>
              {data.map((item)=>(
                  <div key={item.id} className='p-5 shadow border-gray-600 max-w-xs bg-green-800 rounded-md '>
                      <p className='font-semibold text-3xl text-white py-5'>{item.product}</p>
                      <p className='font-md text-sm'>{item.description}</p>
                  </div>
              ))}
          </section>
      </div>
      )
}

export default page