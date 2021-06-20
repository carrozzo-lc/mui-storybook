import React from 'react';
import parse from 'html-react-parser';
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 790,
    width:'100%',
    margin:'auto'
  },
  heading: {
    fontSize: theme.typography.pxToRem(21),
    fontWeight: theme.typography.fontWeightMedium,
    paddingTop:6,
    paddingBottom:6,
  },
}));

const FaqBlock = ({ faqData }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    { faqData.map((faq, index) => {
      return (
        <Accordion key={`faq-${index}`}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="div">
              {parse(faq.answer)}
            </Typography>
          </AccordionDetails>
        </Accordion>
      );
    })}
    </div>
  )
}

export default FaqBlock;
