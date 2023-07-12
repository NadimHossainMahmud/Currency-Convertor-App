const getCurrencyOptions = async() =>{
    const response = await fetch('https://api.exchangerate.host/symbols');
    console.log(response);
    const json =await response.json();
    return json.sumbols;
};

const getCurrencyRate = async (fromCurrency, toCurrency) =>{
    const currencyConvertUrl = new URL(
        'https://api.exchangerate.host/convert'
    );

    currencyConvertUrl.searchParams.append('from',fromCurrency);
    currencyConvertUrl.searchParams.append('to',toCurrency);
    
    const response = await fetch(currencyConvertUrl);
    const json = await response.json();

    return json.result;
};

const appendOptionToSelect = (selectElement, optionItem) => {}