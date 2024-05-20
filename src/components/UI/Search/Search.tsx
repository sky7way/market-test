import { FC, InputHTMLAttributes } from 'react';

interface SearchPropsType extends InputHTMLAttributes<HTMLInputElement> {
  className: string;
}

export const Search: FC<SearchPropsType> = ({
  className,
  onChange,
  value,
  ...rest
}) => {
  return (
    <input
      className={className}
      placeholder="Поиск товара"
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
};
