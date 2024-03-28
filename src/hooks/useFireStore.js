import { getFirestore, collection, query, onSnapshot, setDoc, doc } from 'firebase/firestore';

export const useFireStore = () => {
  const db = getFirestore();

  const addDocumment = ({ colectionName, documentData }) => {
    const collectionRef = collection(db, colectionName);
    const data = documentData;
    delete data.id;
    setDoc(doc(collectionRef, 'new-city-id'), data);
  };

  const getCollection = ({ colectionName }) => {
    const collectionRef = collection(db, colectionName);
    const q = query(collectionRef);

    const unsubscribe = onSnapshot(q, querySnapshot => {
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    });
    console.log(unsubscribe);
  };

  return {
    addDocumment,
    getCollection,
  };
};
