import React, { useState } from 'react';
import { Button } from 'antd';

const FilterButtons = ({ setFilter }) => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const changeFilter = (filter) => {
    setActiveFilter(filter);
    setFilter(filter);
  };

  return (
    <div>
      <Button type={activeFilter === 'ALL' ? 'primary' : 'default'} onClick={() => changeFilter('ALL')}>
        All
      </Button>
      <Button type={activeFilter === 'COMPLETED' ? 'primary' : 'default'} onClick={() => changeFilter('COMPLETED')}>
        Completed
      </Button>
      <Button type={activeFilter === 'PENDING' ? 'primary' : 'default'} onClick={() => changeFilter('PENDING')}>
        Pending
      </Button>
    </div>
  );
};

export default FilterButtons;
