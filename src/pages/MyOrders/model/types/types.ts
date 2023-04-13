import { createTheme } from '@mui/material';

export const enum paymentStatus  {
  PENDING = 'Оплата при получении',
  FULLFILED = 'Оплачен онлайн',
  REJECTED = 'Не оплачен',
}

export const theme = createTheme({
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&.MuiButtonBase-root': {
            '&.MuiPaginationItem-root': {
              fontWeight: '700',
              fontSize: '14px',
              lineHeight: '20px',

              '&.Mui-selected': {
                backgroundColor: '#414042',
                color: '#FFFFFF',
              },
            },
          },
          '&.MuiPaginationItem-sizeMedium': {
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            '@media (max-width: 780px)': {
              width: '35px',
              height: '35px',
            }
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          '&.MuiSvgIcon-root': {
            width: '26px',
            height: '30px',
            fill: '#31688F',
          },
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '@media (max-width: 780px)': {
            width: '35px',
            height: '35px',
          }
        },
      },
    },
  },
});
