const colors = {
  earth100: '#b8fcac',
  earth200: '#9cf184',
  earth300: '#88e967',
  earth400: '#74e24a',
  earth500: '#56b53f',
  earth600: '#469d39',
  earth700: '#388833',
  earth800: '#276f2d',
  earth900: '#145327',
  earth1000: '#084222',
  mars100: '#ffcace',
  mars200: '#f6b1b5',
  mars300: '#ea9297',
  mars400: '#dd676b',
  mars500: '#d45459',
  mars600: '#ac3c40',
  mars700: '#9a3135',
  mars800: '#7b1e22',
  mars900: '#651115',
  mars1000: '#500508',
  moon100: '#f6f7f8',
  moon200: '#e9eef2',
  moon300: '#afbec9',
  moon400: '#8296a4',
  moon500: '#597183',
  moon600: '#495c69',
  moon700: '#3f4c55',
  moon800: '#384248',
  moon900: '#32383c',
  moon1000: '#1c2124',
  space100: '#fff',
  space200: '#f5f5f5',
  space300: '#e5e5e5',
  space400: '#c5c5c5',
  space500: '#a5a5a5',
  space600: '#858585',
  space700: '#656565',
  space800: '#454545',
  space900: '#353535',
  space1000: '#202020',
  sun100: '#fffec1',
  sun200: '#fbee88',
  sun300: '#f7e05b',
  sun400: '#f4d330',
  sun500: '#f1c500',
  sun600: '#cea800',
  sun700: '#b19100',
  sun800: '#8f7600',
  sun900: '#685500',
  sun1000: '#4b3e00',
  uranus100: '#a6f7ff',
  uranus200: '#86e3f9',
  uranus300: '#67cff3',
  uranus400: '#3db5eb',
  uranus500: '#159ce4',
  uranus600: '#147ec1',
  uranus700: '#1663a0',
  uranus800: '#16518b',
  uranus900: '#183a6e',
  uranus1000: '#182758',
  venus100: '#ffc3f9',
  venus200: '#f0a0e9',
  venus300: '#e78ade',
  venus400: '#e078d6',
  venus500: '#c763ba',
  venus600: '#ab4b9a',
  venus700: '#993c85',
  venus800: '#842a6d',
  venus900: '#6b1550',
  venus1000: '#5c083f'
};

const baseTheme = {
  colors,
  fonts: {
    primary: `normal normal 600 normal 16px/1.5 Poppins, sans-serif`,
    secondary: `normal normal 400 normal 16px/1.5 Lato, sans-serif;`
  },
  fontSizes: [12, 16, 24, 32, 40, 48, 64],
  radii: [0, 2, 8, 16, 24, 32],
  space: [0, 8, 16, 24, 38],
  sizes: [],
  lineHeights: [0, '18px', '28px', '35px'],
};

const theme = {
  ...baseTheme,
  buttons: {
    primary: {
      uranus: {
        backgroundColor: baseTheme.colors.uranus500,
        color: baseTheme.colors.space100,
        borderColor: baseTheme.colors.uranus500,
      },
      earth: {
        backgroundColor: baseTheme.colors.earth400,
        color: baseTheme.colors.moon900,
        borderColor: baseTheme.colors.earth400,
      },
      venus: {
        backgroundColor: baseTheme.colors.venus400,
        color: baseTheme.colors.space100,
        borderColor: baseTheme.colors.venus400,
      },
      mars: {
        backgroundColor: baseTheme.colors.mars500,
        color: baseTheme.colors.space100,
        borderColor: baseTheme.colors.mars500,
      }
    },
    outline: {
      uranus: {
        color: baseTheme.colors.uranus500,
        borderColor: baseTheme.colors.uranus500,
      },
      earth: {
        color: baseTheme.colors.earth600,
        borderColor: baseTheme.colors.earth600,
      },
      venus: {
        color: baseTheme.colors.venus400,
        borderColor: baseTheme.colors.venus400,
      },
      mars: {
        color: baseTheme.colors.mars500,
        borderColor: baseTheme.colors.mars500,
      }
    }
  },
  buttonSizes: {
    small: {
      padding: '5px 28px', // @TODO: Figure out this hardcoded values
      fontSize: baseTheme.fontSizes[0],
      lineHeight: baseTheme.lineHeights[1],
      borderRadius: baseTheme.radii[3],
    },
    medium: {
      padding: '8px 38px', // @TODO: Figure out this hardcoded values
      fontSize: baseTheme.fontSizes[1],
      lineHeight: baseTheme.lineHeights[2],
      borderRadius: baseTheme.radii[4],
    },
    large: {
      padding: '12px 46px', // @TODO: Figure out this hardcoded values
      fontSize: baseTheme.fontSizes[2],
      lineHeight: baseTheme.lineHeights[3],
      borderRadius: baseTheme.radii[5],
    },
  }
};

export default theme;
