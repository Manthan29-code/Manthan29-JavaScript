var countries = [
    { country: "United States", gdp: 25.3, population: 331, gdpPerCapita: 76435, unemploymentRate: 3.5, inflationRate: 3.2 },
    { country: "China", gdp: 17.7, population: 1441, gdpPerCapita: 12287, unemploymentRate: 5.3, inflationRate: 2.3 },
    { country: "Japan", gdp: 4.9, population: 126, gdpPerCapita: 38889, unemploymentRate: 2.6, inflationRate: 0.5 },
    { country: "Germany", gdp: 4.2, population: 83, gdpPerCapita: 50602, unemploymentRate: 3.0, inflationRate: 4.0 },
    { country: "India", gdp: 3.7, population: 1408, gdpPerCapita: 2626, unemploymentRate: 7.2, inflationRate: 5.6 },
    { country: "United Kingdom", gdp: 3.2, population: 67, gdpPerCapita: 47786, unemploymentRate: 4.2, inflationRate: 6.3 },
    { country: "France", gdp: 3.1, population: 65, gdpPerCapita: 47692, unemploymentRate: 7.4, inflationRate: 5.2 },
    { country: "Italy", gdp: 2.1, population: 60, gdpPerCapita: 35000, unemploymentRate: 8.5, inflationRate: 8.0 },
    { country: "Canada", gdp: 2.2, population: 39, gdpPerCapita: 56410, unemploymentRate: 5.0, inflationRate: 4.8 },
    { country: "Russia", gdp: 1.8, population: 145, gdpPerCapita: 12414, unemploymentRate: 5.6, inflationRate: 10.5 },
    { country: "South Korea", gdp: 1.8, population: 52, gdpPerCapita: 34615, unemploymentRate: 3.2, inflationRate: 3.8 },
    { country: "Australia", gdp: 1.7, population: 26, gdpPerCapita: 65384, unemploymentRate: 3.9, inflationRate: 4.7 },
    { country: "Brazil", gdp: 1.6, population: 214, gdpPerCapita: 7470, unemploymentRate: 8.9, inflationRate: 8.7 },
    { country: "Mexico", gdp: 1.3, population: 126, gdpPerCapita: 10317, unemploymentRate: 3.7, inflationRate: 6.0 },
    { country: "Indonesia", gdp: 1.2, population: 277, gdpPerCapita: 4333, unemploymentRate: 5.5, inflationRate: 5.1 },
    { country: "Netherlands", gdp: 1.0, population: 17, gdpPerCapita: 58823, unemploymentRate: 3.8, inflationRate: 3.4 },
    { country: "Saudi Arabia", gdp: 0.9, population: 35, gdpPerCapita: 25714, unemploymentRate: 6.0, inflationRate: 2.5 },
    { country: "Turkey", gdp: 0.8, population: 85, gdpPerCapita: 9411, unemploymentRate: 9.6, inflationRate: 36.1 },
    { country: "Switzerland", gdp: 0.8, population: 8, gdpPerCapita: 100000, unemploymentRate: 2.2, inflationRate: 1.2 },
    { country: "Nigeria", gdp: 0.5, population: 223, gdpPerCapita: 2242, unemploymentRate: 33.3, inflationRate: 22.0 }
];


function createTable(table)
{
    const tbody=document.getElementById("tbody");
    for (let Data of table)
    {
        console.log(Data);       
        const tr=document.createElement("tr");
        for (let key of Object.keys(Data))
        {
            const TD= document.createElement("td"); 
            TD.innerHTML=Data[key];
            console.log(TD);           
            tr.appendChild(TD);  
        }
        console.log(tr.innerHTML);     
        tbody.appendChild(tr);
    }
    
}

createTable(countries);

const GDP= document.getElementById("GDP");
const gdppercapita= document.getElementById("gdppercapita");
const inflationRate= document.getElementById("inflationRate");
const population= document.getElementById("population");
const unemploymentRate= document.getElementById("unemploymentRate");


function createEvent ( ele , table , prop ){
    ele.addEventListener("click", ()=>
    {
        table=table.sort((ele1 , ele2)=> ele1[prop] - ele2[prop]);
        const tbody = document.getElementById("tbody");
        tbody.innerHTML = "";
        createTable(table);
    })
}

createEvent(GDP ,countries , "gdp" );
createEvent(gdppercapita ,countries , "gdpPerCapita" );
createEvent(inflationRate ,countries , "inflationRate" );
createEvent(population ,countries , "population" );
createEvent(unemploymentRate ,countries , "unemploymentRate" );