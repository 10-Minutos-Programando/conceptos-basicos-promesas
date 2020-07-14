let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa después de 1 segundo');
    }, 1000)
});

function promesaDelay(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Promesa después de ${delay} milisegundos`);
        }, delay);
    });
}

let prom1 = promesaDelay(2000);
let prom2 = promesaDelay(1000);
let prom3 = promesaDelay(5500);

Promise.all([prom1, prom2, prom3])
    .then(messages => {
        console.log(messages);
    }).catch(err => {
        console.log(err);
    })