'use client'

import React, { useState } from 'react'

const CreateProductPage = () => {
     const [title, setTitle] = useState('')
     const [description, setDescription] = useState('')
     const [totalProducts, setTotalProducts] = useState('')
     const [price, setPrice] = useState('')
     const [productImage, setProductImage] = useState(null)

     const handleImageChange = (e) => {
          const file = e.target.files[0]
          if (file) {
               setProductImage(URL.createObjectURL(file))
          }
     }

     const handleSubmit = (e) => {
          e.preventDefault()
          console.log({
               title,
               description,
               totalProducts,
               price,
               productImage,
          })
     }

     return (
          <div className="h-screen bg-slate-900 text-white p-6">
               <h1 className="text-3xl font-bold mb-6">Create New Product</h1>

               <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Title */}
                    <div>
                         <label className="block text-lg font-semibold" htmlFor="title">
                              Product Title
                         </label>
                         <input
                              type="text"
                              id="title"
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                              className="w-full p-3 bg-slate-800 text-white rounded-lg"
                              placeholder="Enter product title"
                              required
                         />
                    </div>

                    {/* Description */}
                    <div>
                         <label className="block text-lg font-semibold" htmlFor="description">
                              Product Description
                         </label>
                         <textarea
                              id="description"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              className="w-full p-3 bg-slate-800 text-white rounded-lg"
                              placeholder="Enter product description"
                              required
                         />
                    </div>

                    {/* Total Products */}
                    <div>
                         <label className="block text-lg font-semibold" htmlFor="totalProducts">
                              Total Products
                         </label>
                         <input
                              type="number"
                              id="totalProducts"
                              value={totalProducts}
                              onChange={(e) => setTotalProducts(e.target.value)}
                              className="w-full p-3 bg-slate-800 text-white rounded-lg"
                              placeholder="Enter total products available"
                              required
                         />
                    </div>

                    {/* Price */}
                    <div>
                         <label className="block text-lg font-semibold" htmlFor="price">
                              Product Price ($)
                         </label>
                         <input
                              type="number"
                              id="price"
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                              className="w-full p-3 bg-slate-800 text-white rounded-lg"
                              placeholder="Enter product price"
                              required
                         />
                    </div>

                    {/* Image Upload */}
                    <div>
                         <label className="block text-lg font-semibold" htmlFor="productImage">
                              Product Image
                         </label>
                         <input
                              type="file"
                              id="productImage"
                              onChange={handleImageChange}
                              className="w-full p-3 bg-slate-800 text-white rounded-lg"
                              accept="image/*"
                         />
                         {productImage && (
                              <div className="mt-4">
                                   <img src={productImage} alt="Product" className="w-32 h-32 object-cover rounded-lg" />
                              </div>
                         )}
                    </div>

                    {/* Submit Button */}
                    <button
                         type="submit"
                         className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
                    >
                         Create Product
                    </button>
               </form>
          </div>
     )
}

export default CreateProductPage
