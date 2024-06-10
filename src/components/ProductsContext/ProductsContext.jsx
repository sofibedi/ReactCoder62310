import React, { createContext, useContext, useState, useEffect } from 'react';

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: 1,
              name: 'Camiseta roja',
              description: 'Camiseta de algodón roja, perfecta para el verano.',
              price: 100,
              image: 'https://acdn.mitiendanube.com/stores/086/150/products/photoroom-20221019_2019411-cf65ed2e724337d40316663629238697-640-0.png',
              stock: 10,
              category: 'ropa',
            },
            {
              id: 2,
              name: 'Chaqueta verde',
              description: 'Chaqueta verde con forro de algodón, ideal para el otoño.',
              price: 150,
              image: 'https://www.bichxsmarket.com/media/catalog/product/cache/18e39e134e24206757fbe1973f8e8b38/i/m/img_8032-removebg-preview.jpg',
              stock: 15,
              category: 'ropa',
            },
            {
              id: 3,
              name: 'Smartphone',
              description: 'Smartphone con cámara de alta resolución y pantalla AMOLED.',
              price: 200,
              image: 'https://pardohogar.vtexassets.com/arquivos/ids/192380/Celular-Motorola-Moto-E22-64GB-16-2MP-Azul-3.jpg?v=638297703834930000',
              stock: 5,
              category: 'electronica',
            },
            {
              id: 4,
              name: 'Ordenador',
              description: 'Ordenador portátil con 16GB de RAM y disco SSD de 512GB.',
              price: 250,
              image: 'https://tiendaexo.com/media/catalog/product/7/0/700x500_tienda-notebook-exo-smart-r--r-b-win11h-nov23-04_1.png?quality=80&bg-color=255,255,255&fit=bounds&height=500&width=700&canvas=700:500',
              stock: 20,
              category: 'electronica',
            },
            {
              id: 5,
              name: 'Novela',
              description: 'Novela emocionante que te mantendrá en suspenso desde la primera página.',
              price: 300,
              image: 'https://oferplan.abc.es/blog/wp-content/uploads/sites/10/2021/04/el_arte_de_enganar_al_karma_elisabet_benavent.jpg',
              stock: 8,
              category: 'libros',
            },
            {
              id: 6,
              name: 'Biografía',
              description: 'Inspiradora biografía de una figura histórica relevante.',
              price: 350,
              image: 'https://www.penguinlibros.com/ar/2125861-home_default/bowie-una-biografia.jpg',
              stock: 12,
              category: 'libros',
            }
          ]);
        }, 1000);
      });
      setProducts(response);
    };

    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);