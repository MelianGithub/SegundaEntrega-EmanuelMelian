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
        stock: 5
    },
    {
        id: 2,
        marca: "Lenovo",
        modelo: "Legion 9",
        cpu: "INTEL CORE I7",
        gpu: "RTX 3050",
        RAM: 16,
        disco: 700,
        precio: 4000,
        stock: 5
    },
    {
        id: 3,
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
        id: 4,
        marca: "Asus",
        modelo: "TUF",
        cpu: "INTEL CORE I5",
        gpu: "RTX 2060",
        RAM: 32,
        disco: 1000,
        precio: 5000,
        stock: 10
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
        stock: 2
    },
    {
        id: 6,
        marca: "MSI",
        modelo: "GF63",
        cpu: "INTEL CORE I7",
        gpu: "RXT 3050TI",
        RAM: 8,
        disco: 500,
        precio: 4000,
        stock: 5
    },
    {
        id: 7,
        marca: "MSI",
        modelo: "GF100",
        cpu: "INTEL CORE I9",
        gpu: "RXT 3080TI",
        RAM: 24,
        disco: 100,
        precio: 8000,
        stock: 0
    },
    {
        id: 8,
        marca: "Hp",
        modelo: "Victus",
        cpu: "INTEL CORE I5",
        gpu: "RXT 2080",
        RAM: 32,
        disco: 100,
        precio: 8000,
        stock: 0
    },
    {
        id: 9,
        marca: "Asus",
        modelo: "Republic of Gamers",
        cpu: "AMD RYZEN 7",
        gpu: "RXT 3080",
        RAM: 16,
        disco: 1500,
        precio: 10000,
        stock: 0
    },
    {
        id: 10,
        marca: "Asus",
        modelo: "Moder",
        cpu: "AMD RYZEN 5",
        gpu: "RXT 1660",
        RAM: 8,
        disco: 1500,
        precio: 9000,
        stock: 1
    }
];

let productoElegido = prompt("Ingrese marca o modelo que desee:");

const buscar = productos.filter(producto => {
    return producto.marca.toLocaleLowerCase() === productoElegido.toLocaleLowerCase()
        || producto.modelo.toLocaleLowerCase() === productoElegido.toLocaleLowerCase()
        && producto.stock > 0;
});

if (buscar.length > 0 && buscar.length < 2) {
    alert("Se ha encontrado: " + buscar.length + " producto");
    console.log(buscar);
} else if (buscar.length >= 2) {
    alert("Se han encontrado: " + buscar.length + " productos");
    console.log(buscar);
} else {
    alert("no se encuenta el producto o no hay stock");
}
