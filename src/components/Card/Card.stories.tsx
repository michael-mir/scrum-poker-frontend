import type { ComponentAnnotations } from '@storybook/csf/dist/story';

import { Card } from './Card';
import type { CardProps } from './Card';

export default {
  title: 'components/Card',
  component: Card
} as ComponentAnnotations;

const CardTemplate = (args: CardProps) => <Card {...args} />;

export const Default = CardTemplate.bind({});
