const size = {
  smallMobile: 350,
  mobile: 768,
};

export const theme = {
  color: {
    PRIMARY: '#5974FF',
    BLACK: '#2D2D2D',
    GRAY: '#585858',
    WHITE: '#FFFFFF',
    INPUT_GRAY: '#D8D8D8',
    BG_GRAY: '#E5E5E5'
  },
  window: {
    smallMobile: `@media screen and (max-width: ${size.smallMobile}px)`,
    mobile: `@media screen and (max-width: ${size.mobile}px)`,
  }
}

