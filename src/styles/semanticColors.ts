import primitiveColors from './primitiveColors';

const semanticColors = {
  text: {
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
  },
  icon: {
    light: {
      label: primitiveColors.sumi[900],
      active: primitiveColors.sea[800],
      alert: primitiveColors.sun[800],
      disabled: primitiveColors.sumi[500],
    },
  },
  button: {
    light: {
      normal: primitiveColors.sea[800],
      hover: primitiveColors.sea[800], // Todo:透過の設定が必要
      active: primitiveColors.sea[800], // Todo:透過の設定が必要
      disabledBg: primitiveColors.sumi[500],
    },
  },
  background: {
    light: {
      primary: primitiveColors.white[1000],
      secondary: primitiveColors.sumi[100],
      tertiary: primitiveColors.sumi[50],
    },
  },
  border: {
    // Todo:全体的にborderの太さについて指定が必要
    light: {
      field: primitiveColors.sumi[900],
      divider: primitiveColors.sumi[300],
      focused: primitiveColors.wood[600],
      selected: primitiveColors.sea[800],
      alert: primitiveColors.sun[800],
      disabled: primitiveColors.sumi[300],
    },
  },
  status: {
    light: {
      success: primitiveColors.forest[600],
      alert: primitiveColors.sun[800],
      warning: primitiveColors.wood[800],
    },
  },
  chart: {
    primary: primitiveColors.sea[800],
    secondary: primitiveColors.sea[400],
  },
};

export default semanticColors;
