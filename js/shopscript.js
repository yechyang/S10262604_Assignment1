let items = {
    "Croissant": 4,
    "Original Kouign Amann": 5,
    "Pain Au Chocolat": 5.60,
    "Chocolate Croissant": 6.50,
    "Almond Croissant": 6.50,
    "Cinnamon Rolls": 4,
    "Doughnut": 3.60,
    "Chocolate Eclairs": 8,
    "Chocolate Tart": 8.50,
    "Baguette": 5.40,
    "SourDough": 10.10,
    "Rye Sourdough": 12.90,
    "Bagel": 4,
}

document.addEventListener('DOMContentLoaded', function () {
    // Get references to the relevant elements
    let itemSelect = document.getElementById('items1');
    let numberSelect = document.getElementById('numberofitems1');
    let totalPriceParagraph = document.querySelector('.inputbox p:nth-child(2)');

    let itemSelect2 = document.getElementById('items2');
    let numberSelect2 = document.getElementById('numberofitems2');
    let totalPriceParagraph2 = document.querySelector('.inputbox p:nth-child(2)');

    // Attach an event listener to the form for the 'change' event
    document.querySelector('form').addEventListener('change', function () {
        // Get the selected item and number of items
        let selectedItem = itemSelect.value;
        let numberOfItems = parseInt(numberSelect.value);
        let selectedItem1 = itemSelect2.value;
        let numberOfItems2 = parseInt(numberSelect2.value)

        // Check if the selected item is in the 'items' object
        if (selectedItem in items && selectedItem1 in items) {
            // Calculate the total price
            const totalPrice = (items[selectedItem] * numberOfItems)+(items[selectedItem1]*numberOfItems2);

            // Display the total price in the appropriate inputbox
            totalPriceParagraph.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
        }
        else if(selectedItem in items){
            const totalPrice = items[selectedItem] * numberOfItems

            totalPriceParagraph.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
        }
    });
});