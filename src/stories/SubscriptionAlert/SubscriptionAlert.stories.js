import React from "react";

import CustomSubscriptionAlert from "../../components/SubscriptionAlert/SubscriptionAlert";

export default {
  title: "Component/SubscriptionAlert",
  component: CustomSubscriptionAlert,
};

const Template = (args) => <CustomSubscriptionAlert {...args} />;

export const SubscriptionAlertComponent = Template.bind({});

SubscriptionAlertComponent.args = {
	alertTitle: `Your premium period will be renewed on 15 July 2021`,
	alertSubtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget blandit lacus, a mollis nibh. Cras nisl ante, egestas quis dui vel, varius.',
	alertBtnAction: () => {console.log('btn action')},
	alertBtnText: 'Manage Subscription'
};