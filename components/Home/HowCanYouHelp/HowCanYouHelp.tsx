import clsx from "clsx";
import React from "react";
import Styles from "./styles.module.scss";
export const HowCanYouHelp = () => {
  return (
    <section className={clsx(Styles.paddingContainer)}>
      <div className="text-center flex flex-col gap-y-3">
        <p className={clsx("text-primary text-base -tracking-custom")}>
          We give you the tools. You make the difference.
        </p>
        <p
          className={clsx(
            Styles.f40l,
            "text-primary -tracking-medium font-bold leading-10"
          )}
        >
          How can you help too?
        </p>
      </div>
      <div className="text-center mt-[40px]">
        <p className="tracking-custom text-primary text-base leading-6">
          Student's safety is first, and together we can achieve it. Schools
          need to get ahead of the problem and prevent it. How? By getting
          everyone involved. Students can help their friends by reporting a
          range of problems that can affect individual student safety,
          well-being, or school disorder. Parents can let the school know when
          they think their kids might be, for example, suffering from bullying
        </p>
      </div>
    </section>
  );
};
