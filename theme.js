const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
space.small = space[2];
space.medium = space[3];
space.large = space[4];

const colors = {
  black: '#000',
  white: '#fff',
  teal: '#48C9B0',
  navy: '#283747',
}
colors.primary = colors.teal;
colors.secondary = colors.navy;
colors.onPrimary = colors.white;
colors.onSecondary = colors.white;

const fontSizes = [12, 14, 16, 20, 24, 32, 40];
fontSizes.body = fontSizes[2];
fontSizes.display = fontSizes[5];

const theme = {
  colors,
  fontSizes,
  space,
};

export default theme;