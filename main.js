document.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.getElementById("add-product");

    addBtn.addEventListener("click", function(e) {
       console.log("salom")

       const productContainer = document.getElementById("product-space")
       const inputGroup = document.createElement("div");
       inputGroup.className = "product-space"
       inputGroup.innerHTML = `
        <select name="product" id="product-1">
                <option value="mahsulot-1">Mahsulot-1</option>
                <option value="mahsulot-2">Mahsulot-2</option>
            </select>

            <input type="number" placeholder="Mahsulot miqdorini kiriting">
            <input type="number" placeholder="Mahsulot summasi">
            <button class="remove-btn" id="remove-product">-</button>
       `;
       productContainer.appendChild(inputGroup);

        document.getElementById("product-space").addEventListener("click", function (e) {
            if (e.target.classList.contains("remove-btn")) {
            e.target.parentElement.remove();
            }
        });
    });
});


// JSON fayldan malumot yuklash
fetch("baza.json")
  .then(response => response.json())
  .then(data => {
    // Har bir mahsulotni <option> sifatida qo‘shish
    data.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;        // value sifatida ID
      option.textContent = product.name; // ekranda ko‘rinadigan nom
      productSelect.appendChild(option);
    });
  })
  .catch(err => console.error("Xatolik:", err));