import React from 'react';

const Container = ({
    children,
    className = '',
    as: Tag = 'div',
    ...props
}) => {
    return (
        <Tag
            className={`mx-auto w-full sm:px-16 xs:px-8 ${className}`}
            {...props}
        >
            {children}
        </Tag>
    );
};

export default Container;