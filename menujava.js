document.addEventListener('DOMContentLoaded', function () {
    // Get the market icon element and other html elements
    const marketIcon = document.getElementById('market-icon');
    const marketCounter = document.getElementById('market-counter');
    const marketModal = document.getElementById('market-modal');
    const marketItemsList = document.getElementById('market-items-list');

    // Initialize the counter and array for selected items
    let itemCount = 0;
    const selectedItems = [];
    let totalAmount = 0

    // Load previously saved items from session storage
    loadSavedItems();

    // Add a click event listener to each menu item image
    const menuImages = document.querySelectorAll('.box img');
    menuImages.forEach(image => {
        image.addEventListener('click', function () {
            // Get information about the selected item
            const itemDescription = this.parentNode.querySelector('p').textContent.trim();

            // Resize the image before converting to Base64
            const resizedImage = resizeImage(this, 150, 100); // Adjust the size as needed

            // Convert the resized image to a Base64-encoded string
            const itemImageBase64 = getBase64FromImage(resizedImage);

            // Get information about the selected item
            const thirdParagraph = this.parentNode.querySelector('p:nth-child(3)').textContent.trim();


            // Add the selected item to the array
            selectedItems.push({ image: itemImageBase64, description: itemDescription, thirdParagraph: thirdParagraph });

            // Update the market counter
            itemCount++;
            updateMarketCounter();


            // You can also update the UI to indicate the item was added
            alert(`${itemDescription} added to market!`);

            // Save the selected items to session storage
            saveItemsToLocalStorage();
        });
    });

    // Add a click event listener to the market icon to show the items in the market modal
    marketIcon.addEventListener('click', function () {
        // Show the modal
        marketModal.style.display = 'block';

        // Populate the modal with market items
        updateMarketModal();
    });

    // Function to resize the image
    function resizeImage(image, width, height) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(image, 0, 0, width, height);
        return canvas;
    }

    // Function to convert the image to a Base64-encoded string
    function getBase64FromImage(image) {
        return image.toDataURL('image/png');
    }

    // Function to add an item to the market modal
    function addItemToMarketModal(item) {
        const listItem = document.createElement('li');
        const itemAmount = parseFloat(item.thirdParagraph.replace(/[^\d.]/g, ''));
        listItem.innerHTML = `
            <img src="${item.image}" alt="${item.description}">
            <div>${item.description}</div>
            <div>${item.thirdParagraph}</div>
        `;
        marketItemsList.appendChild(listItem);

        // Update the total amount
        totalAmount += itemAmount;

        // Update the displayed total
        updateTotalAmount();
    }

    // Function to update the market modal with selected items
    function updateMarketModal() {
        marketItemsList.innerHTML = ''; // Clear previous items
        totalAmount = 0;
        // Add your logic to fetch and display market items
        // For now, just adding the selected items
        selectedItems.forEach(item => {
            addItemToMarketModal(item);
        });

        // Update the total amount displayed in the modal
        updateTotalAmount();
    }

    // Function to update the market counter
    function updateMarketCounter() {
        marketCounter.textContent = itemCount;
    }

    function updateTotalAmount() {
        // Display the total amount in the modal
        const totalAmountElement = document.getElementById('total-amount');
        totalAmountElement.textContent = `$${totalAmount.toFixed(2)}`;
    }

    // Function to load previously saved items from session storage
    function loadSavedItems() {
        const savedItems = sessionStorage.getItem('selectedItems');
        if (savedItems) {
            selectedItems.push(...JSON.parse(savedItems));
            itemCount = selectedItems.length;
            updateMarketCounter();
        }
    }

    // Function to save items to Session Storage
    function saveItemsToLocalStorage() {
        sessionStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    }


    // Add a click event listener to close the modal when the close button is clicked
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', function () {
        marketModal.style.display = 'none';
        saveItemsToLocalStorage();
    });

    // Add a click event listener to close the modal when clicking outside the modal
    window.addEventListener('click', function (event) {
        if (event.target === marketModal) {
            marketModal.style.display = 'none';
            saveItemsToLocalStorage();
        }
    });
});