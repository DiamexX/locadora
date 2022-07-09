function totalAvista(){
    let preco = parseFloat(sessionStorage.getItem('total'))
        window.location = "carrinho.html";
    let aVista = 10;
    let totalAvista = 0;
    
    
        totalAvista = (preco - (aVista /100) * preco);
        alert(`Preço: R$`+`${preco}`);
        alert(`À vista: R$`+ `${totalAvista}`);
    }
    if(document.getElementById('ipt1') = true){
        alert(totalAvista)
    }