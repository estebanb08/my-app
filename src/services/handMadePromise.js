const data = [
  {
    id: 1,
    image:
    "https://http2.mlstatic.com/D_NQ_NP_886987-MLA48340830805_112021-V.webp",
    title: "Naruto",
    descripcion: "Comprá el funko",
    categoria: "Funko-POP",
    price: "3000",
    stock: "2"
  },
  {
    id: 2,
    image: "https://http2.mlstatic.com/D_NQ_NP_971926-MLA48341966837_112021-V.webp",
    title: "Chucky",
    descripcion: "Comprá el funko",
    categoria: "Funko-POP",
    price: "8000",
    stock: "10"
  },
  {
    id: 3,
    image:
    "https://http2.mlstatic.com/D_NQ_NP_887637-MLA48532306800_122021-V.webp",
    title: "Harry Potter",
    descripcion: "Comprá el funko",
    categoria: "Funko-POP",
    price: "2000",
    stock: "5"
  },
  {
    id: 4,
    image:
    "https://http2.mlstatic.com/D_NQ_NP_640561-MLA49061384587_022022-V.webp",
    title: "Star Wars",
    descripcion: "Comprá el funko",
    categoria: "Funko-POP",
    price: "2000",
    stock: "3"
  },
  {
    id: 5,
    image: "https://http2.mlstatic.com/D_NQ_NP_749564-MLA49695325020_042022-V.webp",
    title: "Thanos",
    descripcion: "Comprá el funko",
    categoria: "Funko-POP-2",
    price: "5000",
    stock: "15"
  },
  {
    id: 6,
    image:
    "https://http2.mlstatic.com/D_NQ_NP_795834-MLA48341511152_112021-V.webp",
    title: "Pikachu",
    descripcion: "Comprá el funko",
    categoria: "Funko-POP-2",
    price: "3000",
    stock: "1"
  },
  {
    id: 7,
    image:
    "https://http2.mlstatic.com/D_NQ_NP_694268-MLA48984361109_012022-V.webp",
    title: "Spider Man",
    descripcion: "Comprá el funko",
    categoria: "Funko-POP-2",
    price: "200",
    stock: "3"
  },
  {
    id: 8,
    image:
    "https://http2.mlstatic.com/D_NQ_NP_679100-MLA48341977454_112021-V.webp",
    title: "IT Pennywise",
    descripcion: "Comprá el funko",
    categoria: "Funko-POP-2",
    price: "8000",
    stock: "4"
  },
  {
    id: 9,
    image:
    "https://http2.mlstatic.com/D_NQ_NP_769865-MLA48601262430_122021-V.webp",
    title: "IT Pennywise",
    descripcion: "Comprá el funko",
    categoria: "Funko-POP-2",
    price: "6800",
    stock: "4"
  },
  {
    id: 10,
    image:
    "https://http2.mlstatic.com/D_NQ_NP_645912-MLA48344738128_112021-V.webp",
    title: "Marty McFly",
    descripcion: "Comprá el funko",
    categoria: "Funko-POP-2",
    price: "3800",
    stock: "4"
  }
];

const getProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(data);
  }, 2000);
});

export default getProducts;
