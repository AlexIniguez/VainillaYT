console.log('Conectado')

const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll('.menuItem')

const product = [
    {
        id: 1,
        tittle: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./img/air.png"
            },
            {
            code: "darkblue",
            img: "./img/air2.png"
            }
        ]
    },
    {
        id: 2,
        tittle: "Jordan",
        price: 149,
        colors: [
            {
                code: "ligthgray",
                img: "./img/jordan.png"
            },
            {
            code: "darkblue",
            img: "./img/jordan2.png"
            }
        ]
    },
    {
        id: 3,
        tittle: "Air Blazer",
        price: 109,
        colors: [
            {
                code: "ligthgray",
                img: "./img/blazer.png"
            },
            {
            code: "green",
            img: "./img/blazer2.png"
            }
        ]
    },
    {
        id: 4,
        tittle: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "./img/crater.png"
            },
            {
            code: "ligthgray",
            img: "./img/crater2.png"
            }
        ]
    },
    {
        id: 5,
        tittle: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "./img/hippie.png"
            },
            {
            code: "black",
            img: "./img/hippie2.png"
            }
        ]
    },
]

let choosenProduct = product[0]

const currentProductImg = document.querySelector(".productImg")
const currentProductTittle = document.querySelector(".productTittle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductColors = document.querySelectorAll(".color")
const currentProductSizes = document.querySelectorAll(".size")

menuItems.forEach( (item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`
        choosenProduct = product[index]
        currentProductTittle.textContent = choosenProduct.tittle
        currentProductPrice.textContent = choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img

        currentProductColors.forEach( (color, index) =>{
            color.style.backgroundColor = choosenProduct.colors[index].code
        })
        //console.log(choosenProduct)
    })
})


currentProductColors.forEach( (color, index) => {
    color.addEventListener("click", () =>{
    currentProductImg.src =choosenProduct.colors[index].img
    })
})


currentProductSizes.forEach( (size) => {
    size.addEventListener("click", () =>{
        currentProductSizes.forEach( (size) =>{
            size.style.backgroundColor = "white"
            size.style.color = "black"
        })
        size.style.backgroundColor = "black"
        size.style.color = "white"
    })
})

const productButton = document.querySelector(".productButton")
const payment = document.querySelector(".payment")
const close = document.querySelector(".close")

productButton.addEventListener("click", () =>{
    payment.style.display = "flex"
})

close.addEventListener("click", () => {
    payment.style.display = "none"
})