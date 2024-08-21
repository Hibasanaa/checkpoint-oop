class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Method to calculate the total price of the item
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    // Method to get the total of items inside the cart
    getTotal() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    // Method to add items to the cart
    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            const newItem = new ShoppingCartItem(product, quantity);
            this.items.push(newItem);
        }
    }

    // Method to remove items from the cart
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Method to display cart items
    displayItems() {
        this.items.forEach(item => {
            console.log(`${item.product.name} (x${item.quantity}): $${item.getTotalPrice().toFixed(2)}`);
        });
        console.log(`Total: $${this.getTotal().toFixed(2)}`);
    }
}
//  test 
// Create products
const apple = new Product(1, 'Apple', 0.99);
const banana = new Product(2, 'Banana', 1.29);
const orange = new Product(3, 'Orange', 1.49);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(apple, 3);
cart.addItem(banana, 2);
cart.addItem(orange, 1);

// Display the cart
cart.displayItems();  // Output: Apple (x3): $2.97, Banana (x2): $2.58, Orange (x1): $1.49, Total: $6.04

// Remove an item from the cart
cart.removeItem(2); // Remove bananas

// Display the cart again
cart.displayItems();  // Output: Apple (x3): $2.97, Orange (x1): $1.49, Total: $4.46
