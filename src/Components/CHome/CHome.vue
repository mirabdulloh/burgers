<template >
    <div class="home__flex__container">
        <section class="home__section filter__home" v-if="!state">
            <div class="container">
                <div class="home__title">
                    <div class="home__title_text">
                        <h1>VIP Burger</h1>
                        <h3>{{ formattedDate }}</h3>
                    </div>
                    <div class="home__title_input">
                        <input type="text" v-model="searchQuery" @input="searchInput"
                            placeholder="Search for food, coffe, etc..">
                        <i class="bx bx-search"></i>
                    </div>
                </div>
                <div class="home__content">
                    <div class="home__navbar">
                        <ul>
                            <li @click="changeCategory('All')">All</li>
                            <li @click="changeCategory('hot')">Hot Dishes</li>
                            <li @click="changeCategory('cold')">Cold Dishes</li>
                            <li @click="changeCategory('soup')">Soup</li>
                            <li @click="changeCategory('grill')">Grill</li>
                            <li @click="changeCategory('appetiz')">Appetizer</li>
                            <li @click="changeCategory('desert')">Desert</li>
                        </ul>
                    </div>
                    <div class="products__content" v-if="products.length > 0">
                        <ProductItem @handleArrayPush="handleAddToOrders" v-for="product in filteredProducts"
                            v-bind:product="product" />
                    </div>
                    <div class="products__content" v-else>
                        <h1>Not Date</h1>
                    </div>
                </div>
            </div>
        </section>
        <section class="home__section" v-else>
            <div class="container">
                <div class="home__title">
                    <div class="home__title_text">
                        <h1>VIP Burger</h1>
                        <h3>{{ formattedDate }}</h3>
                    </div>
                    <div class="home__title_input">
                        <input type="text" placeholder="Search for food, coffe, etc..">
                        <i class="bx bx-search"></i>
                    </div>
                </div>
                <div class="home__content">
                    <div class="home__navbar">
                        <ul>
                            <li @click="changeCategory('All')">All</li>
                            <li @click="changeCategory('hot')">Hot Dishes</li>
                            <li @click="changeCategory('cold')">Cold Dishes</li>
                            <li @click="changeCategory('soup')">Soup</li>
                            <li @click="changeCategory('grill')">Grill</li>
                            <li @click="changeCategory('appetiz')">Appetizer</li>
                            <li @click="changeCategory('desert')">Desert</li>
                        </ul>
                    </div>
                    <div class="products__content" v-if="products.length > 0">
                        <ProductItem @handleArrayPush="handleAddToOrders" v-for="product in products"
                            v-bind:product="product" />
                    </div>
                    <div class="products__content" v-else>
                        <h1>Not Date</h1>
                    </div>
                </div>
            </div>
        </section>
        <section class="home__sidebar">
            <h1 class="sidebar__title">Orders #{{ orders }}</h1>
            <div class="sidebar__btns">
                <button :class="{ 'sidebar__btn_active': this.dine }" @click="changeActiveDine">Dine In</button>
                <button :class="{ 'sidebar__btn_active': this.go }" @click="changeActiveGo">To Go</button>
                <button :class="{ 'sidebar__btn_active': this.delivery }" @click="changeActiveDelivery">Delivery</button>
            </div>
            <div class="sidebar__navbar">
                <span>Item</span>
                <div class="sidebar__navbar_group">
                    <span>Qty</span>
                    <span>Price</span>
                </div>
            </div>
            <div class="container sidebar__container">
                <SidebarProduct @delete="handleDelete" v-bind:ordersArray="ordersArray" />
            </div>
            <div class="total__summary">
                <div class="flex">
                    <span>Discount</span>
                    <span>{{ discount }}</span>
                </div>
                <div class="flex">
                    <span>Sub total</span>
                    <span>{{total}}</span>
                </div>
            </div>
            <button @click="handleSet" v-bind:state="state" class="continue__btn">Continue to payment</button>
        </section>
        <section class="confirmation__section" v-if="state">
            <Confirmation @setState="handleSet" @delete="handleDelete" v-bind:state="state" v-bind:discount="discount"
                :orders="orders" :orders-array="ordersArray" @buy="handleBuy" />
        </section>
    </div>
