import { useEffect, useRef } from 'react';

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

type BeforeunloadHandler = (e: BeforeUnloadEvent) => void;

export const useBeforeUnload = (handler: BeforeunloadHandler) => {
  const eventListenerRef = useRef<BeforeunloadHandler | undefined>();

  useIsomorphicLayoutEffect(() => {
    eventListenerRef.current = (event) => {
      const returnValue = handler?.(event);
      // Handle legacy `event.returnValue` property
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event
      if (typeof returnValue === 'string') {
        // eslint-disable-next-line no-param-reassign
        event.returnValue = returnValue;
        return returnValue;
      }
      // Chrome doesn't support `event.preventDefault()` on `BeforeUnloadEvent`,
      // instead it requires `event.returnValue` to be set
      // https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeunload#browser_compatibility
      if (event.defaultPrevented) {
        // eslint-disable-next-line no-param-reassign
        event.returnValue = '';
        return '';
      }
    };
  }, [handler]);

  useEffect(() => {
    const eventListener = (event: BeforeUnloadEvent) => eventListenerRef.current?.(event);
    window.addEventListener('beforeunload', eventListener);
    return () => {
      window.removeEventListener('beforeunload', eventListener);
    };
  }, []);
};
