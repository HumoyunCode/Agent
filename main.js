document.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.getElementById("add-product");
    const productContainer = document.getElementById("product-space");
    let productsData = []; 

    fetch("baza.json")
    .then(response => response.json())
    .then(data => {
      productsData = data;
      // Boshlang‘ich selectni to‘ldirish
      const firstSelect = productContainer.querySelector("select");
      fillOptions(firstSelect, productsData);
    })
    .catch(err => console.error("Xatolik:", err));


    function fillOptions(selectEl, data) {
        selectEl.innerHTML = ""; // eski optionlarni tozalash
        data.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        selectEl.appendChild(option);
        });
    }

    addBtn.addEventListener("click", function () {
        const inputGroup = document.createElement("div");
        inputGroup.className = "product-space";
        inputGroup.innerHTML = `
        <select name="product" class="product-select"></select>
        <input type="number" placeholder="Mahsulot miqdorini kiriting">
        <input type="number" placeholder="Mahsulot summasi">
        <button class="remove-btn">-</button>
        `;
        productContainer.appendChild(inputGroup);

        const newSelect = inputGroup.querySelector("select");
        fillOptions(newSelect, productsData);

        productContainer.addEventListener("click", function (e) {
            if (e.target.classList.contains("remove-btn")) {
            e.target.parentElement.remove();
            }
        });
    });

});