</template>
<script>
import Confirmation from '../Confirmation/Confirmation.vue';
import ProductItem from '../ProductItem/ProductItem.vue';
import SidebarProduct from '../SidebarProduct/SidebarProduct.vue';
import moment from 'moment'
export default {
    data() {
        return {
            discount: 0,
            total: 0,
            category: 'All',
            searchQuery: '',
            dine: true,
            go: false,
            delivery: false
        }
    },
    components: {
        ProductItem,
        SidebarProduct,
        Confirmation
    },
    props: {
        products: {
            type: Array,
            required: true
        },
        orders: {
            type: Number,
            required: true
        },
        state: {
            type: Boolean,
            required: true
        },
        ordersArray: {
            type: Array,
            required: true
        }
    },
    computed: {
        formattedDate() {
            return moment(this.date).format("dddd D MMM, YYYY");
        },
        productsProps() {
            return {
                products: [...this.products]
            }
        },
        filteredProducts() {
            if (this.category === 'All') {
                return this.products.filter((product) => {
                    return product.name.toLowerCase().includes(this.searchQuery.toLowerCase());
                });
            } else {
                return this.products.filter((product) => {
                    return product.category.toLowerCase() === this.category.toLowerCase() && product.name.toLowerCase().includes(this.searchQuery.toLowerCase());
                });
            }
        },
        searchInput() {
            console.log('value')
        }
    },
    methods: {
        handleDelete(id) {
            this.ordersArray.splice(id, 1)
        },
        handleAddToOrders(product) {
            this.ordersArray.push(product);
            localStorage.setItem('products', this.ordersArray)
        },
        handleSet() {
            this.$emit('handleSet', this.state)
        },
        changeCategory(category) {
            this.category = category;
            console.log(category)
        },
        changeActiveDine() {
            this.dine = true;
            if (this.go || this.delivery) {
                this.go = false;
                this.delivery = false;
            }
        },
        changeActiveGo() {
            this.go = true;
            if (this.dine || this.delivery) {
                this.dine = false;
                this.delivery = false;
            }
        },
        changeActiveDelivery() {
            this.delivery = true;
            if (this.dine || this.go) {
                this.dine = false;
                this.go = false;
            }
        },
        handleBuy() {
            this.$emit('handleBuy', this.ordersArray)
        }
    }
}
</script>
<style lang="scss" scoped>
.home__flex__container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    overflow-x: hidden;
}
.home__section {
    width: 100%;
    background-color: #252836;
    padding: 6.722689075630252vh 2.2408963585434174vh 2.2408963585434174vh 2.2408963585434174vh;
    .home__title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: white;
        h1 {
            font-size: 3.9215686274509802vh;
        }
        h3 {
            margin-top: 1.4005602240896358vh;
            color: #E0E6E9;
            font-weight: 400;
            font-size: 2.2408963585434174vh;
        }
    }
    .home__navbar {
        height: 20.011204481792717vh;
        padding: 2.8011204481792715vh 0 2.2408963585434174vh 0;
        width: 80%;
        ul {
            display: flex;
            align-items: center;
            justify-content: space-between;
            li {
                color: white;
                cursor: pointer;
            }
        }
        h1 {
            font-size: 2.5210084033613445vh;
        }
    }
    .home__title_input {
        position: relative;
        input {
            width: 15vw;
            height: 6.722689075630252vh;
            background: #2D303E;
            border: 0.06510416666666667vw solid #393C49;
            border-radius: 0.5208333333333334vw;
            font-size: 0.9114583333333334vw;
            padding: 0 1.4005602240896358vh 0 5.100840336134454vh;
            color: white;
            outline: none;
        }
        .bx-search {
            position: absolute;
            left: 0.7765625vw;
            font-size: 2.5210084033613445vh;
            top: 50%;
            transform: translateY(-50%);
            color: white;
        }
    }
    .products__content {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 1.6041666666666665vw;
    }
}
.home__sidebar {
    width: 39.0625vw;
    background: #1F1D2B;
    padding: 6.722689075630252vh 2.2408963585434174vh 2.2408963585434174vh 2.2408963585434174vh;
    position: relative;
    .sidebar__title {
        font-size: 2.8011204481792715vh;
        font-weight: 400;
        color: white;
    }
    .sidebar__navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 3.5014005602240896vh 0;
        font-size: 2.5vh;
        color: white;
        .sidebar__navbar_group {
            display: flex;
            gap: 3.0416666666666667vw;
        }
    }
    .sidebar__btns {
        margin: 4.901960784313726vh 0;
        display: flex;
        gap: 1.0416666666666667vw;
        button {
            width: 5.208333333333333vw;
            height: 4.901960784313726vh;
            font-size: 2.2408963585434174vh;
            background: #1F1D2B;
            border: 1px solid #393C49;
            border-radius: 8px;
            color: #EA7C69;
            &.sidebar__btn_active {
                background-color: #EA7C69;
                color: white;
                border: none;
                box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.32);
            }
        }
    }
}
.sidebar__container {
    border: 1px solid #393C49;
    border-left: none;
    border-right: none;
    height: 52.01960784313726vh;
    overflow-y: scroll;
}
.confirmation__section {
    position: absolute;
    width: 94%;
    left: 6%;
    background-color: #1f1d2bb7;
    height: 100vh;
    overflow: hidden;
}
.continue__btn {
    width: 100%;
    margin: 0 auto;
    font-size: 2.2408963585434174vh;
    padding: 1.9607843137254901vh 0.9114583333333334vw;
    background: #EA7C69;
    box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.3);
    border-radius: 8px;
    color: white;
    border: 1px solid #EA7C69;
}
.flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1.2408963585434174vh 0;
    padding: 0.2408963585434174vh 0;
    span {
        color: white;
    }
}
@media (min-width: 0px) and (max-width: 520px) {
    .home__sidebar {
        display: none;
    }
    .home__section {
        .home__title {
            flex-direction: column;
            align-items: flex-start;
            gap: 2.2408963585434174vh;
            margin-bottom: 4.901960784313726vh;
        }
        .home__title_input {
            width: 100%;
            input {
                width: 100%;
                font-size: 1.8011204481792715vh;
            }
        }
        .products__content {
            flex-wrap: wrap;
        }
        .home__navbar {
            height: 25.011204481792717vh;
            width: 90%;
            margin: 0 auto;
            ul {
                flex-wrap: wrap;
                gap: 1.680672268907563vh;
            }
        }
    }
}</style>