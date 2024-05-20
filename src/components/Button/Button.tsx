import { ButtonHTMLAttributes, FC } from "react";

interface ButtonPropsType extends  ButtonHTMLAttributes<HTMLButtonElement> {
    name: string,
    className?: string
}

export const SuperButton: FC<ButtonPropsType> = ({name, className, ...rest}) => {

    return <button className={className} {...rest}>{name}</button>
}