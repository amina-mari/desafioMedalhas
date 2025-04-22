const prompt = require('prompt-sync')({sigint: true});

class Countries {
    constructor() {
        if(!Countries.instance) {
            Countries.instance = this
            this.countries = [];
        }
        return Countries.instance;
    }

    addCountry(country) {
        this.countries.push(country);
    }

    logCountries() {
        let arraySorted = this.countries.sort((a, b) => a.medals - b.medals)
        console.log("\n\n------ QUADRO DE MEDALHAS ------")
        arraySorted.forEach((country, index) => {
            console.log(`${index + 1}° lugar: ${country.name} - ${country.medals} medalhas`);
        })
    }
}

const countriesList = new Countries();

function showSystemOptions() {
    console.log("1 - Digite 1 para inserir um novo país na lista")
    console.log("2 - Digite 2 para visualizar o quadro de medalhas atual")
    console.log("0 - Digite 0 para encerrar o programa.")
}

console.log("Bem-vindo ao nosso sistema de medalhas!")
showSystemOptions()

let userOption = prompt("Sua opção:") 

while(userOption != 0) {
    switch(userOption) {
        case "1": 
            console.log("\n\n------ CADASTRO DE PAÍSES ------")
            const countryName = prompt("Insira o nome do país: ")
            const countryGoldMedals = prompt("Insira a quantidade de medalhas de OURO que ele obteve: ");
            const countrySilverMedals = prompt("Insira a quantidade de medalhas de PRATA que ele obteve: ");
            const countryCopperMedals = prompt("Insira a quantidade de medalhas de BRONZE que ele obteve: ");

            countriesList.addCountry({name: countryName, medals: +countryGoldMedals + +countrySilverMedals + +countryCopperMedals});

            console.log("País adicionado com sucesso!!!")
            console.log("\nO que deseja fazer agora?")
            showSystemOptions();
            userOption = prompt("\nSua opção:") 
            break;
        case "2": 
            countriesList.logCountries();
            console.log("\nO que deseja fazer agora?")
            showSystemOptions();
            userOption = prompt("\nSua opção:") 
            break;
        default:
            console.log("Ooops, opção inválida! Tente alguma das opções a seguir:")
            showSystemOptions();
            userOption = prompt("\nSua opção:") 
            break;
    }
}