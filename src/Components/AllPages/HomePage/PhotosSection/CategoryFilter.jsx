import getCategoryData from '@/lib/getCategoryData';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const CategoryFilter = async () => {
  const categoryData = await getCategoryData();

  return (
    <div>
      <ul>
        <li className="space-x-4">
          {categoryData.map(item => (
            <Link href={`/all-photos?category=${item.name}`} key={item.id}>
              <Button variant="secondary">{item.name}</Button>
            </Link>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default CategoryFilter;
