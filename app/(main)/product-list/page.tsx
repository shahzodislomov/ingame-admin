"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaTrashAlt,FaPen,FaEye} from "react-icons/fa";

const page = () => {
  const [cDate, setCdate] = useState<null | string>(null);
  const [toggle, setToggle] = useState<number | null>(null);
  const deleteRedBtn = (item: string) => (item === "delete" ? "text-red-600 font-bold" : "");
  const invoices = [
    {
      name: "Jane Doe",
      number: 2734657,
      status: "new",
      sentTime: cDate,
    },
    {
      name: "Zhu Yuan",
      number: 2673884567,
      status: "new",
      sentTime: cDate,
    },
    {
      name: "Billie",
      number: 2334875,
      status: "finished",
      sentTime: cDate,
    },
    {
      name: "Wise",
      number: 229874,
      status: "new",
      sentTime: cDate,
    },
    {
      name: "Nagataro",
      number: 28738486,
      status: "new",
      sentTime: cDate,
    },
    {
      name: "Ellen Joe",
      number: 287346,
      status: "new",
      sentTime: cDate,
    },
  ];

  const data = [
    {
      title: "delete",
      icon: FaTrashAlt,
    },
    {
      title: "edit",
      icon: FaPen,
    },
    {
      title: "view",
      icon: FaEye,
    },
  ];

  useEffect(() => {
    const time = new Date();
    const dataDate = time.toLocaleDateString();
    setCdate(dataDate);
  }, []);

  if (!cDate) return null;

  return (
    <div className="max-w-7xl mx-auto mt-10 p-4 bg-transparent min-h-screen">
      <h1 className="font-bold text-2xl mb-10 text-white ml-5">SPISOK</h1>
      <Table className="w-full border border-gray-300 shadow-md rounded-lg overflow-hidden table-fixed" onBlur={() => setTimeout(() => setToggle(null),100)}>
        <TableHeader className="bg-gray-100">
          <TableRow className="text-gray-700 text-sm">
            <TableHead className="p-3">Rasm</TableHead>
            <TableHead className="p-3">ismi</TableHead>
            <TableHead className="p-3">price</TableHead>
            <TableHead className="p-3 text-center">Category</TableHead>
            <TableHead className="p-3 text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice, index) => (
            <TableRow
              key={invoice.name}
              className={`text-gray-800 text-sm ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-200`}
            >
              <TableCell className="p-3 font-medium">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUeK-QmUmDSlVVFSjDINa65_l9J763NEDAGw&s"
                  alt="pc pic"
                  width={100}
                  height={100}
                />
              </TableCell>
              <TableCell className="p-3 font-medium">{invoice.name}</TableCell>
              <TableCell className="p-3">{invoice.number}</TableCell>
              <TableCell className="p-3">Uzs{invoice.sentTime}/Usd</TableCell>
              <TableCell className="p-3 text-right ">
                <button
                  className="p-2 rounded-md hover:bg-gray-300 transition"
                  onClick={() => setToggle(toggle === index ? null : index)}
                >
                  <BsThreeDotsVertical className="text-gray-600" />
                </button>
              {toggle === index && (
                         <div className="absolute mt-[-80px] right-10 bg-white shadow-lg rounded-md p-2 w-28">
                           {data.map((item, i) => (
                            <div key={i} className={`${deleteRedBtn(item.title)}`}>
                             <button                            
                               className="flex items-center w-full p-2 text-sm hover:bg-gray-100"
                               >
                               <item.icon className={`${deleteRedBtn(item.title)} mr-2 text-gray-600`} />
                               {item.title}
                             </button>
                               </div>
                           ))}
                         </div>
                       )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default page;
