import React, { useState } from 'react';
import Select from '../../../../components/Common/Form/Select';
import { CategoryTypes } from '../../Categories/Category.types';
  
  interface SelectCategoryProps {
    categories: CategoryTypes[];
    value: number | null;
    onChange: (value: number | null) => void;
  }

const SelectCategory: React.FC<SelectCategoryProps> = ({ categories, value, onChange }) => {
  const [error, setError] = useState<string | null>(null);
  const options = categories.map(cat => ({ value: cat.id?.toString() ?? '', label: cat.name }))
  
  const handleChange = (selectedValue: number | null) => {
    if (selectedValue === null) {
        setError('Пожалуйста, выберите категорию');
        onChange(null);
    } else {
        setError(null);
        onChange(selectedValue);
    }
};

  return (
    <>
      <Select
        options={options}
        value={value}
        onChange={handleChange}
        placeholder='Выберите категорию'
      />
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </>
  );
};

export default SelectCategory;