// Add Product
document.querySelector("#addProductForm")
    .addEventListener('submit', async (event) => {
        event.preventDefault();

        const name = document.querySelector('#name').value;
        const price = document.querySelector('#price').value;
        const description = document.querySelector('#description').value;
        // console.log(name, price, description);

        try {
            const resp = await axios.post(`https://different-earrings-toad.cyclic.app/product`, {
                name: name,
                price,
                description
            });
            // console.log("resp: ", resp.data);
            document.querySelector("#addEmployeeModal").style.display = "none";
            document.querySelector(".modal-backdrop").style.display = "none";
            getAllData();

        } catch (e) {
            console.error("Error getting products");
        }

    })



// Get All Products 
const getAllData = async () => {
    try {

        // const resp = await axios.get("http://localhost:3000/products");
        const resp = await axios.get("https://different-earrings-toad.cyclic.app/products");
        // console.log("resp: ", resp);
        // console.log("resp: ", resp.data.data);

        let productsDiv = document.querySelector("#myRow")
        productsDiv.innerHTML = "";

        resp.data.data.map(eachProduct => {
            productsDiv.innerHTML += `<tr>
                <td><span class="custom-checkbox"><input type="checkbox" id="checkbox1" name="options[]" value="1"><label for="checkbox1"></label></span></td>
                <td>${eachProduct._id}</td>
                <td>${eachProduct.name}</td>
                <td>${eachProduct.description}</td>
                <td>${eachProduct.price}</td>
                <td><a href="#editEmployeeModal" onclick='editProduct(${JSON.stringify(eachProduct)})' class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a> <a href="#deleteEmployeeModal" id="deletePro" onclick="deleteProduct('${eachProduct._id}')" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a></td>
                </tr>`
        })


    } catch (e) {
        console.error("Error getting products");
    }
};

window.addEventListener("load", getAllData);



// Edit a Product
window.editProduct = async (product) => {

    // console.log("product: ", product);

    document.querySelector('#uptname').value = product.name;
    document.querySelector('#uptprice').value = product.price;
    document.querySelector('#uptdescription').value = product.description;

    document.querySelector("#uptPro")
        .addEventListener('submit', async (event) => {
            event.preventDefault();
            const id = product._id;
            // console.log(id);
            try {
                const name = document.querySelector('#uptname').value;
                const price = document.querySelector('#uptprice').value;
                const description = document.querySelector('#uptdescription').value;
                const resp = await axios.put(`https://different-earrings-toad.cyclic.app/product/${id}`, {
                    name, price, description
                });
                // console.log("resp: ", resp.data);
                document.querySelector("#editEmployeeModal").style.display = "none";
                document.querySelector(".modal-backdrop").style.display = "none";
                getAllData();

            } catch (e) {
                console.error("Error getting products");
            }
        });

}




// Delete Product
window.deleteProduct = async (id) => {

    document.querySelector("#delProduct")
        .addEventListener('submit', async (event) => {
            event.preventDefault();
            try {
                // console.log("id: ", id);
                const resp = await axios.delete(`https://different-earrings-toad.cyclic.app/product/${id}`);
                // console.log("resp: ", resp.data);
                document.querySelector("#deleteEmployeeModal").style.display = "none";
                document.querySelector(".modal-backdrop.fade.show").style.display = "none";
                getAllData();
            } catch (e) {
                console.error("Error getting products");
            }
        });
}




// Old Code
    // const temp = axios.get(`https://clean-fish-sweatpants.cyclic.cloud/products`);
    // temp.then((res) => {
    //     console.log(res);
    //     console.log(res.data);
    //     for(let i=0; i<=res.data.length; i++){
    //         console.log(res.data[i]);
    //         const proId = document.querySelector("#idPrd");
    //         const proName = document.querySelector("#namePrd");
    //         const proDes = document.querySelector("#desPrd");
    //         const proPrc = document.querySelector("#priPrd");
    //         const myTable = document.querySelector("#myRow");
    //         const row = document.createElement("tr");
    //         const cell = document.createElement("td");
    //         const cell1 = document.createElement("td");
    //         const cell2 = document.createElement("td");
    //         const cell3 = document.createElement("td");
    //         const cell4 = document.createElement("td");
    //         const cell5 = document.createElement("td");
    //         const cellText1 = document.createTextNode(`${res.data[i]._id}`);
    //         const cellText2 = document.createTextNode(`${res.data[i].name}`);
    //         const cellText3 = document.createTextNode(`${res.data[i].description}`);
    //         const cellText4 = document.createTextNode(`${res.data[i].price}`);
    //         cell.innerHTML += '<span class="custom-checkbox"><input type="checkbox" id="checkbox1" name="options[]" value="1"><label for="checkbox1"></label></span>';
    //         cell1.appendChild(cellText1);
    //         cell2.appendChild(cellText2);
    //         cell3.appendChild(cellText3);
    //         cell4.appendChild(cellText4);
    //         cell5.innerHTML += '<a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a> <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>';
    //         row.appendChild(cell);
    //         row.appendChild(cell1);
    //         row.appendChild(cell2);
    //         row.appendChild(cell3);
    //         row.appendChild(cell4);
    //         row.appendChild(cell5);
    //         myTable.appendChild(row);
    //     }
    // })
    //     .catch((err) => {
    //         console.log(err);
    //     });