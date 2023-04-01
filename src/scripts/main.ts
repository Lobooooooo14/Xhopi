import { productsList } from "./products.js"

const wrapper = document.querySelector(".wrapper") as HTMLDivElement
const footer = document.querySelector("footer") as HTMLElement
const main = document.querySelector("main") as HTMLElement
const searchInput = document.getElementById("search") as HTMLInputElement


export interface IProduct {
    category: string,
    name: string,
    image: string,
    description: string,
    was_discount: boolean,
    price: number
    discount?: number

}


function searchProducts(searchString: string , productsList: IProduct[]): IProduct[] {
    return productsList.filter(product => {
        const nameMatch = product.name.toLowerCase().includes(searchString.toLowerCase())
        const descMatch = product.description.toLowerCase().includes(searchString.toLowerCase())
        return nameMatch || descMatch
    })
}


function createProducts(products: IProduct[]): void {
    const productsDiv = document.getElementById("products") as HTMLDivElement

    productsDiv.innerHTML = ""
    
    let categories: string[] = []

    products.forEach(product => {
        if (!categories.includes(product.category)) categories.push(product.category)
    })
    
    categories.forEach((category: string) => {
        const categoryDiv = document.createElement("div") as HTMLDivElement
        const categoryTitle = document.createElement("h2") as HTMLHeadingElement

        categoryDiv.classList.add("category")
        categoryTitle.innerText = category
        categoryDiv.appendChild(categoryTitle)

        const productsListDiv = document.createElement("div") as HTMLDivElement
        productsListDiv.classList.add("products-list")

        products.forEach((product) => {
            if (product.category == category) {
                const productDiv = document.createElement("div") as HTMLDivElement
                productDiv.classList.add("product")

                const productContentDiv = document.createElement("div") as HTMLDivElement
                productContentDiv.classList.add("product-content")
                
                const productImage = document.createElement("img") as HTMLImageElement
                productImage.setAttribute("src", product.image)
                productImage.setAttribute("alt", product.description)

                productContentDiv.appendChild(productImage)

                const productName = document.createElement("h3") as HTMLHeadingElement
                productName.innerText = product.name

                productContentDiv.appendChild(productName)
                
                const productDescription = document.createElement("p") as HTMLParagraphElement
                productDescription.innerText = product.description

                productContentDiv.appendChild(productDescription)
                
                const productPrice = document.createElement("p") as HTMLParagraphElement
                productPrice.innerText = product.price.toString()
                productPrice.classList.add("price")
                
                productContentDiv.appendChild(productPrice)

                productDiv.appendChild(productContentDiv)
                productsListDiv.appendChild(productDiv)
            }
            categoryDiv.appendChild(productsListDiv)
        })
        productsDiv.appendChild(categoryDiv)
    })
}

createProducts(productsList)

wrapper.style.marginBottom = `-${footer.offsetHeight*-2}px`
main.style.marginBottom = `${footer.offsetHeight}px`

searchInput.addEventListener("input", () => {
    createProducts(searchProducts(searchInput.value, productsList))
})