Vue.component('product', {
    template: `<div class="product">
    <div class="product-image">
        <img :src="image">
    </div>
    <div class="product-info">
        <h1>{{product.name}}</h1>
        {{product.description}}
        <h3>For more information: click
            <a :href="sourceInformation" target="_blank">here</a>
        </h3>
        <span v-show="onSale">On Sale!</span>
        <p :class="{outOfStock: !inStock}">Out of Stock</p>
        <p v-show="onSale">{{nameOfBrand}}</p>
        <span>Colors:</span>
        <ul>
            <li v-for="(detail,index) in productDetails">
                <span @mouseover="updateProductImage(index)">
                    {{detail.color}}
                </span>
            </li>
        </ul>
        <productDetails :details="details"></productDetails>
    </div>
    <button v-on:click="addToCart()" 
        :disabled="!inStock"
        :class="{disabledButton: !inStock}">Add2Cart</button>    
    <button v-on:click="removeToCart()">Take Cart off</button>

</div>`,
    data() {
        return {
            product: {
                name: 'Socks',
                description: "Medias"
            },
            //inStock: false,
            
            selectedProductDetail: 0,
            //image: "blueSock.jpeg",
            sourceInformation: "https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding",
            onSale: true,
            details: ['80% cotton','20% polyester','Gender-Neutral'],
            productDetails: [
                {
                    id: 1,
                    size: "M",
                    color: "Verde",
                    image: "greenSock.png",
                    brand: "Punto blanco",
                    quantity: 100
                },
                {
                    id: 2,
                    size: "L",
                    color: "Azul",
                    image: "blueSock.png",
                    brand: "Gef",
                    quantity: 0
                }
            ]
        }
    },
    methods: {
        updateProductImage: function (index) {
            this.selectedProductDetail = index
        },
        addToCart: function () {
            this.$emit('add-to-cart',this.productDetails[this.selectedProductDetail].id)
        },
        removeToCart() {
            this.$emit('delete-of-cart',this.productDetails[this.selectedProductDetail].id)
        }
    },
    computed: {
        image() {
            return this.productDetails[this.selectedProductDetail].image
        },
        inStock() {
            return this.productDetails[this.selectedProductDetail].quantity
        },
        nameOfBrand() {
            return this.productDetails[this.selectedProductDetail].brand + ' ' + this.product.name
        }
    }
})

Vue.component('productDetails',{
    props:{
        details: {
            type: Array,
            required: true
        }
    },
    template: `
    <ul>
        <li v-for="detail in details">{{detail}}</li>
    </ul>`
})
var app = new Vue({
    el: '#app',
    data: {
        cart: [],
    },
    methods:{
        addToCart: function (id) {
            this.cart.push(id)
        },
        removeToCart(id) {
            this.cart.splice(id,1)
        }
    }

})