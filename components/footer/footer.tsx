import { SocialIcons } from "@/consts";
import clsx from "clsx";
import React from "react";
import { Button } from "../common/Button";
import { Icon } from "../icon";
import Styles from "./styles.module.scss";

export const Footer = () => {
  const ArrayItems = [
    {
      title: "Why us",
      url: "",
    },
    {
      title: "Resources",
      url: "",
    },
    {
      title: "Our story",
      url: "our-history",
    },
    {
      title: "Contact us",
      url: "",
    },
    {
      title: "Send warning",
      url: "",
    },
    {
      title: "Getting started",
      url: "",
    },
  ];

  const SocialIconsArray = [
    {
      icon: SocialIcons.Instagram,
    },
    {
      icon: SocialIcons.Facebook,
    },
    {
      icon: SocialIcons.Twitter,
    },
  ];

  return (
    <footer className={clsx(Styles.paddingContainer)}>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-10">
        <div>
          <p className="text-primary text-base font-medium">LOGO</p>
        </div>
        <div className="flex flex-col text-center gap-y-5 lg:flex-row gap-x-6 order-2 lg:order-1">
          {ArrayItems.map((item, index) => {
            return (
              <Button
                key={index}
                className="text-primary tracking-small text-base font-medium"
                href={item.url}
              >
                {" "}
                {item.title}{" "}
              </Button>
            );
          })}
        </div>
        <div className="flex gap-x-3 order-1 lg:order-2">
          {SocialIconsArray.map((item, index) => (
            <div key={index}>
              <Icon src={item.icon}></Icon>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-y-5 gap-x-4 pt-10 lg:pt-11">
        <div className="text-center mt-0.5">
          <p className="text-sm text-primary ">
            © 2022 Warning Technologies. All right reserved.
          </p>
        </div>
        <Button className="text-sm text-primary ">Privacy Policy</Button>
        <Button className="text-sm text-primary ">Terms of Service</Button>
      </div>
    </footer>
  );
};
