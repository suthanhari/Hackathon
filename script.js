async function getData() {

    try {
        let api = await fetch("https://cataas.com/api/cats");
        return await api.json()
    
    
    } catch (error) {
        console.log(error);
    }
    
    try {
        let api1 = await fetch("https://cataas.com/api/cats");
        return await api1.json()
    } catch (error) {
        console.log(error);
    }
    }
    getData()
    
    .then(function (data) {
    
        let mainDiv = document.createElement("div");
    
        let subDiv = document.createElement("div")
        let form = document.createElement("form")
        form.setAttribute("id", "forms");
        let put = document.createElement("input");
        put.setAttribute("id", "inp");
        let btn = document.createElement("button");
        btn.setAttribute("id", "btns");
        btn.innerHTML = "search";
        btn.style.height = "36px";
        btn.style.width = "70px";
        btn.style.marginLeft = "10px";
        btn.style.border = "none";
    
        put.style.width = "75%";
        put.style.padding = "12px 20px 12px 40px";
        put.style.border = "1px solid #ddd";
        put.style.marginBottom = "12px";
    
    
        subDiv.setAttribute("class", "searchBar");
    
        put.setAttribute("id", "inp");
        form.style.display = "flex";
        form.style.justifyContent = "center";
       
    
        put.setAttribute("placeholder", "search");
    
    
        let row = document.createElement("div");
        row.setAttribute("class", "row");
        mainDiv.style.marginTop = "30px";
    
    
    
    
        data.forEach(element => {
            let col = document.createElement("div");
            let card = document.createElement("div");
            let img = document.createElement("img");
            img.setAttribute("onmouseover", "smaller(e)");
            img.src = " https://cataas.com/cat/" + element.id
    
    
            col.setAttribute('class', 'column');
            card.setAttribute('class', 'card');
            img.style.width = "600px"
            img.style.height = "400px"
            col.style.display = "flex";
            col.style.float = "left";
            col.style.marginLeft = "85px";
            col.style.marginTop = "10px";
    
    
            card.style.boxShadow = " 8px 10px 10px 8px rgba(0,0,0,0.2)";
            card.style.padding = "20px";
            card.style.backgroundColor = "#d3cbbd";
            card.style.borderRadius = "10px";
    
    
    
    
    
    
            mainDiv.appendChild(subDiv);
            subDiv.appendChild(form);
            form.appendChild(put);
            form.appendChild(btn);
            mainDiv.appendChild(row);
            row.appendChild(col);
            col.appendChild(card);
            card.appendChild(img);
    
    
            document.body.appendChild(mainDiv);
    
        })
    
        function smaller(e) {
            e.style.height = "500"
            e.style.width = "300"
            
        }
    
        document.getElementById("btns").addEventListener("click",function(){
            alert ("Data Not Found");
        })
    });
    