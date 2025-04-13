import { tv } from 'tailwind-variants';
import { TextVariant } from './text.type';


export const textClassnames = tv({
  base:"font-sans inline-block",
  variants:{
    variant:{
      [TextVariant.heading1]:"text-[2rem] leading-10 " ,
      [TextVariant.heading2]:"text-2xl ",
      [TextVariant.heading3]:"text-xl ",
      [TextVariant.heading4]:"text-base/6 ",
      [TextVariant.heading5]:"text-sm/6 ",
      [TextVariant.heading6]:"text-xs ",
      [TextVariant.bodyLarge]:"text-xl/8",
      [TextVariant.bodyNormal]:"text-base/6",
      [TextVariant.bodySmall]:"text-sm/6",
      [TextVariant.caption1]:"text-xs/[18px]",
      [TextVariant.caption2]:"text-[11px]/4",
    },
  },
  compoundVariants:[
    {
      variant: [
        TextVariant.heading1,
        TextVariant.heading2,
        TextVariant.heading3,
        TextVariant.heading4,
        TextVariant.heading5,
        TextVariant.heading6,
      ],
      class: ' text-typography-dark'
      
    },
    {
      variant: [
        TextVariant.bodyLarge,
        TextVariant.bodyNormal,
        TextVariant.bodySmall,
        TextVariant.caption1,
        TextVariant.caption2,
      ],
      class: 'font-regular text-typography-secondary'
    }
  ]
})
