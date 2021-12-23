const theme = {
  colors: {
    black: '#000',
    white: '#fff',
    teal: '#48C9B0',
    navy: '#283747',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 40]
};

// TODO Is there a better way to do this?

theme.colors.primary = theme.colors.teal;
theme.colors.secondary = theme.colors.navy;
theme.colors.onPrimary = theme.colors.white;
theme.colors.onSecondary = theme.colors.white;

theme.space.small = theme.space[2];
theme.space.medium = theme.space[3];
theme.space.large = theme.space[4];

theme.fontSizes.body = theme.fontSizes[2];
theme.fontSizes.display = theme.fontSizes[5];

export default theme;