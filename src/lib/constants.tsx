import { Icon } from "@iconify/react";

import { NavItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
  {
    title: "Home",
    path: "/",
    icon: <Icon icon="mdi-light:home" />,
    key: "home",
  },
  {
    title: "Our Story",
    path: "/story",
    icon: <Icon icon="mdi-light:home" />,
    key: "story",
  },
  {
    title: "The Wedding",
    path: "/wedding",
    icon: <Icon icon="mdi-light:home" />,
    key: "wedding",
  },
  {
    title: "Gallery",
    path: "/gallery",
    icon: <Icon icon="mdi-light:home" />,
    key: "gallery",
  },
  {
    title: "Guest Book",
    path: "/guestbook",
    icon: <Icon icon="mdi-light:home" />,
    key: "guestbook",
  },
  {
    title: "Blog",
    path: "/blog",
    icon: <Icon icon="mdi-light:home" />,
    key: "blog",
  },
];
