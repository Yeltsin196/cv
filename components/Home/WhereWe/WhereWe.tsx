import clsx from "clsx";
import React from "react";
import Styles from "./styles.module.scss";
import { IconsArrows, ImagesLanding } from "@/consts";
import { Button } from "@/components/common/Button";
import { Icon } from "@/components/icon";
export const WhereWe = () => {
  return (
    <section className={clsx(Styles.paddingSection)}>
      <div className="flex flex-col lg:flex-row gap-x-8 gap-y-5">
        <div className="flex-1 flex flex-col gap-y-4   text-center lg:text-left">
          <p className="text-primary text-lg leading-7 font-bold">
            Where we are
          </p>
          <p className="text-primary text-base leading-6 font-normal tracking-small">
            We are living in an era of increasing social issues and violence in
            both private and public schools
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button className="flex items-center gap-x-2  ">
              <div>
                <p className=" text-primary font-medium text-base tracking-small">
                  Read more
                </p>
              </div>
              <div>
                <Icon src={IconsArrows.ArrowRight}></Icon>
              </div>
            </Button>
          </div>
        </div>
        <div className="">
          <div className="lg:pt-28 flex justify-center">
            <img
              src={ImagesLanding.ImageArrowRightDrawn}
              alt="ImageArrowRightDrawn"
              className={clsx("hidden lg:block", Styles.ImgSize)}
            />
            <img
              src={ImagesLanding.ImageArrowDownDrawn}
              alt="ImageArrowRightDrawn"
              className={clsx("block lg:hidden", Styles.ImgSize)}
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-y-4 lg:pt-24 text-center lg:text-left">
          <p className="text-primary text-lg leading-7 font-bold">
            Where we want to be
          </p>
          <p className="text-primary text-base leading-6 font-normal tracking-small">
            We want protected schools, safe students, unconcerned parents. We
            want you to be a part
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button className="flex items-center gap-x-2 ">
              <div>
                <p className=" text-primary font-medium text-base tracking-small">
                  Read more
                </p>
              </div>
              <div>
                <Icon src={IconsArrows.ArrowRight}></Icon>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
