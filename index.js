
let dataCollector = [];

let universityData = () =>{

    
    let URL = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
    let universityData = fetch(URL);
    universityData = fetch(data => data.json())
    .then((data) => {
        dataCollector = data
        console.log(data[0])
        console.log(data.type)
     })
    
        .catch(err => console.log(err));
    }

universityData();

setTimeout(() => {
    console.log(dataCollector)
},10000) 
