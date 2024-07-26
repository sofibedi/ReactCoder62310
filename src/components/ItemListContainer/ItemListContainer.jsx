import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    let collectionRef = collection(db, 'products'); 

    if (categoryId) {
      collectionRef = query(collectionRef, where('category', '==', categoryId)); 
    }

    getDocs(collectionRef)
      .then((querySnapshot) => {
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      })
      .catch((error) => {
        console.error('Error getting products:', error);
      });
  }, [categoryId]); 

  return <ItemList products={products} />;
};

export default ItemListContainer;
