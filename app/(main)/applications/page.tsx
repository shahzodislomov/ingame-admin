"use client";

import Modal from "@/components/modal";
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
import { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";


const page = () => {
  const [modalisOpen, setModalisOpen] = useState(false);
  const [cDate, setCdate] = useState<null | string>(null)
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

useEffect(() => {
  const time = new Date()
  const dataDate = time.toLocaleDateString()
  setCdate(dataDate)
},[])

if(!cDate) return null

  return (
    <div className="max-w-7xl mx-auto mt-10 p-4 bg-transparent min-h-screen">
      <h1 className="font-bold text-2xl mb-10 text-white ml-5">SPISOK</h1>
      <Table className="w-full border border-gray-300 shadow-md rounded-lg overflow-hidden">
        <TableHeader className="bg-gray-100">
          <TableRow className="text-gray-700 text-sm">
            <TableHead className="p-3">Klient Ismi</TableHead>
            <TableHead className="p-3">Telefon</TableHead>
            <TableHead className="p-3">zavayka kuni</TableHead>
            <TableHead className="p-3 text-center">Status</TableHead>
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
              <TableCell className="p-3 font-medium">{invoice.name}</TableCell>
              <TableCell className="p-3">{invoice.number}</TableCell>
              <TableCell className="p-3">{invoice.sentTime}</TableCell>
              <TableCell className="p-3 text-center">
              <span
    className={`px-3 py-1 text-xs font-semibold ${
      invoice.status !== "new" ? "bg-slate-500 text-white" : "text-green-700 bg-green-200"
    } rounded-full`}
  >
    {invoice.status}
  </span>
              </TableCell>
              <TableCell className="p-3 text-right">
                <button
                  className="p-2 rounded-md hover:bg-gray-300 transition"
                  onClick={() => setModalisOpen(!modalisOpen)}
                >
                  <BsThreeDotsVertical className="text-gray-600" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {modalisOpen ? (
        <Modal
          isOpen={modalisOpen}
          onClose={() => setModalisOpen(!modalisOpen)}
        >
          <div className="flex flex-col">
            <p className="text-xl font-semibold mb-6">Howard Sharpe</p>
            <span className="font-bold">Customer Name: {"howard"}</span>
            <span className="font-bold">Customer Phone Number: {99999}</span>
            <span className="font-bold">submission time: {cDate}</span>
            <span className="font-bold">Update time: {cDate}</span>
            <span className="font-bold">Operator comment: {0}</span>
            <div className="mb-3">
  <label htmlFor="status" className="block text-sm font-medium text-gray-300 mb-1">
    Status
  </label>
  <select
    id="status"
    className="w-full mb-10 px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
    defaultValue="new"
  >
    <option value="new">New</option>
    <option value="process">Process</option>
    <option value="finished">Finished</option>
  </select>
</div>

          </div>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};

export default page;
