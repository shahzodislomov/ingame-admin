'use client'

import React, { useState } from 'react'

const NotificationPage = () => {
     const [notifications, setNotifications] = useState([
          { id: 1, title: 'New Comment', message: 'You have a new comment on your post.', time: '2 mins ago' },
          { id: 2, title: 'Friend Request', message: 'John Doe sent you a friend request.', time: '10 mins ago' },
          { id: 3, title: 'Update Available', message: 'A new update is available for your app.', time: '1 hour ago' },
     ])

     const handleDismiss = (id) => {
          setNotifications(notifications.filter((notification) => notification.id !== id))
     }

     return (
          <div className=" bg-slate-900 text-white min-h-screen">
               <div className="shadow-lg p-6">
                    <h1 className="text-2xl font-bold text-white mb-4">Notifications</h1>
                    {notifications.length > 0 ? (
                         <ul className="space-y-4">
                              {notifications.map((notification) => (
                                   <li
                                        key={notification.id}
                                        className="flex justify-between items-start bg-slate-800  rounded-lg p-4 "
                                   >
                                        <div>
                                             <h2 className="text-lg font-semibold text-white">{notification.title}</h2>
                                             <p className="text-gray-600 text-sm">{notification.message}</p>
                                             <p className="text-gray-400 text-xs mt-1">{notification.time}</p>
                                        </div>

                                        <button
                                             onClick={() => handleDismiss(notification.id)}
                                             className="text-red-500 hover:text-red-700 font-bold text-sm"
                                        >
                                             Dismiss
                                        </button>
                                   </li>
                              ))}
                         </ul>
                    ) : (
                         <p className="text-gray-500 text-center">You have no new notifications.</p>
                    )}
               </div>
          </div>
     )
}

export default NotificationPage
