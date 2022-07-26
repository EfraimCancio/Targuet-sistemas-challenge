//Functions of question02
const seqFibonacci = () => {
    let number = parseInt(document.getElementById('numFibonacci').value) 
    let fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    
    for (var i = 2; i < 50; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }

    
    let text = document.querySelector("#text");

    if (fibonacci.indexOf(number) === -1) {
        
        text.textContent = `O numero ${number} NÃO pertence a sequência de Fibonacci`
           
    } else {
        text.textContent = `O numero ${number} pertence a sequência de Fibonacci`
    }
     
} 


//Functions of question03
const gerarJson = () => {
  
    let values = [];
    let days = [];
    let total = 0;
    

    for ( let i = 1 ; i <= 31 ; i++) {
        let day = i;
        let value = Math.floor(Math.random() * 1000) + 1;
        
        values.push(value);
        days.push(day);   
        total = total + value;
    }

    media = total / 31;
    let min = Math.min(...values);
    let max = Math.max(...values);

    function upMedia(value) {
        if(value > media)
        return value;
    }

    let maiorQueMedia = values.filter(upMedia);;
    

    let resA = document.querySelector("#resA")
    let resB = document.querySelector("#resB")
    let resC = document.querySelector("#resC")
    resA.textContent = `O menor faturamento do mês foi de R$ ${min},00.`
    resB.textContent = `O maior faturamento do mês foi de R$ ${max},00.`
    resC.textContent = `O faturamento do mês foi maior que a média de R$${media} em ${maiorQueMedia.length} dias.`

}

//Functions of question04
const calcularPorcentagem = () => {
    let sp = 67836.43;
    let rj = 36678.66;
    let mg = 29229.88;
    let es = 27165.48;
    let outros = 19849.53;

    let total = sp + rj + mg + es + outros;
    

    let spP = (sp * 100) / total
    let rjP = (rj * 100) / total
    let mgP = (mg * 100) / total
    let esP = (es * 100) / total
    let outrosP = (outros * 100) / total

    let resSp = document.querySelector("#resSp")
    let resRj = document.querySelector("#resRj")
    let resMg = document.querySelector("#resMg")
    let resEs = document.querySelector("#resMg")
    let resOutros = document.querySelector("#resOutros")

    resSp.textContent = `A participação do estado de São Paulo no faturamento mensal foi de ${spP} %.`
    resRj.textContent = `A participação do estado de Rio de Janeiro no faturamento mensal foi de ${rjP} %.`
    resMg.textContent = `A participação do estado de Minas Gerais no faturamento mensal foi de ${mgP} %.`
    resEs.textContent = `A participação do estado de Espirito Santo no faturamento mensal foi de ${esP} %.`
    resOutros.textContent = `A participação dos outros estados no faturamento mensal foi de ${outrosP} %.`
}

//Functions of question05

const reverseString = () => {
    let string = document.getElementById('string').value;
    
    let invertString = string.split("").reverse().join("");

    let resInvert = document.querySelector("#resInvert");
    resInvert.textContent = `O inverso da palavra é ${invertString.toUpperCase()}.`
    
}