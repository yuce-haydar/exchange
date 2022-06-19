class Currency{
    constructor(ilkdeger,ikincideger){
        this.ilkdeger=ilkdeger;
        this.ikincideger=ikincideger;
        this.url="https://api.exchangerate.host/latest?base=";
        this.amount=null;



    }
    exchange(){
        return new Promise((resolve,reject)=>   {




        fetch(this.url+this.ilkdeger)
        .then(response=>response.json())
        .then(data=>{
            const parity=data.rates[secondCurrencyElement.value];
            
          
            const amount2=Number(this.amount);
           
            let total=parity*amount2;
            resolve(total);
            })
        .catch(err=>reject(err));

        });

    }
    changeAmount(amount){
        this.amount=amount;
    }
    changeilkdeger(yeniilkdeger){
        this.ilkdeger=yeniilkdeger;
    }
    changeikincideger(yeniikincideger){
        this.ikincideger=yeniikincideger;
    }

}