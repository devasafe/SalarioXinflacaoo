// O usuário tem que ser capaz de escolher um número de 1 à 3;
// 1 Listar o histórico do salário mínimo;
// 2 Listar o histórico da taxa IPCA (inflação);
// 3 Comparar e listar a porcentagem de crescimento salarial com a inflação(IPCA);
// A resposta será de acordo com o número que o usuário escolher;
//O percentual de crescimento é calculado com base na diferença entre o salário do ano e do ano anterior,...
//////...dessa forma, o percentual de crescimento só deve ser apresentado a partir de 2011.


import entradaDados from 'readline-sync';


let historico_salario = [
    {ano: 2010, valor: 510},
    {ano: 2011, valor: 545},
    {ano: 2012, valor: 622},
    {ano: 2013, valor: 678},
    {ano: 2014, valor: 724},
    {ano: 2015, valor: 788},
    {ano: 2016, valor: 880},
    {ano: 2017, valor: 937},
    {ano: 2018, valor: 954},
    {ano: 2019, valor: 998},
    {ano: 2020, valor: 1.045}
        ];
    
let historico_ipca = [
    {ano: 2010, valor: 5.91},
    {ano: 2011, valor: 6.50},
    {ano: 2012, valor: 5.84},
    {ano: 2013, valor: 5.91},
    {ano: 2014, valor: 6.41},
    {ano: 2015, valor: 10.67},
    {ano: 2016, valor: 6.29},
    {ano: 2017, valor: 2.95},
    {ano: 2018, valor: 3.75},
    {ano: 2019, valor: 4.31},
    {ano: 2020, valor: 4.52}
        ]; 

        console.log(`
        1 - Listar o histórico do salário mínimo.

        2 - Listar o histórico da taxa IPCA.
        
        3 - Comparar e listar a porcentagem de crescimento salarial com a inflação(IPCA).
        
         `);
        let resposta = entradaDados.question('Escolha a opção desejada: ');
        

        if (Number(resposta) == 1) 
        {
            console.log("1 - Listar o histórico do salário mínimo:");
        
            const anosSalario = [];
            const valoresSalario = [];
        
            for (let salario of historico_salario) {
                anosSalario.push(salario.ano);
                valoresSalario.push(salario.valor);
            }
        
            for (let ctr = 0; ctr < anosSalario.length; ctr++) {
                console.log("Ano: " + anosSalario[ctr]);
                console.log("Valor: R$" + valoresSalario[ctr].toFixed(3));
                console.log('-------------------------');
            }
        }
        else if(Number(resposta) == 2)
        {
            console.log("2 - Listar o histórico da taxa IPCA.");

            const anosIPCA = [];
            const valoresIPCA = [];

            for (let IPCA of historico_ipca) {
                anosIPCA.push(IPCA.ano);
                valoresIPCA.push(IPCA.valor);
            }

            for (let ctr = 0; ctr < anosIPCA.length; ctr++) {
                console.log("Ano: " + anosIPCA[ctr]);
                console.log("Valor: " + valoresIPCA[ctr].toFixed(2) + "%");
                console.log('-------------------------');
            }
        
        }
        
        else if(Number(resposta) == 3)
        {
            console.log("3 - Comparar e listar a porcentagem de crescimento salarial com a inflação(IPCA).");

            const anosIPCA = [];
            const valoresIPCA = [];
            const anosSalario = [];
            const valoresSalario = [];

            for (let salario of historico_salario) {
                anosSalario.push(salario.ano);
                valoresSalario.push(salario.valor);
            }
            for (let IPCA of historico_ipca) {
                anosIPCA.push(IPCA.ano);
                valoresIPCA.push(IPCA.valor);
            }
            for (let ctr = 0; ctr <= 8; ctr++) {
                
                let diferenca = (valoresSalario[1 + ctr] - valoresSalario[ctr]);
                let crescimento = (diferenca / valoresSalario[ctr]) * 100;
                console.log(" ");
                console.log("Ano: ".padEnd(25) + anosSalario[ctr]);
                console.log("Salário Minimo: R$".padEnd(25) + valoresSalario[ctr].toFixed(3).replace(".",","));
                console.log("Inflação: ".padEnd(25) + valoresIPCA[ctr].toFixed(2).replace(".",",") + "%");
                console.log("Crescimneto Salarial: ".padEnd(25) + crescimento.toFixed(2).replace(".",",") + "%");
                console.log(" ");
                console.log("------------------------------------------------");
            }
        }
        else
        {
            console.log("Opção não listada!");
        }
        
       




