import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
    children: React.ReactNode;
    className?: string;
    icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    children,
    className = '',
    icon,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-brand-yellow text-brand-black hover:bg-yellow-500 focus:ring-brand-yellow",
        secondary: "bg-brand-black text-white hover:bg-gray-900 focus:ring-brand-black",
        outline: "border-2 border-brand-yellow text-brand-black hover:bg-brand-yellow hover:text-brand-black",
        whatsapp: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </button>
    );
};
