import React, { useEffect, useState } from 'react';

type Category = {
  slug: string;
  name: string;
  url: string;
};

const ProductCategories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/categories');
        if (!response.ok) {
          throw new Error('Ошибка при загрузке данных');
        }
        const data: Category[] = await response.json();
        setCategories(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Неизвестная ошибка');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <div className="spinner" style={{ fontSize: '1.5rem', color:"black" }}>🔄 Загрузка категорий...</div>
      </div>
    );
  }

  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div>
      <h2>Категории товаров</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.slug}>
            <a href={category.url} target="_blank" rel="noopener noreferrer">
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCategories;
