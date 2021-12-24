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

const radii = [2, 4, 8];
radii.small = radii[0];
radii.medium = radii[1];
radii.large = radii[2];

const breakpoints = ['40em', '52em', '64em', '80em']

breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

const theme = {
  breakpoints,
  colors,
  fontSizes,
  radii,
  space,
  fontFamily: 'Sans-Serif'
};

export default theme;