import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Button, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  alert: {
    border:`solid 2px ${theme.palette.common.black}`,
    backgroundColor: theme.palette.common.white,
    borderRadius: 6,
    color: theme.palette.text.primary,
    marginBottom:30,
    padding:theme.spacing(2, 3),
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    '& .MuiAlert-message': {
      flexShrink: 1,
    },
    '& .MuiAlert-action': {
      flexShrink: 0,
      margin:0,
    },
    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
      '& .MuiAlert-message': {
        flexGrow: 0,
        flexShrink: 1,
        maxWidth: '100%',
        flexBasis: '100%',
      },
      '& .MuiAlert-action': {
        display:'block',
        flexGrow: 0,
        flexShrink: 1,
        maxWidth: '100%',
        flexBasis: '100%',
        textAlign:'center',
        marginTop:15,
      },
    },
  },
  alertTitle: {
    fontSize: theme.typography.pxToRem(19),
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight:1.4,
    paddingRight:35,
  },
  alertSubtitle: {
    fontSize: theme.typography.pxToRem(16),
    lineHeight:1.4,
    color: theme.palette.text.secondary,
    paddingRight:35,
    marginTop:10,
  },
  alertBtn: {
    fontSize: theme.typography.pxToRem(16),
    backgroundColor: theme.palette.common.gamsDarkBlue,
    color: theme.palette.common.white,
    letterSpacing:0.1,
    lineHeight:1.2,
    padding:theme.spacing(2, 5),
    borderRadius:28,
    '&:hover': {
      backgroundColor: theme.palette.common.gamsPetroleumBlue,
      color: theme.palette.common.white,
    },
    '&:focus': {
      outline: 'none',
      color: theme.palette.common.white,
    },
  },
}));

const SubscriptionAlert = ({ alertTitle, alertSubtitle, alertBtnAction, alertBtnText }) => {
  const classes = useStyles();

  return (
    <Alert
      className={classes.alert}
      variant="outlined"
      icon={false}
      severity="info"
      action={ alertBtnAction ?
        <Button
          className={classes.alertBtn}
          color="inherit"
          onClick={alertBtnAction}>
          {alertBtnText}
        </Button>
      : null }
    >
      <AlertTitle className={classes.alertTitle}>
        {alertTitle}
      </AlertTitle>
    { alertSubtitle ?
      <Box className={classes.alertSubtitle}>
        {alertSubtitle}
      </Box>
    : null }
    </Alert>
  )
}

export default SubscriptionAlert;
