import { Button } from '../src/components/buttons';
export default {
  title: 'Button',
  component: Button,
  parameters: {

    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    backgroundColor: { control: 'color' },
  },
};


export const Primary = {
  args: {
    variant: 'fill',
    size: 'sm',
    asChild: false,
    children: 'button',
  },
};
export const outline = {
  args: {
    variant: 'outline',
    size: 'sm',
    asChild: false,
    children: 'button',
  },
};
export const text = {
  args: {
    variant: 'text',
    size: 'sm',
    asChild: false,
    children: 'button',
  },
};
export const loading = {
  args: {
    variant: 'fill',
    size: 'sm',
    asChild: false,
    loading: true
  },
};
export const disable = {
  args: {
    variant: 'fill',
    size: 'sm',
    asChild: false,
    children: 'button',
    disabled: true,
  },
};
export const ltrIcon = {

  render: () => (
    <>
      <Button>
        <div className='flex items-center '>
          <span style={{ marginRight: "10px" }}>
            < svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7.5 7.5L7.81672 6.86656C8.23548 6.02904 9.09149 5.5 10.0279 5.5H10.2069C11.4733 5.5 12.5 6.52665 12.5 7.79309V7.79309C12.5 9.21009 11.2276 10.2879 9.82992 10.055L9.77273 10.0455C9.62996 10.0217 9.5 10.1318 9.5 10.2765V12'
                stroke='#F4F4F4'
                stroke-width='1.5'
                stroke-linecap='round'
              />
              <path
                d='M10.25 14.25C10.25 14.6642 9.91421 15 9.5 15C9.08579 15 8.75 14.6642 8.75 14.25C8.75 13.8358 9.08579 13.5 9.5 13.5C9.91421 13.5 10.25 13.8358 10.25 14.25Z'
                fill='#F4F4F4'
              />
              <circle
                cx='10'
                cy='10'
                r='9.25'
                stroke='#F4F4F4'
                stroke-width='1.5'
              />
            </svg>
          </span>
          button

        </div>
      </Button >
    </>
  ),
};
export const RtlIcon = {

  render: () => (
    <>
      <Button dir='rtl'>
        <div className='flex items-center '>
          <span style={{ marginLeft: "10px" }}>
            < svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7.5 7.5L7.81672 6.86656C8.23548 6.02904 9.09149 5.5 10.0279 5.5H10.2069C11.4733 5.5 12.5 6.52665 12.5 7.79309V7.79309C12.5 9.21009 11.2276 10.2879 9.82992 10.055L9.77273 10.0455C9.62996 10.0217 9.5 10.1318 9.5 10.2765V12'
                stroke='#F4F4F4'
                stroke-width='1.5'
                stroke-linecap='round'
              />
              <path
                d='M10.25 14.25C10.25 14.6642 9.91421 15 9.5 15C9.08579 15 8.75 14.6642 8.75 14.25C8.75 13.8358 9.08579 13.5 9.5 13.5C9.91421 13.5 10.25 13.8358 10.25 14.25Z'
                fill='#F4F4F4'
              />
              <circle
                cx='10'
                cy='10'
                r='9.25'
                stroke='#F4F4F4'
                stroke-width='1.5'
              />
            </svg>
          </span>
          عنوان دکمه

        </div>
      </Button >
    </>
  ),
};