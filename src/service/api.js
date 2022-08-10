const getProducts = [
  {
    id:'1',
    img:'https://http2.mlstatic.com/D_NQ_NP_886987-MLA48340830805_112021-V.webp',
    name:'Naruto',
    description:'lorem askgjfffffffffffffffffasgfhjqsgfuqeywg76qwefguqwy quwfuyqwefyuqdfwedfqwgydu ',
    price:'7000',
    category:'Funko POP', 
    stock:'4'
  },

  {
    id:'2', img:'https://http2.mlstatic.com/D_NQ_NP_971926-MLA48341966837_112021-V.webp', 
    name:'Chucky', 
    description:'lorem askgjfffffffffffffffffasgfhjqsgfuqeywg76qwefguqwy quwfuyqwefyuqdfwedfqwgydu',
    price:'1000',
    category:'Funko POP', 
    stock:'16'
  },
  {
    id:'3', 
    img:'https://http2.mlstatic.com/D_NQ_NP_887637-MLA48532306800_122021-V.webp',
    name:'Harry Potter', description:'lorem askgjfffffffffffffffffasgfhjqsgfuqeywg76qwefguqwy quwfuyqwefyuqdfwedfqwgydu ', 
    price:'3000',
    category:'Funko POP',
    stock:'141'
  },
  {
    id:'4',
    img:'https://http2.mlstatic.com/D_NQ_NP_640561-MLA49061384587_022022-V.webp', 
    name:'Star Wars', description:'lorem askgjfffffffffffffffffasgfhjqsgfuqeywg76qwefguqwy quwfuyqwefyuqdfwedfqwgydu ', 
    price:'11000',
    category:'Funko POP', 
    stock:'22'
  },
  {
    id:'5',
    img:'https://http2.mlstatic.com/D_NQ_NP_749564-MLA49695325020_042022-V.webp', 
    name:'Thanos', 
    description:'lorem askgjfffffffffffffffffasgfhjqsgfuqeywg76qwefguqwy quwfuyqwefyuqdfwedfqwgydu ', 
    price:'5000', 
    stock:'15'
  },
  {
    id:'6',
    img:'https://http2.mlstatic.com/D_NQ_NP_795834-MLA48341511152_112021-V.webp', 
    name:'Pikachu', 
    description:'lorem askgjfffffffffffffffffasgfhjqsgfuqeywg76qwefguqwy quwfuyqwefyuqdfwedfqwgydu ', 
    price:'6000',
    category:'Funko POP 2', 
    stock:'155'
  },
  {
    id:'7', 
    img:'https://http2.mlstatic.com/D_NQ_NP_694268-MLA48984361109_012022-V.webp', 
    name:'Spider Man', description:'lorem askgjfffffffffffffffffasgfhjqsgfuqeywg76qwefguqwy quwfuyqwefyuqdfwedfqwgydu ', 
    price:'3000',
    category:'Funko POP 2', 
    stock:'15'
  },
  {
    id:'8', 
    img:'https://http2.mlstatic.com/D_NQ_NP_679100-MLA48341977454_112021-V.webp', 
    name:'IT Pennywise', 
    description:'lorem askgjfffffffffffffffffasgfhjqsgfuqeywg76qwefguqwy quwfuyqwefyuqdfwedfqwgydu ', 
    price:'2000',
    category:'Funko POP 2', 
    stock:'42'
  },
  {
    id:'9',
    img:'https://http2.mlstatic.com/D_NQ_NP_769865-MLA48601262430_122021-V.webp', 
    name:'Marty McFly', 
    description:'lorem askgjfffffffffffffffffasgfhjqsgfuqeywg76qwefguqwy quwfuyqwefyuqdfwedfqwgydu ', 
    price:'12000',
    category:'Funko POP 2', 
    stock:'41'
  },
  {
    id:'10', 
    img:'https://http2.mlstatic.com/D_NQ_NP_645912-MLA48344738128_112021-V.webp', 
    name:'Slash', description:'lorem askgjfffffffffffffffffasgfhjqsgfuqeywg76qwefguqwy quwfuyqwefyuqdfwedfqwgydu ', 
    price:'5000',
    category:'Funko POP 2', 
    stock:'50'
  },
  {
    id:'11', 
    img:'https://http2.mlstatic.com/D_NQ_NP_800263-MLA48353055493_112021-V.webp', 
    name:'Stich', 
    description:'lorem askgjfffffffffffffffffasgfhjqsgfuqeywg76qwefguqwy quwfuyqwefyuqdfwedfqwgydu ', 
    price:'2000',
    category:'Funko POP 2', 
    stock:'15'
  }
]

export const data = new Promise((resolve, reject) => {
  let condition = true
  setTimeout(() =>{
    if (condition){
    resolve(getProducts)
  }else{
    reject('No hay stock')
  }
  }, 3000)
})