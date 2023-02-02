import clsx from 'clsx';
import React from 'react';
import { Button } from '../../common/Button';
import Styles from './styles.module.scss';
export const MainContainerHome = () => {
  return (
    <div className={clsx(Styles.paddingSection)}>
      <div className="text-center flex flex-col gap-y-6">
        <h1
          className={clsx(
            'text-primary font-bold -tracking-custom',
            Styles.f56l
          )}
        >
          Secure, reliable & confidential. Be in control.
        </h1>
        <p className="text-primary text-xl px-10">
          We are the only highly configurable cloud based communication platform
          that enables users to send confidential warnings automatically to the
          right people for schools and their students
        </p>
      </div>
      <div
        className={clsx(
          'flex justify-between mt-10',
          Styles.paddingButtonsContainer
        )}
      >
        <Button ButtonStyle="secondary" ButtonPaddingSize="medium">
          Collaborate
        </Button>
        <Button ButtonStyle="primary" ButtonPaddingSize="medium">
          Know more
        </Button>
      </div>
    </div>
  );
};
