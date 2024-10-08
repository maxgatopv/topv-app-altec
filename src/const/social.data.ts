import {
    faFacebook,
    faInstagram,
    faLine,
    faXTwitter,
    faYoutube,
  } from "@fortawesome/free-brands-svg-icons";
  import {
    FOLLOW_FACEBOOK_ROUTE_PATH,
    FOLLOW_LINE_ROUTE_PATH,
    FOLLOW_YOUTUBE_ROUTE_PATH,
    FOLLOW_INSTAGRAM_ROUTE_PATH,
    FOLLOW_X_ROUTE_PATH,
  } from "@/const/route-paths.const";

export const socialData = [
    {
      name: "Facebook",
      path: FOLLOW_FACEBOOK_ROUTE_PATH,
      icon: faFacebook,
    },
    {
      name: "Line",
      path: FOLLOW_LINE_ROUTE_PATH,
      icon: faLine,
    },
    {
      name: "Youtube",
      path: FOLLOW_YOUTUBE_ROUTE_PATH,
      icon: faYoutube,
    },
    {
      name: "Instagram",
      path: FOLLOW_INSTAGRAM_ROUTE_PATH,
      icon: faInstagram,
    },
    {
      name: "X",
      path: FOLLOW_X_ROUTE_PATH,
      icon: faXTwitter,
    },
  ];
