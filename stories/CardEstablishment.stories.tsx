import React from "react";

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CardEstablishment } from '../src/components/CardEstablishment';

export default {
    title: 'Components/CardEstablishment',
    component: CardEstablishment,
} as ComponentMeta <typeof CardEstablishment>

const Template: ComponentStory<typeof CardEstablishment> = (props) => <CardEstablishment {...props}/>;

export const Primary = Template.bind({});