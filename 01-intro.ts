import fetch from 'node-fetch';

const cep ="69035230";
const verificarCobertura => address =>
    new Promise(resolve =>{
        setTimeout(()
        const temCobertura = new Date().getTime()% 2 ===0;
        resolve(temCobertura);
        )
    },500);
});

fetch("http://viacep.com.br/ws/${cep}/json")
    .then(result =>{
        result.json();
    })
    .then(result => {
        return verificarCobertura(result).then(temCobertura) => {
            return { temCobertura, ...result};
        }
    });
    .then(data => {
        console.log(data);
    })