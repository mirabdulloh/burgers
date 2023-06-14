<template>
    <div class="news__section">
        <div class="news__container">
            <div class="news__title">
                <h1>New Products</h1>
            </div>
            <div class="news__navbar">
                <ul class="news__group">
                    <li @click="changeCategory('All')">All</li>
                    <li @click="changeCategory('hot')">hot</li>
                    <li @click="changeCategory('cold')">cold</li>
                    <li @click="changeCategory('soup')">soup</li>
                    <li @click="changeCategory('appetiz')">appetiz</li>
                    <li @click="changeCategory('desert')">desert</li>
                </ul>
                <div class="news__search">
                    <input type="search" v-model="search" placeholder="Search your food...">
                </div>
            </div>
            <div class="news__content" >
                <div v-for="product in filteredProducts" class="products__cards">
                    <ProductItem :product="product" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ProductItem from '../ProductItem/ProductItem.vue';
export default {
    data() {
        return {
            category: "All",
            search: ""
        };
    },
    props: {
        new_products: {
            type: Array,
            required: true
        }
    },
    computed: {
        filteredProducts() {
            if (this.category === "All") {
                return this.new_products.filter((product) => {
                    return product.name.toLowerCase().includes(this.search.toLowerCase());
                });
            }
            else {
                return this.new_products.filter((product) => {
                    return product.category.toLowerCase() === this.category.toLowerCase() && product.name.toLowerCase().includes(this.search.toLowerCase());
                });
            }
        }
    },
    methods: {
        changeCategory(category) {
            this.category = category;
        }
    },
    components: { ProductItem }
}
</script>
<style lang="scss">
    .news__section {
        height: 150vh;
        background-color: #252836;
        color: white;
        width: 100%;
        padding: 2.5210084033613445vh 1.0416666666666667vw;
        .news__container {
            width: 100%;
            max-width: 85.125vw;
            margin: 0 auto;
            .news__content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                margin-top: 15.442577030812325vh;
            }
        }
        
        .news__navbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 2.5210084033613445vh;
            .news__group {
                display: flex;
                gap: 1.0416666666666667vw;
                li {
                    cursor: pointer;
                    &:hover {
                        color: #EA7C69;
                    }
                }
            }
            .news__search {
                input {
                    padding: 1.5210084033613445vh;
                    width: 16.276041666666668vw;
                    background-color: #1F1D2B;
                    border: 1px solid #1F1D2B;
                    outline: none;
                    color: white;
                    box-shadow: 0 0 8px 0 #1F1D2B;
                    border-radius: 10px;
                }
            }
        }
        .products__cards {
            width: 30%;
        }
    }
    @media (min-width: 0px) and (max-width: 520px) {
        .news__section {
            height: 100%;
            .news__navbar {
                flex-direction: column;
                gap: 2.5210084033613445vh;
                align-items: initial;
                .news__group {
                gap: 2.5210084033613445vh;
                }
                .news__search {
                    input {
                        width: 100%;
                    }
                }
            }
            .products__cards {
                width: 90%;
                margin: 0 auto;
            }
        }
    }
</style>