'use client'

import React, { FC, ReactNode } from 'react'

interface ModalProps {
  isOpen: boolean,
  onClose: () => void,
  children: ReactNode
}
const Modal: FC<ModalProps> = ({isOpen,onClose,children}) => {
  if(!isOpen) return null
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button
          className="absolute bottom-1 right-2 bg-red-500 text-white px-4 py-1 rounded-full hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
