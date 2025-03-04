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
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const invoices = [
  {
    name: "Jane Doe",
    number: 2734657,
    status: "new",
    quantity: 1,
  },
  {
    name: "Zhu Yuan",
    number: 2673884567,
    status: "new",
    quantity: 1,
  },
  {
    name: "Billie",
    number: 2334875,
    status: "new",
    quantity: 1,
  },
  {
    name: "Wise",
    number: 229874,
    status: "new",
    quantity: 16,
  },
  {
    name: "Nagataro",
    number: 28738486,
    status: "new",
    quantity: 1,
  },
  {
    name: "Ellen Joe",
    number: 287346,
    status: "new",
    quantity: 1,
  },
];

const page = () => {
  const [modalisOpen, setModalisOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto mt-10 p-4 bg-transparent min-h-screen">
      <h1 className="font-bold text-2xl mb-10 text-white ml-5">SPISOK</h1>
      <Table className="w-full border border-gray-300 shadow-md rounded-lg overflow-hidden">
        <TableHeader className="bg-gray-100">
          <TableRow className="text-gray-700 text-sm">
            <TableHead className="p-3">Klient Ismi</TableHead>
            <TableHead className="p-3">Telefon</TableHead>
            <TableHead className="p-3">Product Soni</TableHead>
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
              <TableCell className="p-3">{invoice.quantity}</TableCell>
              <TableCell className="p-3 text-center">
                <span className="px-3 py-1 text-xs font-semibold text-green-700 bg-green-200 rounded-full">
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
            <span className="font-bold">Customer Address: {"Tashkent"}</span>
            <span className="font-bold">Customer Comment: {"weeqee"}</span>
            <span className="font-bold">
              Delivery Method: {"Yetkazib berish/Dostavka"}
            </span>
            <span className="font-bold">Delivery Price: {"100,000"}</span>
            <span className="font-bold">
              Product Name 1: {"MSI 2K 180Hz Monitor"}
            </span>
            <span className="font-bold">Product Count: {1}</span>
            <p className="font-bold m-3">Credit Name: {"tenge market"}</p>
            <p className="font-bold m-3">Credit term: {"12 months"}</p>
            <ul className="ml-5">
              <li className="font-bold m-3">Per Month:</li>
              <li className="list-disc ml-10">USD: $</li>
              <li className="list-disc ml-10">UZS:</li>
            </ul>
          </div>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};

export default page;
