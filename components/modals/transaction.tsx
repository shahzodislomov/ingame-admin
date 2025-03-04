'use client';

import React, { useState } from 'react';

interface Transaction {
     id: string;
     amount: number;
     date: string;
     status: string;
     description: string;
}

export const ViewTransactionModal: React.FC<{ transaction: Transaction; onClose: () => void }> = ({
     transaction,
     onClose,
}) => {
     return (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
               <div className="bg-white rounded-lg w-full max-w-lg p-6 shadow-lg">
                    <h2 className="text-xl font-bold mb-4">Transaction Details</h2>
                    <ul className="space-y-2 text-gray-700">
                         <li>
                              <strong>ID:</strong> {transaction.id}
                         </li>
                         <li>
                              <strong>Amount:</strong> ${transaction.amount.toFixed(2)}
                         </li>
                         <li>
                              <strong>Date:</strong> {transaction.date}
                         </li>
                         <li>
                              <strong>Status:</strong> {transaction.status}
                         </li>
                         <li>
                              <strong>Description:</strong> {transaction.description}
                         </li>
                    </ul>
                    <button
                         onClick={onClose}
                         className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
                    >
                         Close
                    </button>
               </div>
          </div>
     );
};