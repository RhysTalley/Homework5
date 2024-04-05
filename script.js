fetch("https://randomuser.me/api/?results=5").then((data)=>{
    return data.json(); // converts to object
}).then((dataObject)=>{
    let dataString = "";
    console.log(dataObject);
    dataObject.results.map((input)=>{
        dataString +=`<tr>
        <td>${input.name.title} ${input.name.first} ${input.name.last}</td>
        <td>${input.location.city}</td>
        </tr>`;
    });
    console.log(dataString);
    document.getElementById("table_body").innerHTML=dataString;
})