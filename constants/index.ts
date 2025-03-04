import { IoHomeOutline } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
import { GiHanger } from "react-icons/gi";
import { BsTypeUnderline } from "react-icons/bs";
import { FaCirclePlus } from "react-icons/fa6";

export const navigations = [
     {
          title: "Dashboard",
          link: '',
          icon: IoHomeOutline
     },
     {
          title: "Orders",
          link: 'orders',
          icon: FaCartArrowDown
     },
     {
          title: "Applications",
          link: 'applications',
          icon: IoBagHandleSharp
     },
     {
          title: "create Product",
          link: 'create-product',
          icon: GiHanger
     },
     {
          title: "Product List",
          link: 'product-list',
          icon: GiHanger
     },
     {
          title: "Product type",
          link: 'product-type',
          icon: BsTypeUnderline
     },
     {
          title: "Create product type",
          link: 'create-product-type',
          icon: FaCirclePlus
     },
]