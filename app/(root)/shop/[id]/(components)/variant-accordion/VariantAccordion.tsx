'use client'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { RadioGroup } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';
import { ProductVariant } from '../choise-variant/ChoiseVariant';

interface ProductVariantsContainerProps {
    title: string;
    items: string[]
    className?: string;
}

export const ProductVariantsContainer = ({ className, title, items, }: ProductVariantsContainerProps) => {

    return <div className={cn('', className)}>
        <AccordionItem className="mb-4" value={title}>
            <AccordionTrigger className='pt-0'>{title}</AccordionTrigger>
            <AccordionContent>
                <RadioGroup defaultValue={items[0]} >
                    {items.map((item, index) => {
                        return <ProductVariant id={`${item} ${index}`} text={item} key={`${item} ${index}`} />
                    })}
                </RadioGroup>
            </AccordionContent>
        </AccordionItem>
    </div >;
};