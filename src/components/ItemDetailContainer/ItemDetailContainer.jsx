import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig'; 

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const docRef = doc(db, 'products', itemId); 

    getDoc(docRef)
      .then((doc) => {
        if (doc.exists()) {
          setProduct({ id: doc.id, ...doc.data() });
        } else {
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.error('Error fetching document:', error);
      });
  }, [itemId]); 

  return product ? <ItemDetail product={product} /> : <p>Cargando...</p>;
};

export default ItemDetailContainer;
