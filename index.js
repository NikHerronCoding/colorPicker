
const baseUrl = 'https://www.thecolorapi.com'
const schemeEp = '/scheme'
const colorEp = '/id'

let colorForm = document.getElementById("color-scheme-form");
let colorInput = document.getElementById("colorInput");
let schemeTypeInput = document.getElementById("color-scheme-type");
let colorArea = document.getElementById("color-container");

function addData(data) {
    console.log(data);
    colorArea.innerHTML = data.colors.map((color)=>{
        return `
            <div class="color-card" >
        
                <div class="color-area" style="background-color:${color.hex.value}">
                                    
                </div>
                <p class="color-text">
                    ${color.hex.value} 
                </p>
            </div>
        `
    }

    ).join("")
}

  function handleColorSchemeSubmit() {
    let hexValue = colorInput.value.slice(1)
    let selectedValue = schemeTypeInput.value;
    let fullUrl = baseUrl + schemeEp + `?hex=${hexValue}&mode=${selectedValue}&count=5`


    fetch(fullUrl).then(response=>response.json()).then((data)=>{
        addData(data)
    })

  }

function main(){
    colorForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        handleColorSchemeSubmit();
        return;
    });
}


main()

