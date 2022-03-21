const url1 = "https://data.covid19.go.id/public/api/prov.json";

const url2 = "https://data.covid19.go.id/public/api/update.json"


async function getData1() {
    const response = await fetch(url1);
    const data = await response.json();
    const iniData1 = data.list_data;

    let iniTable = document.getElementById("table")

    for (let r of iniData1) {
    iniTable.innerHTML += `<tr> 
    <td>${r.key} </td>
    <td>${r.jumlah_kasus}</td>
    <td>${r.jumlah_sembuh}</td> 
    <td>${r.jumlah_meninggal}</td>          
    </tr>`
    }
}

async function getData2() {
    const response = await fetch(url2);
    const data = await response.json();
    const iniData2 = data;
    
    let iniPositif = document.getElementById('positif')
    let iniSembuh = document.getElementById('sembuh')
    let iniMeninggal = document.getElementById('meninggal')


    iniPositif.innerHTML += iniData2.update.total.jumlah_positif;
    iniSembuh.innerHTML += iniData2.update.total.jumlah_sembuh;
    iniMeninggal.innerHTML += iniData2.update.total.jumlah_meninggal;
}
getData1();
getData2();