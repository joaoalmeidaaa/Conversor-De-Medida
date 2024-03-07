function limparDisplay() {
    document.getElementById("display").value = "";
}

function adicionarNoDisplay(valor) {
    document.getElementById("display").value += valor;
}

function calcular() {
    var valor = parseFloat(document.getElementById("display").value);
    var de = document.getElementById("menuOpcoesDe").value;
    var para = document.getElementById("menuOpcoesPara").value;
    var resultado;

    if (de === para) {
        resultado = valor; 
    } else if (de === "kg" && para === "g") {
        resultado = valor * 1000; 
    } else if (de === "kg" && para === "mg") {
        resultado = valor * 1000000; 
    } else if (de === "kg" && para === "hg") {
        resultado = valor * 10; 
    } else if (de === "kg" && para === "dag") {
        resultado = valor * 100; 
    } else if (de === "kg" && para === "dg") {
        resultado = valor * 10000; 
    } else if (de === "kg" && para === "cg") {
        resultado = valor * 100000; 
    } else if (de === "g" && para === "kg") {
        resultado = valor / 1000; 
    } else if (de === "g" && para === "mg") {
        resultado = valor * 1000;
    } else if (de === "g" && para === "hg") {
        resultado = valor / 10; 
    } else if (de === "g" && para === "dag") {
        resultado = valor / 100; 
    } else if (de === "g" && para === "dg") {
        resultado = valor * 10; 
    } else if (de === "g" && para === "cg") {
        resultado = valor * 100; 
    } else if (de === "mg" && para === "kg") {
        resultado = valor / 1000000; 
    } else if (de === "mg" && para === "g") {
        resultado = valor / 1000; 
    } else if (de === "mg" && para === "hg") {
        resultado = valor / 10000; 
    } else if (de === "mg" && para === "dag") {
        resultado = valor / 100000; 
    } else if (de === "mg" && para === "dg") {
        resultado = valor / 1000000; 
    } else if (de === "mg" && para === "cg") {
        resultado = valor / 10000; 
    } else if (de === "hg" && para === "kg") {
        resultado = valor / 10;
    } else if (de === "hg" && para === "g") {
        resultado = valor * 10; 
    } else if (de === "hg" && para === "mg") {
        resultado = valor * 10000; 
    } else if (de === "hg" && para === "dag") {
        resultado = valor * 100; 
    } else if (de === "hg" && para === "dg") {
        resultado = valor * 1000; 
    } else if (de === "hg" && para === "cg") {
        resultado = valor * 10; 
    } else if (de === "dag" && para === "kg") {
        resultado = valor / 100; 
    } else if (de === "dag" && para === "g") {
        resultado = valor * 100; 
    } else if (de === "dag" && para === "mg") {
        resultado = valor * 100000; 
    } else if (de === "dag" && para === "hg") {
        resultado = valor / 100; 
    } else if (de === "dag" && para === "dg") {
        resultado = valor * 10; 
    } else if (de === "dag" && para === "cg") {
        resultado = valor * 100; 
    } else if (de === "dg" && para === "kg") {
        resultado = valor / 10000; 
    } else if (de === "dg" && para === "g") {
        resultado = valor / 10;
    } else if (de === "dg" && para === "mg") {
        resultado = valor * 1000000;
    } else if (de === "dg" && para === "hg") {
        resultado = valor / 1000; 
    } else if (de === "dg" && para === "dag") {
        resultado = valor / 10;
    } else if (de === "dg" && para === "cg") {
        resultado = valor * 10; 
    } else if (de === "cg" && para === "kg") {
        resultado = valor / 100000; 
    } else if (de === "cg" && para === "g") {
        resultado = valor / 100; 
    } else if (de === "cg" && para === "mg") {
        resultado = valor * 10000;
    } else if (de === "cg" && para === "hg") {
        resultado = valor / 10; 
    } else if (de === "cg" && para === "dag") {
        resultado = valor / 100; 
    } else if (de === "cg" && para === "dg") {
        resultado = valor / 10; 
    }

    document.getElementById("display").value = resultado.toFixed(2);
    
}
