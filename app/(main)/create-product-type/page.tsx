import React from 'react';

const Page = () => {
  return (
    <div className="flex flex-col max-w-2xl mx-auto mt-10 p-4 bg-transparent min-h-screen">
      <h1 className="font-semibold text-3xl text-white mb-6">Create New Type</h1>
      
      <div className="flex flex-col space-y-2">
        <span className="font-bold text-2xl">Detail</span>
        <p className="text-gray-400 text-sm">Name</p>
        <input
          type="text"
          placeholder="Product type"
          className="p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-500"
        />
      </div> 
      <button className="mt-4 py-2 w-full bg-white text-gray-900 font-medium rounded-md hover:bg-gray-200 transition">
        Save
      </button>
    </div>
  );
};

export default Page;
