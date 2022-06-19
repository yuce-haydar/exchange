class UI{
    constructor(ilksecim,ikincisecim){
        this.ilksecim=ilksecim;
        this.ikincisecim=ikincisecim;

        // element secme 
        this.outputFirst=document.getElementById("outputFirst");
        this.outputSecond=document.getElementById("outputSecond");
        this.outputResult=document.getElementById("outputResult");
    }
    changeilk(){
        this.outputFirst.textContent=firstCurrencyElement.options[firstCurrencyElement.selectedIndex].textContent;
    }
    changeiki(){
        this.outputSecond.textContent=secondCurrencyElement.options[secondCurrencyElement.selectedIndex].textContent;
    }
    displayResult(result){
        this.outputResult.value=result
    }
}