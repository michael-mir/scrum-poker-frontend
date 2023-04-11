import type { ComponentAnnotations } from '@storybook/csf/dist/story';

import type { CardProps } from './Card';
import { Card } from './Card';

export default {
  title: 'components/Card',
  component: Card
} as ComponentAnnotations;

const CardTemplate = (args: CardProps) => <Card {...args} />;

export const Default = CardTemplate.bind({});
