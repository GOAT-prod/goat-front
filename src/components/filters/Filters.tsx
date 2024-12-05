import { CheckboxFiltersGroup } from '../checkbox-filters-group/CheckboxFiltersGroup';
import { Input } from '../ui/input';
import { Title } from '../ui/title';

export const Filters = () => {
  return (
    <div className="flex flex-col gap-6">
      <Title text="Фильтрация" size="lg" className="font-semibold" tag="h2" />
      <CheckboxFiltersGroup
        title="Обувь"
        name="shoes"
        // onClickCheckbox={filters.setPizzaTypes}
        // selected={filters.pizzaTypes}
        items={[
          { text: 'Мужская обувь', value: '1' },
          { text: 'Женская обувь', value: '2' },
          { text: 'Детская обувь', value: '3' },
          { text: 'Аксессуары и уход', value: '4' },
        ]}
      />
      <div className="border-y border-border py-6">
        <Title className="mb-3" size="md" text={'Цена от и до:'} />
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            className="h-[32px]"
            min={0}
            max={1000}
            // value={'String(filters.prices.priceFrom)'}
            // onChange={(e) =>
            //   filters.setPrices("priceFrom", Number(e.target.value))
            // }
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={1000}
            className="h-[32px]"
            // value={String(filters.prices.priceTo)}
            // onChange={(e) =>
            //   filters.setPrices("priceTo", Number(e.target.value))
            // }
          />
        </div>
      </div>
      <CheckboxFiltersGroup
        title="Бренды"
        name="shoes"
        className=""
        // onClickCheckbox={filters.setPizzaTypes}
        // selected={filters.pizzaTypes}
        items={[
          { text: 'addidas', value: '1' },
          { text: 'Fila', value: '2' },
          { text: 'Nike', value: '3' },
          { text: 'Reedok', value: '4' },
          { text: 'Puma', value: '5' },
          { text: 'Under Armour', value: '6' },
          { text: 'Kappa', value: '7' },
        ]}
      />
    </div>
  );
};
