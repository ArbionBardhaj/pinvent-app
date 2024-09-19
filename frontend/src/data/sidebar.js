import { FaTh, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";

const menu = [
  {
    title: "Dashbordi",
    icon: <FaTh />,
    path: "/dashboard",
  },
  {
    title: "Shto nje produkt",
    icon: <BiImageAdd />,
    path: "/add-product",
  },
  {
    title: "Llogaria",
    icon: <FaRegChartBar />,
    childrens: [
      {
        title: "Profili",
        path: "/profile",
      },
      {
        title: "Edito profilin",
        path: "/edit-profile",
      },
    ],
  },
  {
    title: "Raporto nje gabim",
    icon: <FaCommentAlt />,
    path: "/contact-us",
  },
];

export default menu;
