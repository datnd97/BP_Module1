let app = new  function()
{
     this.el = document.getElementById('products');
     this.products = ['Sony','SamSung','Nokia','Apple','Xiaomi'];
    



    this.fetchAll = function()
    {
        let data = "";
        if(this.products.length > 0)
        {
            for(let i = 0; i <this.products.length;i++)
            {
                data += "<tr>";
                data +="<td>"+this.products[i]+"</td>";
                data +="<td><button onclick='app.edit("+i+")'>Edit</button></td>";
                data +="<td><button onclick='app.delete("+i+")'>Delete</button></td>";
                data +="</tr>";

            }
        }
         this.counter(this.products.length);
        return this.el.innerHTML = data;
    }


    this.counter = function(data)
    {
       let el = document.getElementById('counter');
       let name = "product";
       if(data)
       {    
           el.innerHTML = data +" "+ name;
       }
       else
       {
           el.innerHTML ="No"+" "+ name;
       }
    }
    
    this.add = function()
    {   
        
       el = document.getElementById('add-name');
       let product  = el.value;
       if(product)
       {
            this.products.push(product.trim());
            el.value = "";
            this.fetchAll();
       }
    }
    this.delete = function(item)
    {
        this.products.splice(item,1);
        this.fetchAll();
    }
    this.edit = function(item)
    {   
        let el = document.getElementById('edit-name');
        el.value = this.products[item];
        // document.getElementById('spolier').style.display = "block";
        self = this;
        document.getElementById('saveEdit').onsubmit = function()
        {
            let product = el.value;
            if(product)
            {   
                debugger;
                self.products.splice(item,1,product.trim());
                
                self.fetchAll();
                closeInput();
            }
        }
    }
}
function closeInput()
{
    document.getElementById('spoiler').style.display = "none";
}

app.fetchAll();