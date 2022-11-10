const productos = [
    {
        id: 1,
        marca: "Lenovo",
        modelo: "Legion 5 Pro",
        cpu: "INTEL CORE I9",
        gpu: "RTX 3080",
        RAM: 12,
        disco: 500,
        precio: 2000,
        stock: 10
    },
    {
        id: 2,
        marca: "Acer",
        modelo: "Nitro",
        cpu: "AMD RYZEN 9",
        gpu: "RX 6000",
        RAM: 16,
        disco: 500,
        precio: 8000,
        stock: 5
    },
    {
        id: 3,
        marca: "Asus",
        modelo: "TUF Gaming",
        cpu: "INTEL CORE I5",
        gpu: "RTX 2060",
        RAM: 32,
        disco: 1000,
        precio: 5000,
        stock: 0
    },
    {
        id: 4,
        marca: "Lenovo",
        modelo: "Alienware",
        cpu: "INTEL CORE I9",
        gpu: "RXT 3080",
        RAM: 64,
        disco: 1500,
        precio: 14000,
        stock: 2
    },
    {
        id: 5,
        marca: "Lenovo",
        modelo: "Alienware",
        cpu: "INTEL CORE I9",
        gpu: "RXT 3080",
        RAM: 64,
        disco: 1500,
        precio: 14000,
        stock: 4
    },
    {
        id: 6,
        marca: "Lenovo",
        modelo: "Alienware",
        cpu: "INTEL CORE I9",
        gpu: "RXT 3080",
        RAM: 64,
        disco: 1500,
        precio: 14000,
        stock: 12
    },
    {
        id: 7,
        marca: "Lenovo",
        modelo: "Alienware",
        cpu: "INTEL CORE I9",
        gpu: "RXT 3080",
        RAM: 64,
        disco: 1500,
        precio: 14000,
        stock: 0
    }
];

let productoElegido = prompt("Ingrese marca o modelo que desee:");

const buscar = productos.filter(producto => {
    return producto.marca.toLocaleLowerCase() == productoElegido.toLocaleLowerCase();
});

if (buscar.value === true) {
    console.log(buscar);
} else {
    alert("no hay chance");
}


// buscarStock();


// -----------------------------------------------------
// este es el que funciona bien

// let productoElegido = prompt("Ingrese marca o modelo que desee:");

// const buscar = productos.filter(producto => {
//     return productoElegido.toLocaleLowerCase() === producto.marca.toLocaleLowerCase();
// });

// // ---------------------------------------