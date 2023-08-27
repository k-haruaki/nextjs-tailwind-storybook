import primitiveColors from './primitiveColors';

const text = {
  light: {
    body: primitiveColors.sumi[900],
    description: primitiveColors.sumi[700],
    placeHolder: primitiveColors.sumi[600],
    onFill: primitiveColors.white[1000],
    link: primitiveColors.sea[800],
    hover: primitiveColors.sea[900],
    active: primitiveColors.sea[900],
    visited: primitiveColors.sea[900],
    alert: primitiveColors.sun[800],
    disabled: primitiveColors.sumi[500],
  },
  dark: {
    body: primitiveColors.white[1000],
    description: primitiveColors.sumi[400],
    placeHolder: primitiveColors.sumi[500],
    onFill: primitiveColors.white[1000],
    link: primitiveColors.sea[300],
    hover: primitiveColors.sea[200],
    active: primitiveColors.sea[200],
    visited: primitiveColors.sea[200],
    alert: primitiveColors.sun[500],
    disabled: primitiveColors.sumi[600],
  },
};

const icon = {
  light: {
    label: primitiveColors.sumi[900],
    active: primitiveColors.sea[800],
    alert: primitiveColors.sun[800],
    disabled: primitiveColors.sumi[500],
  },
  dark: {
    label: primitiveColors.white[1000],
    active: primitiveColors.sea[300],
    alert: primitiveColors.sun[400],
    disabled: primitiveColors.sumi[600],
  },
};

const button = {
  light: {
    normal: primitiveColors.sea[800],
    hover: primitiveColors.sea[800], // Todo:透過の設定が必要
    active: primitiveColors.sea[800], // Todo:透過の設定が必要
    disabledBg: primitiveColors.sumi[500],
  },
  dark: {
    normal: primitiveColors.sea[300],
    hover: primitiveColors.sea[300], // Todo:透過の設定が必要
    active: primitiveColors.sea[300], // Todo:透過の設定が必要
    disabledBg: primitiveColors.sumi[500],
  },
};

const background = {
  light: {
    primary: primitiveColors.white[1000],
    secondary: primitiveColors.sumi[100],
    tertiary: primitiveColors.sumi[50],
  },
  dark: {
    primary: primitiveColors.sumi[900],
    secondary: primitiveColors.sumi[700],
    tertiary: primitiveColors.sumi[800],
  },
};

const border = {
  // Todo:全体的にborderの太さについて指定が必要
  light: {
    field: primitiveColors.sumi[900],
    divider: primitiveColors.sumi[300],
    focused: primitiveColors.wood[600],
    selected: primitiveColors.sea[800],
    alert: primitiveColors.sun[800],
    disabled: primitiveColors.sumi[300],
  },
  dark: {
    field: primitiveColors.white[1000],
    divider: primitiveColors.sumi[700],
    focused: primitiveColors.wood[600],
    selected: primitiveColors.sea[300],
    alert: primitiveColors.sun[500],
    disabled: primitiveColors.sumi[300],
  },
};

const status = {
  light: {
    success: primitiveColors.forest[600],
    alert: primitiveColors.sun[800],
    warning: primitiveColors.wood[800],
  },
  dark: {
    success: primitiveColors.forest[600],
    alert: primitiveColors.sun[500],
    warning: primitiveColors.wood[500],
  },
};

const chart = {
  light: {
    primary: primitiveColors.sea[800],
    secondary: primitiveColors.sea[400],
  },
  dark: {
    primary: primitiveColors.sea[100],
    secondary: primitiveColors.sea[300],
  },
};

const semanticColors = {
  text: text,
  icon: icon,
  button: button,
  background: background,
  border: border,
  status: status,
  chart: chart,
};

export default semanticColors;
