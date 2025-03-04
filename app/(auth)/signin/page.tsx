'use client'

import { useSignInStore } from '@/hooks/use-auth'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { backend } from '@/http/api'

const SignInPage = () => {
     const [error, setError] = useState<null | string>(null)
     const { email, password, setEmail, setPassword } = useSignInStore()
     const router = useRouter()

     const handleSubmit = async (e: React.FormEvent) => {}
     return (
          <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
               <div className="w-full max-w-sm p-6 bg-gray-800 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold text-center mb-6">Admin Anor Market</h1>
                    {error ? <p className='font-bold text-lg text-red-600'>{error}</p> : null}
                    <form onSubmit={handleSubmit} className="space-y-4">
                         <div>
                              <label className="block text-sm font-medium mb-1">Email</label>
                              <input
                                   type="email"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                                   placeholder="Enter your email"
                                   required
                              />
                         </div>
                         <div>
                              <label className="block text-sm font-medium mb-1">Password</label>
                              <input
                                   type="password"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                                   className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                                   placeholder="Enter your password"
                                   required
                              />
                         </div>
                         <button
                              type="submit"
                              className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                         >
                              Sign In
                         </button>
                    </form>
               </div>
          </div>
     )
}

export default SignInPage
