const productBoxDetails = document.getElementById('product-box');

function trimDescription(description, wordCount) {
    const words = description.split(' ');
    if (words.length > wordCount) {
        return words.slice(0, wordCount).join(' ') + '...';
    }
    return description;
}

function getProducts() {
    // Replace the real API URL with a placeholder fake URL
    const fakeApiUrl = 'https://fakestoreapi.com/products'; // Placeholder fake API URL
    fetch(fakeApiUrl)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if (data.length > 0) { // Check if data is not empty
            data.forEach(product => {
                const trimmedDescription = trimDescription(product.description, 150); // Trim description to 150 words
                html += `
                <div class="col-md-4 mt-1 mb-5">
                    <div class="card" data-id="${product.id}">
                        <img src="${product.image}" class="card-img-top" alt="${product.title}">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <h6><span>$</span>${product.price}</h6>
                            <h6>Product Rating : ${product.rating.rate} </h6>    
                            
                            <a href="#" class="btn btn-primary product-btn" data-productid="${product.id}">Add To Cart</a>
                        </div>
                    </div>
                </div>`;
            });

            productBoxDetails.innerHTML = `
                <div class="row">
                    ${html}
                </div>`;
        } else {
            html = "Sorry, we didn't find any product!";
            productBoxDetails.innerHTML = html;
        }
    });
}

// Call getProducts to fetch products directly
getProducts();
