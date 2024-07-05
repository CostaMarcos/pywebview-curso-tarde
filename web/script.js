const _name = document.getElementById("name");
const _quantity = document.getElementById("quantity");
const _price = document.getElementById("price");

function save() {
    console.log(_name.value);
    console.log(_quantity.value);
    console.log(_price.value);

    fetch("http://localhost:8000/api/products",
        {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name: _name.value,
                price: _price.value,
                quantity: _quantity.value
            })
        }).then(() => { 
            alert("Salvo com sucesso!")
        }).catch(() => {alert("Error")})
}