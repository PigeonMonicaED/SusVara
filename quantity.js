function decrementQuantity() {
    const input = document.getElementById('quantity');
    let currentValue = parseInt(input.value);
    const min = parseInt(input.min);
    if (currentValue > min) {
        input.value = currentValue - 1;
    }
}

function incrementQuantity() {
    const input = document.getElementById('quantity');
    let currentValue = parseInt(input.value);
    const max = parseInt(input.max);
    if (currentValue < max) {
        input.value = currentValue + 1;
    }
}

