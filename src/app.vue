<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex__container" v-if="!state">
    <CNavbar />
    <RouterView v-bind:products="products" @handleSet="handleSet" v-bind:state="state" v-bind:orders="orders"
      :ordersArray="ordersArray" v-bind:new_products="new_products" @handleBuy="handleBuy" />
  </div>
  <div class="flex__container overflow__hidden" v-else>
    <CNavbar />
    <RouterView v-bind:products="products" @handleSet="handleSet" v-bind:state="state" v-bind:orders="orders" :ordersArray="ordersArray" @handleBuy="handleBuy" v-bind:new_products="new_products" />
  </div>
</template>
<script>
import CNavbar from './Components/CNavbar/CNavbar.vue';
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Spicy seasoned seafood noodles",
          price: 2.29,
          bowl: 20,
          image: "../img/Food.png",
          category: 'hot'
        },
        {
          id: 2,
          name: "Salted Pasta with mushroom sauce",
          price: 2.69,
          bowl: 11,
          image: "../img/Food.png",
          category: 'cold'
        },
        {
          id: 3,
          name: "Beef dumpling in hot and sour soup",
          price: 2.99,
          bowl: 16,
          image: "../img/Food.png",
          category: 'soup'
        },
        {
          id: 4,
          name: "Healthy noodle with spinach leaf",
          price: 3.29,
          bowl: 22,
          image: "../img/Food.png",
          category: 'grill'
        },
        {
          id: 5,
          name: "Hot spicy fried rice with omelet",
          price: 3.49,
          bowl: 13,
          image: "../img/Food.png",
          category: 'appetiz'
        },
        {
          id: 6,
          name: "Spicy instant noodle with special omelette",
          price: 3.59,
          bowl: 17,
          image: "../img/Food.png",
          category: 'desert'
        },
      ],
      new_products: [
        {
          id: 1,
          name: 'New Product 1',
          price: 2.2,
          bowl: 2,
          image: '../img/Food.png',
          category: 'hot'
        },
        {
          id: 2,
          name: 'New Product 2',
          price: 2.4,
          bowl: 5,
          image: '../img/Food.png',
          category: 'cold'
        },{
          id: 3,
          name: 'New Product 3',
          price: 3,
          bowl: 2,
          image: '../img/Food.png',
          category: 'soup'
        },{
          id: 4,
          name: 'New Product 4',
          price: 2.2,
          bowl: 2,
          image: '../img/Food.png',
          category: 'grill'
        },{
          id: 5,
          name: 'New Product 5',
          price: 2.2,
          bowl: 2,
          image: '../img/Food.png',
          category: 'appetiz'
        },
        {
          id: 6,
          name: 'New Product 6',
          price: 2.2,
          bowl: 2,
          image: '../img/Food.png',
          category: 'desert'
        },
      ],
      orders: 3345,
      state: false,
      ordersArray: [],
    }
  },
  components: { CNavbar },
  methods: {
    handleToggleState() {
      console.log('Toggle')
    },
    handleSet() {
      this.state = !this.state
    },
    handleBuy() {
      this.ordersArray = [];
      alert('Buy success')
    }
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
::-webkit-scrollbar {
  width: 0.5208333333333334vw;
  background-color: #1F1D2B;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #252836;
}
$baseDark: #1F1D2B;
$baseGray: #252836;
$baseActive: #EA7C69;
li {
  list-style: none;
}
.flex__container {
  display: flex;
}
.overflow__hidden {
  height: 100vh;
  overflow-y: hidden;
}
@media (min-width: 0px) and (max-width: 768px) {
  .flex__container {
    flex-direction: column-reverse;
  }
}
button {
  cursor: pointer;
}
</style>