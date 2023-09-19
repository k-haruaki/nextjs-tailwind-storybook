// import type { Meta, StoryObj } from '@storybook/react';

// import { PrimitiveColors } from './PrimitiveColors';

// const meta = {
//   title: 'Theme/Primitive Colors',
//   component: PrimitiveColors,
//   parameters: {
//     // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
//     layout: 'centered',
//   },
//   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
//   //   tags: ['autodocs'],
//   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   //   argTypes: {
//   //     backgroundColor: { control: 'color' },
//   //   },
// } satisfies Meta<typeof PrimitiveColors>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { PrimitiveColors } from './PrimitiveColors';

const meta: Meta<typeof PrimitiveColors> = {
  title: 'Theme/Primitive Colors',
  component: PrimitiveColors,
};

export default meta;
type Story = StoryObj<typeof PrimitiveColors>;

export const Basic: Story = {};
// type Story = StoryObj<typeof PrimitiveColors>;

// /*
//  *👇 Render functions are a framework specific feature to allow you control on how the component renders.
//  * See https://storybook.js.org/docs/react/api/csf
//  * to learn how to use render functions.
//  */
// export const Primary: Story = {
//   args: {},
// };
