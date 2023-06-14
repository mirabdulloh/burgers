<template>
    <div class="products__container" v-for="product in ordersArray" v-if="ordersArray.length > 0">
        <div class="product__content" >
            <div class="product__title">
                <div class="product__image">
                    <img src="../img/Food.png" alt="">
                    <span class="product__slice">{{ product.name }}</span>
                </div>
                <div class="product__control">
                    <input type="number" @input="handleShowValue(product, product.id)" v-model="quanty" id="orderQuantity" :maxlength="2">
                    <span>{{ product.price }}</span>
                </div>
            </div>
            <div class="product__input">
                <input type="text" placeholder="Order Note...">
                <button class="btn__delete" @click="handleDelete">
                    <i class="bx bx-trash"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="products__container" v-else>
        <h1 class="text__center">Not Date</h1>
    </div>
</template>
<script>
export default {
    data() {
        return {
            quanty: 0,
            total: 0
        }
    },
    props: {
        ordersArray: {
            type: Array,
            required: true
        }
    },
    computed: {
        
    },
    methods: {
        handleDelete() {
            this.$emit('delete', this.id)
        },
        handleShowValue(item, id) {
            if(item.id == id) {
                this.total = item.price*this.quanty;
                this.$emit('total', this.total)
            }
        }
    }
}
</script>
<style lang="scss">
.product__content {
    margin-bottom: 1rem;
    padding: 1rem 0;
}
.product__title {
    display: flex;
    align-items: center;
    gap: 3.2552083333333335vw;
    margin-bottom: 1.5011204481792715vh;
    color: white;
    .product__image {
        display: flex;
        gap: 0.2552083333333335vw;
        align-items: center;
        img {
            width: 3.2552083333333335vw;
            height: 7.002801120448179vh;
            border-radius: 50%;
        }
    }
    .product__slice {
        width: 12.276041666666668vw; 
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 2.4607843137254901vh;
    }
}
.product__control {
    display: flex;
    align-items: center;
    gap: 1.6276041666666667vw;
    #orderQuantity {
        width: 3.125vw;
        height: 6.722689075630252vh;
        background: #2D303E;
        border: 1px solid #393C49;
        border-radius: 8px;
        color: white;
        outline: none;
        padding: 0 1.0416666666666667vw;
        &::-webkit-inner-spin-button,&::-webkit-outer-spin-button {
            -webkit-appearance: none !important;
        }
    }
    span {
        color: white;
    }
}
.product__input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
        width: 22.041666666666668vw;
        padding: 1.5210084033613445vh;
        outline: none;
        border-radius: 0.5208333333333334vw;
        font-size: 1.9607843137254901vh;
        border: 1px solid #393C49;
        background-color: #2D303E;
        color: white;
    }
    .btn__delete {
        padding: 1.6210084033613445vh;
        background-color: transparent;
        border: 1px solid #EA7C69;
        color: #EA7C69;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
            background-color: #EA7C69;
            color: white;
        }
    }
}
.text__center {
    text-align: center;
    padding: 1rem 0;
    color: white;
}
</style>