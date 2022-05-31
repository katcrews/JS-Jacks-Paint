function configureListeners() {
    let images = document.getElementsByTagName("img");  


     for (var i = 0; i < images.length; i++) {        
        document.getElementById(images[i].id).addEventListener("mouseover", addOpacity, false);
        document.getElementById(images[i].id).addEventListener("mouseout", addOpacity, false);   
    } 
}

function addOpacity(event) {
    if (this.classList.contains("dim")){ 
        this.classList.add("dim");
    }
    getProductInfo(event.target.id);       
}

function removeOpacity(event) {
    if (this.classList.contains("dim")){ 
        this.classList.remove("dim");
    }

    let price = document.getElementById('color-price');
        price.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let colorPrice;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':
            colorPrice = '$14.99'
            colorName = 'Lime Green'
            updatePrice(colorPrice, colorName)          
            break;           
        case 'pn2':
            colorPrice = '$11.14'
            colorName = 'Medium Brown'
            updatePrice(colorPrice, colorName)    
            break;            
        case 'pn3':
            colorPrice = '$22.99'
            colorName = 'Royal Blue'
            updatePrice(colorPrice, colorName)
            break;   
        case 'pn4':
            colorPrice = '$4.99'
            colorName = 'Solid Black'
            updatePrice(colorPrice, colorName)
            break;   
        case 'pn5':
            colorPrice = '$8.22'
            colorName = 'Solid Cyan'
            updatePrice(colorPrice, colorName) 
            break;   
        case 'pn6':
            colorPrice = '$11.99'
            colorName = 'Solid Purple'
            updatePrice(colorPrice, colorName)     
            break;   
        case 'pn7':
            colorPrice = '$13.42'
            colorName = 'Solid Red'
            updatePrice(colorPrice, colorName)
            break;
        case 'pn8':
            colorPrice = '$21.98'
            colorName = 'Solid White'
            updatePrice(colorPrice, colorName)
            break;   
        case 'pn9':
            colorPrice = '$14.99'
            colorName = 'Solid Yellow'
            updatePrice(colorPrice, colorName)
            break;   
          default:              
    }

    function updatePrice(colorPrice, colorName)
    {       
        let price = document.getElementById('color-price');
        colorPrice.textContent = price;
        
        
        let color = document.getElementById('color-name');
        colorName.textContent = color;
    }
    
}
