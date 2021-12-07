import { CenterFocusStrong, FlashOff } from '@mui/icons-material'
import { styled } from '@mui/system'
import { Autocomplete, Stepper, Tabs } from '@mui/material'

export const HeaderWrapper = styled('header')(() => ({
  padding: '0 2rem',
  backgroundColor: '#fff',
  flex: '1',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',

  '& .logo': {
    position: 'relative',
    width: '4rem',
    height: '4rem',
    marginRight: '1rem',

    '@media (min-width: 960px)': {
      width: '6rem',
      height: '6rem',
    }
  },

  'h1' : {
    font: 'normal 300 1.4rem/1 Helvetica-neue, Roboto, sans-serif ',

    '@media (min-width: 960px)': {
      fontSize: '1.6rem'
    }
  }
}))

export const LayoutStyled = styled('main')(() => ({
  padding: '1rem',
  backgroundColor: '#e9e9e9',
  minHeight: '100vh',
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',

  '@media (min-width: 960px)': {
    padding: '2rem'
  },

  '.main__wrapper': {
    width: '100%',
    maxWidth: '96rem',
    margin: '0 auto',

    '@media (min-width: 1200px)': {
      maxWidth: '111rem'
    }
  }
}))

export const MainWrapper = styled('div')(() => ({
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'flex-start',

  '@media (min-width: 960px)': {
    flexDirection: 'row',
  },

  '.col': {
    width: '100%',

    '@media (min-width: 960px)': {
      maxWidth: '100%',
      padding: '1rem',
    },

    'h2': {
      textTransform: 'uppercase',
      font: 'normal 300 1.6rem/1 Helvetica-neue, Roboto, sans-serif',
      margin: '1rem 0',

      'small': {
        textTransform: 'Capitalize',
        fontSize: '85%',
      },
    },

    'p': {
      fontSize: '1.4rem',
      marginBottom: '1em'
    },

    '&:nth-of-type(1)': {
      '@media (min-width: 960px)': {
        maxWidth: '30%'
      }
    },

    '&:nth-of-type(2)': {
      marginTop: '4rem',

      '@media (min-width: 960px)': {
        maxWidth: '70%',
        marginTop: '0',
      }
    }
  }
}))

export const StationsList = styled('ul')<any>(({color}) => ({
  'li': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: '.2rem',
    padding: '1.5rem',
    textAlign: 'center',
    borderLeft: `2.5rem solid #${color}`,
    borderRadius: '0',
    width: '100%',
    height: '2.5rem',
    cursor: 'pointer',
    fontSize: '1.4rem',
    position: 'relative',
    transition: 'transform 1s',

    '&:last-child': {
      marginBottom: '0'
    },

    '&:hover': {
      transform: 'scale(1.05)',
      transformOrigin: 'left center',
      //outline: '.3rem solid rgba(0,0,0,.15)',
      zIndex: '1',
      backgroundColor: `#${color}`,
      color: '#fff'
    }
  }
}))

export const StyledMap = styled('div')(() => ({
  height: '40rem',
  width: 'calc(100vw - 2rem)',

  '@media (min-width: 960px)': {
    width: '60rem',
    height: '55rem',
  },

  '@media (min-width: 1200px)': {
    width: '77.7rem',
    height: '59rem',
  }
}))

export const MapMarkerStyle = styled('div')(({color}) => ({
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: 'auto',
  height: 'auto',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '.2rem',
  backgroundColor: `#${color}`,
  textAlign: 'center',
  color: '#fff',
  fontSize: 10,
  fontWeight: '100',
  padding: '.2rem .5rem',
  whiteSpace: 'nowrap',

  '&::after': {
    content: '""',
    width: '0',
    height: '0', 
    borderLeft: '1rem solid transparent',
    borderRight: '1rem solid transparent',    
    borderTop: `1rem solid #${color}`,
    position: 'absolute',
    top: '1.3rem',
    left: '50%',
    transform: 'translateX(-50%)'
  }
}))

export const FooterStyled = styled('footer')(() => ({
  display: 'flex',
  flex: '1',
  padding: '2rem 0',
  borderTop: '1px solid #eaeaea',
  justifyContent: 'center',
  alignItems: 'center'
}))

export const StationSelectorStyled = styled('div')(() => ({
  backgroundColor: '#fff',
  padding: '1rem',
  width: '100%',
  maxWidth: '96rem',  
  margin: '0 0 2rem',

  '.MuiAutocomplete-listbox .MuiAutocomplete-option': {
    fontSize: '1.6rem'
  }
}))

export const AutocompleteStyled = styled(Autocomplete)(() => ({
  '.MuiInputLabel-root': {
    fontSize: '1.6rem',
    padding: '.25rem 1rem',
    backgroundColor: '#fff'
  },

  '.MuiInputBase-input': {
    fontSize: '1.6rem'
  }
}))

export const LinesWrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  maxWidth: '100rem'
})) 

export const BusBoxWrapper = styled('div')<any>(({color}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'center',
  border: '1px solid transparent',
  borderRadius: '0',
  fontSize: '2rem',
  cursor: 'pointer',

  'a': {
    display: 'block',
    backgroundColor: `#${color}`,
    padding: '.75rem',
    color: 'white',
    textDecoration: 'none'
  }
}))

export const LineBoxWrapper = styled('div')<any>(({color}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'center',
  border: '1px solid transparent',
  borderRadius: '0',
  fontSize: '2rem',
  cursor: 'pointer',
  width: '100%',

  'a': {
    width: '100%',
    display: 'block',
    backgroundColor: `#${color}`,
    padding: '.75rem',
  },

  '&:hover': {
    filter: 'saturate(0.5)'
  },

  '&:first-of-type': {
    borderRadius: '1rem 0 0 0'
  },

  '&:last-of-type': {
    borderRadius: '0 0 1rem 0'
  },

  '& a': {
    color: '#fff',
    textDecoration: 'none'
  }
}))

export const StepperStyled = styled(Stepper)<any>(({color}) => ({
  '.MuiSvgIcon-root': {
    '&, &.Mui-active': {
      color: `#${color}`
    }
  },

  '.MuiStepLabel-label': {
    textAlign: 'center',

    '@media (min-width: 960px)' : {
      textAlign: 'left'
    },
  }
}))

export const TabsHomeStyled = styled(Tabs)<any>(() => ({
  marginBottom: '1rem',

  '.MuiTab-root': {
    fontSize: '1.3rem'
  },

  '.MuiTabs-indicator': {
    backgroundColor: '#000'
  }
}))