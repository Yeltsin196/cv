import { Button } from "@/components/common/Button";
import { Icon } from "@/components/icon";
import { IconsArrows } from "@/consts";
import clsx from "clsx";
import React from "react";
import Styles from "./styles.module.scss";
export const AvailableGlobally = () => {
  return (
    <section className={clsx(Styles.paddingSection)}>
      <div className="flex flex-col gap-y-6">
        <div className="text-center">
          <p className="text-primary text-2xl font-bold leading-8">
            Available globally, configurable locally. <br /> Tell the right
            people at the right time
          </p>
        </div>
        <div className="flex justify-center">
          <Button className="flex items-center gap-x-2 ">
            <div>
              <p className=" text-primary font-medium text-base tracking-small">
                Take action today
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
