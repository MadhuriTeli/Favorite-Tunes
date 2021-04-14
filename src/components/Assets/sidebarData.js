import React from "react";
import { FaHeadphones, FaRegPlayCircle } from "react-icons/fa";

import { AiOutlineSearch } from "react-icons/ai";

import { MdFavorite } from "react-icons/md";
import { RiBarChartHorizontalFill } from "react-icons/ri";

export const links = [
  {
    id: 1,
    url: "/",
    text: "Discover",
    icon: <FaHeadphones />,
  },
  {
    id: 2,
    url: "/search",
    text: "Search",
    icon: <AiOutlineSearch />,
  },
  {
    id: 3,
    url: "/favorites",
    text: "Favorites",
    icon: <MdFavorite />,
  },
  {
    id: 4,
    url: "/playlists",
    text: "Playlists",
    icon: <FaRegPlayCircle />,
  },
  {
    id: 5,
    url: "/charts",
    text: "Charts",
    icon: <RiBarChartHorizontalFill />,
  },
];
