import { Button } from "@/components/common/Button";
import { Icon } from "@/components/icon";
import { IconsArrows, ImagenOurHistory } from "@/consts";
import clsx from "clsx";
import React from "react";
import Styles from "./styles.module.scss";
export const SchooSafety = () => {
  return (
    <section className={clsx(Styles.paddingSection, "bg-light-blue")}>
      <div
        className={clsx(
          "flex flex-col items-center gap-y-7 lg:flex-row ",
          Styles.gapContainer
        )}
      >
        <div className="flex-1">
          <img src={ImagenOurHistory.Imagen1} alt="" />
        </div>
        <div className="flex-1 flex flex-col justify-center gap-y-6">
          <h1
            className={clsx(
              Styles.f56l,
              "text-primary font-bold -tracking-custom"
            )}
          >
            School safety is first for us.
          </h1>
          <p className="text-primary font-normal text-base lg:text-lg">
            We have a public commitment to student safety in schools. We seek to
            take preventive actions and avoid incidents of all kinds.
          </p>
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
    </section>
  );
};
