var app = new Vue({
    el : '#app',
    data: {
        product: {
            name: 'Socks',            
            description: "Medias"
        },
        //inStock: false,
        cart: 0,
        selectedProductDetail: 0,
        //image: "blueSock.jpeg",
        sourceInformation: "https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding",
        onSale: true,
        productDetails: [
            {
                id:1,
                size: "M",
                color: "Verde",
                image: "greenSock.png",
                brand: "Punto blanco",
                quantity: 100
            },
            {
                id:2,
                size: "L",
                color: "Azul",
                image: "blueSock.png",
                brand: "Gef",
                quantity: 0
            }
        ]
    },
    methods: {
        updateProductImage: function(index){
            this.selectedProductDetail = index
        },
        addToCart: function (){
            this.cart += 1
        },
        removeToCart(){
            this.cart -=1
        }
    },
    computed: {
        image () {
            return this.productDetails[this.selectedProductDetail].image
        },
        inStock () {
            return this.productDetails[this.selectedProductDetail].quantity
        },
        nameOfBrand(){
            return this.productDetails[this.selectedProductDetail].brand + ' ' + this.product.name
        }
    }
})