import { useLayoutEffect } from 'react';
import theme from '../styles/theme';
import useWindowSize from './useWindowSize';

const useRemoveElement = (ids, device) => {
  const [width] = useWindowSize();

  const removeElements = () => {
    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        element.remove();
      }
    });
  };
  useLayoutEffect(() => {
    switch (device) {
      case 'desktop':
        if (width >= theme.mediaQueries.desktopPixel) {
          removeElements();
        }
        break;
      case 'tablet':
        if (width < theme.mediaQueries.desktopPixel && width > theme.mediaQueries.mobilePixel) {
          removeElements();
        }
        break;
      case 'mobile':
        if (width <= theme.mediaQueries.mobilePixel) {
          removeElements();
        }
        break;
      default:
        break;
    }
  }, [width]);
};
export default useRemoveElement;
