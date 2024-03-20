class Textbox 
{
    constructor(selector, invalidSymbolsRegex) 
    {
        this._elements = Array.from(document.querySelectorAll(selector));
        this._invalidSymbols = invalidSymbolsRegex;
        
        this._elements.forEach(element => {
            element.addEventListener('input', this.updateValue.bind(this));
        });
    }

    get value() 
    {
        return this._elements[0].value;
    }

    set value(newValue) 
    {
        this._elements.forEach(element => 
        {
            element.value = newValue;
        });
    }

    get elements() 
    {
        return this._elements;
    }

    isValid() 
    {
        return !Array.from(this._elements).some(element => this._invalidSymbols.test(element.value));
    }

    updateValue(event) 
    {
        const newValue = event.target.value;
        this._elements.forEach(element => 
        {
            element.value = newValue;
        });
    }
}

const textbox = new Textbox('.textbox', /[^a-zA-Z0-9]/);