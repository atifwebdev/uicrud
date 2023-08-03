const getAllData = async () => {
    try {

        const resp = await axios.get("http://localhost:3000/products");
        console.log("resp: ", resp);
        console.log("resp: ", resp.data.data);

        let productsDiv = document.querySelector("#myRow")
        productsDiv.innerHTML = "";

        resp.data.data.map(eachProduct => {
            productsDiv.innerHTML += `<tr>
                <td><span class="custom-checkbox"><input type="checkbox" id="checkbox1" name="options[]" value="1"><label for="checkbox1"></label></span></td>
                <td>${eachProduct._id}</td>
                <td>${eachProduct.name}</td>
                <td>${eachProduct.description}</td>
                <td>${eachProduct.price}</td>
                <td><a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a> <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a></td>
                </tr>`
        })


    } catch (e) {
        console.error("Error getting products");
    }
};

window.addEventListener("load", getAllData);



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