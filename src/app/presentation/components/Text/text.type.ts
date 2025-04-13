
export enum TextVariant {
  heading1 = 'heading1',
  heading2 = 'heading2',
  heading3 = 'heading3',
  heading4 = 'heading4',
  heading5 = 'heading5',
  heading6 = 'heading6',
  bodyLarge = 'bodyLarge',
  bodyNormal = 'bodyNormal',
  bodySmall = 'bodySmall',
  caption1 = 'caption1',
  caption2 = 'caption2',
}


export enum TextAs{
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  p = 'p',
  span = 'span',
}


export type TextProps = {
  children: React.ReactNode;
  classname?: string;
  variant?:TextVariant;
  as?: TextAs;
}
