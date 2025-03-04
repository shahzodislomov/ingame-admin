import React from "react";

const page = () => {
  const types = [
    "desktops", "monitors", "tables", "armchairs", "keyboards", "mouses", "headsets",
    "accessories", "video_cards", "motherboard", "cpu", "ram", "ssd", "hdd", "cases",
    "power_unit", "cooling", "psu", "M2nvme 256gb", "ssd M2 512GB", "carpet"
  ];

  return (
    <div className="p-4 text-white">
      <h2 className="text-xl font-bold mb-4">Список</h2>
      <table className="w-2/3 mx-auto border border-gray-300">
        <thead className="text-black">
          <tr className="bg-gray-100">
            <th className="border-gray-300 p-2 text-left">Type</th>
            <th className="border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {types.map((type, index) => (
            <tr key={index} className="border border-gray-300">
              <td className="p-2 border-gray-300">{type}</td>
              <td className="p-2 border-gray-300 text-center">⋮</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
