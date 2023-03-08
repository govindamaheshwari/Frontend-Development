var forms = document.getElementById("btn");
var form = document.getElementById("uni")
var price = document.getElementById('sp');
var product = document.getElementById('pn');
var descp = document.getElementById('descp');
var category = document.getElementById('category');
var uie = document.getElementById("eitems");
var uif = document.getElementById("fitems");
var uisc = document.getElementById("scitems");
var a = 0;
var b;

reload();

forms.addEventListener('click', local);
async function local(e) {
    try{
    e.preventDefault();
    let myobj = {
        Sellingprice: price.value,
        Description: descp.value,
        Category: category.value,
        Product: product.value,

    }
    
    console.log('myobj', myobj);
    if (a == 0) {
        let res = await axios.post('https://crudcrud.com/api/f4f57b5228514aefb5ff007b2d512f82/appointmentData', myobj)
                console.log('aaa>>', res)
                showNewUserOnScreen(res.data)
    }
    else {

        let re = await axios.put(`https://crudcrud.com/api/f4f57b5228514aefb5ff007b2d512f82/appointmentData/${b}`, myobj)

                console.log('ggg>', re);
                 reload();


    }
    
    let myobj_serialized = JSON.stringify(myobj);

    localStorage.setItem(myobj.Description, myobj_serialized)
    console.log(localStorage);
    }
    catch(err) {
        console.log(err)
    }
}

function showNewUserOnScreen(x) {
    var parentName = document.createElement("li");
    parentName.id = x._id
    parentName.textContent = x.Sellingprice + "-" + x.Product + "-" + x.Description + "-" + x.Category;
    var deletes = document.createElement("button");
    var text = document.createTextNode("Delete User");
    deletes.appendChild(text);
    parentName.appendChild(deletes);
    var edits = document.createElement("button");

    var text = document.createTextNode("Edit User");
    edits.appendChild(text);
    parentName.appendChild(edits);
    if (x.Category == 'Electronics items') {
        uie.appendChild(parentName);
    }
    else if (x.Category == 'Food items') {
        uif.appendChild(parentName);
    } else {
        uisc.appendChild(parentName);
    }




    deletes.addEventListener('click', remove);
    async function remove(e) {
        try{
            e.preventDefault();
            console.log(e.target)
            localStorage.removeItem(x.Description)

                ;
            await axios.delete(`https://crudcrud.com/api/f4f57b5228514aefb5ff007b2d512f82/appointmentData/${parentName.id}`)
            if (x.Category == 'Electronics items') {
                uie.removeChild(parentName);
            }
            else if (x.Category == 'Food items') {
                uif.removeChild(parentName);
            } else {
                uisc.removeChild(parentName);
            }
        }
        catch(err){
            console.log(err)
        }
    }


    edits.addEventListener('click', edit);
    function edit(e) {
        e.preventDefault();
        a = 1;
        price.value = ""
        descp.value = ""
        category.value = ''
        product.value = ''
        b = parentName.id;
        console.log(b)
        price.value = x.Sellingprice
        product.value = x.Product
        descp.value = x.Description
        category.value = x.Category
        localStorage.removeItem(x.Description);
        if (x.Category == 'Electronics items') {
            uie.removeChild(parentName);
        }
        else if (x.Category == 'Food items') {
            uif.removeChild(parentName);
        } else {
            uisc.removeChild(parentName);
        }

    }

}

async function reload() {
    try{
        a=0;
        uie.innerHTML = '';
        uif.innerHTML = '';
        uisc.innerHTML = '';
        let resp = await  axios.get('https://crudcrud.com/api/f4f57b5228514aefb5ff007b2d512f82/appointmentData')
                console.log('sss>', resp)
                for (var i = 0; i < resp.data.length; i++) {
                    showNewUserOnScreen(resp.data[i])
                }
    }
    catch(err){
        console.log(err)
    }
}


