// ^ Amazon Test
const user = {
      name:'Rohan',
      active:true,
      cart:[],
      purchase:[],
      addCart(name,price) {
           const item = {};
           item.name = name;
           item.price = price + ((price/100)*3);
           this.cart.push(item);
      },
      buy(itemName) {
            this.cart.forEach((item,i)=>{
                  if(item.name === itemName) {
                        let temp = this.cart.splice(i,1);
                        this.purchase.push(temp[0]);
                        console.log(`Successfully Purchased ${item.name} on ${item.price} Rupees only! Keep shopping :)`);
                  }else{
                        return undefined;
                  }
            })
      }

}

user.addCart('Laptop',35000);
user.addCart('IPhone',125000);
user.addCart('Tv',20000);
user.addCart('Freeze',44500);

console.log(user);

user.buy('Laptop');
user.buy('IPhone');
user.buy('Book');

console.log(user);