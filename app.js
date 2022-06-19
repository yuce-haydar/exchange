const amountElement=document.querySelector("#amount");//miktar kismini secme 
const firstCurrencyElement=document.querySelector(("#firstCurrency"));//ilk para birimini secme 
const secondCurrencyElement=document.querySelector(("#secondCurrency"));//ikinci para birimini secme 

const curency=new Currency("USD","TRY")//currency objesini baslattik
const ui=new UI();//ui objesini baslattik
eventListener();//eventlerimizi balatan fonksiyon
function eventListener(){
    amountElement.addEventListener("input",miktar);//miktari girdgimiz textbox miktar adinda bir fonksiyon baslattik

    firstCurrencyElement.onchange=function(){//sectigimiz  select elementi onchanged metodunu kullandik her degistigi zaman 
        console.log(firstCurrencyElement.options[firstCurrencyElement.selectedIndex].textContent);
        curency.changeilkdeger(firstCurrencyElement.options[firstCurrencyElement.selectedIndex].textContent);//currency objesine selected kismindan secilen optionsun yazisini attik
        ui.changeilk();//ui da degisiklik yapmak icin fonksiyonumuz

    }
    secondCurrencyElement.onchange=function(){
        curency.changeikincideger(secondCurrencyElement.options[secondCurrencyElement.selectedIndex].textContent);//currency objesine selected kismindan secilen optionsun yazisini attik
        ui.changeiki();
    }


} 

function miktar(){
    console.log(amountElement.value);
    curency.changeAmount(amountElement.value);
    curency.exchange().then(result=>{
        ui.displayResult(result);
    })
    .catch(err=>console.log(err));
}