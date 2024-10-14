import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Title } from '../ui/title';

interface ProductCardProps {
    product: Product;
    onClick?: () => void;
}

export const ProductCard = ({ product, onClick }: ProductCardProps) => {
    return (
        <>
            <ProductCardLayout onClick={onClick} className='cursor-pointer'>
                <ProductCardHeader className="w-full h-full  ">
                    <img src={product.images[0].imageUrl} alt="Карточка товара" />
                </ProductCardHeader>
                <ProductCardContent>
                    <ProductCardTitle>{product.name}</ProductCardTitle>
                </ProductCardContent>
                <ProductCardFooter className="flex justify-between items-center">
                    <Title size="md" text={`${product.price} $`} />
                    <Button size="small">Заказать</Button>
                </ProductCardFooter>
            </ProductCardLayout>
        </>
    );
};

const ProductCardLayout = Card;

const ProductCardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => <div ref={ref} className={cn('', className)} {...props} />,
);
ProductCardContent.displayName = 'ProductCardContent';

const ProductCardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn('bg-white justify-end overflow-hidden rounded-md flex flex-col', className)}
            {...props}
        />
    ),
);
CardHeader.displayName = 'CardHeader';

const ProductCardTitle = CardTitle;

const ProductCardDescription = CardDescription;

const ProductCardFooter = CardFooter;

export {
    ProductCardLayout,
    ProductCardHeader,
    ProductCardTitle,
    ProductCardDescription,
    ProductCardFooter,
    ProductCardContent,
};