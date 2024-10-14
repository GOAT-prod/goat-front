import { Label } from '@/components/ui/label';
import { RadioGroupItem } from '@/components/ui/radio-group';

interface ProductVariantProps {
    id: string;
    text: string
    className?: string;
}

export const ProductVariant = ({ className, id, text, }: ProductVariantProps) => {

    return (
        <div className='group'>
            <Label htmlFor={id} className='flex items-center justify-between rounded-md border border-border p-3 group-hover:bg-secondary-hover cursor-pointer' >
                <p className='text-sm font-medium'> {text}</p>
                <RadioGroupItem className="group-hover:bg-secondary" value={text} id={id} />
            </Label>
        </div>
    );
};