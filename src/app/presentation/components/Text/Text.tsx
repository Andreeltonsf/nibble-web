import { TextAs, TextProps } from './text.type';


export const Text = ({ children, classname, variant, as }: TextProps) => {

  const Tag = as ?? TextAs.p;
  
  return(
    <Tag className={classname}>
      {children}
    </Tag>
  )
}


