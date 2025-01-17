// store.ts

import { defineStore } from 'pinia';
import { ref, onUnmounted } from 'vue';
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  addDoc,
  deleteDoc,
  onSnapshot,
} from 'firebase/firestore';

interface Item {
  id: string;
  name: string;
}

export const useFirebaseStore = defineStore('firebase', {
  state: () => ({
    items: [] as Item[],
    $fire: firestore(), // Initialize $fire here

  }),

  actions: {
    async fetchItems() {
      const q = query(collection(this.$fire.firestore, 'your_collection_name'));
      const querySnapshot = await getDocs(q);
      this.items = querySnapshot.docs.map((doc) => {
        const data = doc.data() as Item;
        return { id: doc.id, name: data.name };
      });
    },

    async addItem(name: string) {
      const newDocRef = await addDoc(collection(this.$fire.firestore, 'your_collection_name'), {
        name,
      });
      this.items.push({ id: newDocRef.id, name });
    },

    async deleteItem(id: string) {
      await deleteDoc(doc(this.$fire.firestore, 'your_collection_name', id));
      this.items = this.items.filter((item) => item.id !== id);
    },

    setupRealtimeListener() {
      const q = query(collection(this.$fire.firestore, 'your_collection_name'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        this.items = querySnapshot.docs.map((doc) => {
          const data = doc.data() as Item;
          return { id: doc.id, name: data.name };
        });
      });

      onUnmounted(unsubscribe);
    },
  },
});
function firestore(): any {
  throw new Error('Function not implemented.');
}

