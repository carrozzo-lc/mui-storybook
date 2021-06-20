import React from "react";

import CustomFaqBlock from "../../components/FaqBlock/FaqBlock";

export default {
  title: "Component/FaqBlock",
  component: CustomFaqBlock,
};

const Template = (args) => <CustomFaqBlock {...args} />;

export const FaqBlockComponent = Template.bind({});

FaqBlockComponent.args = {
  faqData: [
  {
    question: "What are the Payment Methods?",
    answer: "<p>If your payment has been declined, please check that you have filled in all fields correctly:</p><ul> <li>Check that the card expiration date, card numbers and billing address you entered are correct.</li><li>Check the security code. N.B. The security code or CCV is the three-digit number found on the back of the card.</li><li>The card issuer may have declined the payment - contact your bank or PayPal directly to verify.</li></ul><p>If you've followed all the steps above, try using another card.</p>",
  },
  {
    question: "Can I change the Payment Method?",
    answer: "<p>If your payment has been declined, please check that you have filled in all fields correctly:</p><ul> <li>Check that the card expiration date, card numbers and billing address you entered are correct.</li><li>Check the security code. N.B. The security code or CCV is the three-digit number found on the back of the card.</li><li>The card issuer may have declined the payment - contact your bank or PayPal directly to verify.</li></ul><p>If you've followed all the steps above, try using another card.</p>",
  },
  {
    question: "How does the subscription work?",
    answer: "<p>If your payment has been declined, please check that you have filled in all fields correctly:</p><ul> <li>Check that the card expiration date, card numbers and billing address you entered are correct.</li><li>Check the security code. N.B. The security code or CCV is the three-digit number found on the back of the card.</li><li>The card issuer may have declined the payment - contact your bank or PayPal directly to verify.</li></ul><p>If you've followed all the steps above, try using another card.</p>",
  },
  {
    question: "What happens if the Premium license is not renewed?",
    answer: "<p>If your payment has been declined, please check that you have filled in all fields correctly:</p><ul> <li>Check that the card expiration date, card numbers and billing address you entered are correct.</li><li>Check the security code. N.B. The security code or CCV is the three-digit number found on the back of the card.</li><li>The card issuer may have declined the payment - contact your bank or PayPal directly to verify.</li></ul><p>If you've followed all the steps above, try using another card.</p>",
  },
  {
    question: "How can I cancel the subscription?",
    answer: "<p>If your payment has been declined, please check that you have filled in all fields correctly:</p><ul> <li>Check that the card expiration date, card numbers and billing address you entered are correct.</li><li>Check the security code. N.B. The security code or CCV is the three-digit number found on the back of the card.</li><li>The card issuer may have declined the payment - contact your bank or PayPal directly to verify.</li></ul><p>If you've followed all the steps above, try using another card.</p>",
  },
   {
    question: "Why don't I see the Manage Subscription button?",
    answer: "<p>If your payment has been declined, please check that you have filled in all fields correctly:</p><ul> <li>Check that the card expiration date, card numbers and billing address you entered are correct.</li><li>Check the security code. N.B. The security code or CCV is the three-digit number found on the back of the card.</li><li>The card issuer may have declined the payment - contact your bank or PayPal directly to verify.</li></ul><p>If you've followed all the steps above, try using another card.</p>",
  },
  {
    question: "Can I request a refund?",
    answer: "<p>If your payment has been declined, please check that you have filled in all fields correctly:</p><ul> <li>Check that the card expiration date, card numbers and billing address you entered are correct.</li><li>Check the security code. N.B. The security code or CCV is the three-digit number found on the back of the card.</li><li>The card issuer may have declined the payment - contact your bank or PayPal directly to verify.</li></ul><p>If you've followed all the steps above, try using another card.</p>",
  },
  {
    question: "Can I request an invoice?",
    answer: "<p>If your payment has been declined, please check that you have filled in all fields correctly:</p><ul> <li>Check that the card expiration date, card numbers and billing address you entered are correct.</li><li>Check the security code. N.B. The security code or CCV is the three-digit number found on the back of the card.</li><li>The card issuer may have declined the payment - contact your bank or PayPal directly to verify.</li></ul><p>If you've followed all the steps above, try using another card.</p>",
  },
  {
    question: "Why was my payment declined?",
    answer: "<p>If your payment has been declined, please check that you have filled in all fields correctly:</p><ul> <li>Check that the card expiration date, card numbers and billing address you entered are correct.</li><li>Check the security code. N.B. The security code or CCV is the three-digit number found on the back of the card.</li><li>The card issuer may have declined the payment - contact your bank or PayPal directly to verify.</li></ul><p>If you've followed all the steps above, try using another card.</p>",
  },
  {
    question: "Is it safe to use my credit card on the GAMS store?",
    answer: "<p>If your payment has been declined, please check that you have filled in all fields correctly:</p><ul> <li>Check that the card expiration date, card numbers and billing address you entered are correct.</li><li>Check the security code. N.B. The security code or CCV is the three-digit number found on the back of the card.</li><li>The card issuer may have declined the payment - contact your bank or PayPal directly to verify.</li></ul><p>If you've followed all the steps above, try using another card.</p>",
  }
]
};