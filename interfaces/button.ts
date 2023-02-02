export type ButtonStyleType = 'primary' | 'secondary';
export type ButtonPaddingSizeType = 'small' | 'medium' | 'large';

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  ButtonStyle?: ButtonStyleType;
  ButtonPaddingSize?: ButtonPaddingSizeType;
}
