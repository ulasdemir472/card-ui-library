import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta = {
    title: 'Components/Card',
    component: Card,
    parameters: { layout: 'centered' },
    tags:["autodocs"]
} satisfies Meta<typeof Card>

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story ={
    args: {
        title: 'Custom Title',
        description: 'This is a custom description for the card.',
    }
}

 export const Custom: Story = {
     args :{
         title: 'Custom Title',
         description: 'This is a custom description for the card.',
         cardClassname: 'flex flex-col items-center bg-red border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700',
         titleClassname: 'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white',
         descriptionClassname: 'mb-3 font-normal text-gray-700 dark:text-gray-400',
     }
 }
