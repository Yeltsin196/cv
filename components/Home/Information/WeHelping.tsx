import { Icon } from "@/components/icon";
import { IconsLanding, ImagesLanding } from "@/consts";
import clsx from "clsx";
import React from "react";
import Styles from "./styles.module.scss";
export const WeHelping = () => {
  const characteristics = [
    {
      title: "Secure",
    },
    {
      title: "Confidential",
    },
    {
      title: "Less expensive",
    },
  ];
  return (
    <section className={clsx(Styles.paddingSection)}>
      <div
        className={clsx(
          "flex flex-col lg:flex-row  gap-y-7",
          Styles.gapContainer
        )}
      >
        <div className="flex-1 flex items-center justify-center">
          <img
            src={ImagesLanding.Image1}
            alt="Image"
            className={clsx(Styles.imgSize)}
          />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex flex-col gap-y-4">
            <p
              className={clsx(
                Styles.f40l,
                "text-primary font-bold leading-8 -tracking-custom"
              )}
            >
              How are we helping?
            </p>
            <p className="text-primary text-base leading-6 -tracking-custom">
              By helping you help. Warning Technologies is completely automatic,
              which makes us reduce both human error and maintenance cost. Our
              warnings are confidential yet not anonymous, which prevents false
              and malicious alarms
            </p>
          </div>
          <div className="mt-4">
            <ul className="flex flex-col gap-y-4">
              {characteristics.map((characteristic, index) => (
                <li key={index} className=" flex flex-row gap-x-2">
                  <Icon src={IconsLanding.IconCheck}></Icon>
                  <p className="text-primary text-base leading-6 -tracking-custom">
                    {characteristic.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
