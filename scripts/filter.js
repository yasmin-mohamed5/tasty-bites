function filterProducts(category) {
    const products = document.getElementsByClassName('product');
    for (let i = 0; i < products.length; i++) {
    if (category === 'all' || products[i].classList.contains(category)) {
        products[i].style.display = 'block';
    } else {
        products[i].style.display = 'none';
    }
    }
}