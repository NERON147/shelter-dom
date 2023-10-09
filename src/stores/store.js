import { defineStore } from 'pinia'
import axios from 'axios'


export const useStore = defineStore('pets', {
  state: () => ({
    pets: [],
    pet: null
  }),
  actions: {
    async loadPets() {
      await axios.get('https://shelter-dom-210da-default-rtdb.europe-west1.firebasedatabase.app/pets.json')
        .then((res) => {
          this.pets = res.data
        })
        .catch((err) => {
          console.log(err)
        })

    },
    setPet(pet) {
      this.pet = pet
    }
  },
  getters: {
  },
})