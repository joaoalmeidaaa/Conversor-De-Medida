function calcular() {
    var valor = parseFloat(document.getElementById("display").value);
    var de = document.getElementById("menuOpcoesDe").value;
    var para = document.getElementById("menuOpcoesPara").value;
    var resultado;

    if (de === para) {
        resultado = valor;
        } 
        else if (de === "kg" && para === "hg") {
            resultado = valor * 10;
        } else if (de === "kg" && para === "dag") {
            resultado = valor * 100;
        } else if (de === "kg" && para === "g") {
            resultado = valor * 1000;
        } else if (de === "kg" && para === "dg") {
            resultado = valor * 10000;
        } else if (de === "kg" && para === "cg") {
            resultado = valor * 100000;
        } else if (de === "kg" && para === "mg") {
            resultado = valor * 1000000;
        } else if (de === "hg" && para === "kg") {
            resultado = valor / 10;
        } else if (de === "hg" && para === "dag") {
            resultado = valor * 10;
        } else if (de === "hg" && para === "g") {
            resultado = valor * 100;
        } else if (de === "hg" && para === "dg") {
            resultado = valor * 1000;
        } else if (de === "hg" && para === "cg") {
            resultado = valor * 10000;
        } else if (de === "hg" && para === "mg") {
            resultado = valor * 100000;
        } else if (de === "dag" && para === "kg") {
            resultado = valor / 100;
        } else if (de === "dag" && para === "hg") {
            resultado = valor / 10;
        } else if (de === "dag" && para === "g") {
            resultado = valor * 10;
        } else if (de === "dag" && para === "dg") {
            resultado = valor * 100;
        } else if (de === "dag" && para === "cg") {
            resultado = valor * 1000;
        } else if (de === "dag" && para === "mg") {
            resultado = valor * 10000;
        } else if (de === "g" && para === "kg") {
            resultado = valor / 1000;
        } else if (de === "g" && para === "hg") {
            resultado = valor / 100;
        } else if (de === "g" && para === "dag") {
            resultado = valor / 10;
        } else if (de === "g" && para === "dg") {
            resultado = valor * 10;
        } else if (de === "g" && para === "cg") {
            resultado = valor * 100;
        } else if (de === "g" && para === "mg") {
            resultado = valor * 1000;
        } else if (de === "dg" && para === "kg") {
            resultado = valor / 10000;
        } else if (de === "dg" && para === "hg") {
            resultado = valor / 1000;
        } else if (de === "dg" && para === "dag") {
            resultado = valor / 100;
        } else if (de === "dg" && para === "g") {
            resultado = valor / 10;
        } else if (de === "dg" && para === "cg") {
            resultado = valor * 10;
        } else if (de === "dg" && para === "mg") {
            resultado = valor * 100;
        } else if (de === "cg" && para === "kg") {
            resultado = valor / 100000;
        } else if (de === "cg" && para === "hg") {
            resultado = valor / 10000;
        } else if (de === "cg" && para === "dag") {
            resultado = valor / 1000;
        } else if (de === "cg" && para === "g") {
            resultado = valor / 100;
        } else if (de === "cg" && para === "dg") {
            resultado = valor / 10;
        } else if (de === "cg" && para === "mg") {
            resultado = valor * 10;
        } else if (de === "mg" && para === "kg") {
            resultado = valor / 1000000;
        } else if (de === "mg" && para === "hg") {
            resultado = valor / 100000;
        } else if (de === "mg" && para === "dag") {
            resultado = valor / 10000;
        } else if (de === "mg" && para === "g") {
            resultado = valor / 1000;
        } else if (de === "mg" && para === "dg") {
            resultado = valor / 100;
        } else if (de === "mg" && para === "cg") {
            resultado = valor / 10;
        }
        else if (de === "mg" && para === "dag") {
            resultado = valor / 10000;
        } else if (de === "mg" && para === "g") {
            resultado = valor / 1000;
        } else if (de === "mg" && para === "dg") {
            resultado = valor / 100;
        } else if (de === "mg" && para === "cg") {
            resultado = valor / 10;
    } else if (de === "litro (L)" && para === "mililitro (mL)") {
        resultado = valor * 1000;
    } else if (de === "litro (L)" && para === "decilitro (dL)") {
        resultado = valor * 10;
    } else if (de === "litro (L)" && para === "centilitro (cL)") {
        resultado = valor * 100;
    } else if (de === "litro (L)" && para === "hectolitro (hL)") {
        resultado = valor / 100;
    } else if (de === "mililitro (mL)" && para === "litro (L)") {
        resultado = valor / 1000;
    } else if (de === "mililitro (mL)" && para === "decilitro (dL)") {
        resultado = valor / 10;
    } else if (de === "mililitro (mL)" && para === "centilitro (cL)") {
        resultado = valor / 100;
    } else if (de === "mililitro (mL)" && para === "hectolitro (hL)") {
        resultado = valor / 1000;
    } else if (de === "decilitro (dL)" && para === "litro (L)") {
        resultado = valor / 10;
    } else if (de === "decilitro (dL)" && para === "mililitro (mL)") {
        resultado = valor * 100;
    } else if (de === "decilitro (dL)" && para === "centilitro (cL)") {
        resultado = valor * 10;
    } else if (de === "decilitro (dL)" && para === "hectolitro (hL)") {
        resultado = valor / 1000;
    } else if (de === "centilitro (cL)" && para === "litro (L)") {
        resultado = valor / 100;
    } else if (de === "centilitro (cL)" && para === "mililitro (mL)") {
        resultado = valor * 100;
    } else if (de === "centilitro (cL)" && para === "decilitro (dL)") {
        resultado = valor / 10;
    } else if (de === "centilitro (cL)" && para === "hectolitro (hL)") {
        resultado = valor / 10000;
    } else if (de === "hectolitro (hL)" && para === "litro (L)") {
        resultado = valor * 100;
    } else if (de === "hectolitro (hL)" && para === "mililitro (mL)") {
        resultado = valor * 1000;
    } else if (de === "hectolitro (hL)" && para === "decilitro (dL)") {
        resultado = valor * 10;
    } else if (de === "hectolitro (hL)" && para === "centilitro (cL)") {
        resultado = valor * 10000;
    } else {
        resultado = "Operação não suportada";
    }

    document.getElementById("display").value = resultado.toFixed(2);
}

function mostrarUnidades(tipo) {
    var unidadesMedida = document.getElementById("unidadesMedida");
    var unidadesVolume = document.getElementById("unidadesVolume");

    if (tipo === 'medida') {
        unidadesMedida.style.display = "block";
        unidadesVolume.style.display = "none";
        preencherMenuOpcoes('listaMedidas', 'menuOpcoesDe');
        preencherMenuOpcoes('listaMedidas', 'menuOpcoesPara');
    } else if (tipo === 'volume') {
        unidadesMedida.style.display = "none";
        unidadesVolume.style.display = "block";
        preencherMenuOpcoes('listaVolume', 'menuOpcoesDe');
        preencherMenuOpcoes('listaVolume', 'menuOpcoesPara');
    }
}

function preencherMenuOpcoes(idLista, idMenu) {
    var lista = document.getElementById(idLista);
    var menu = document.getElementById(idMenu);
    menu.innerHTML = ""; // Limpa as opções existentes

    for (var i = 0; i < lista.children.length; i++) {
        var option = document.createElement("option");
        option.text = lista.children[i].textContent;
        menu.add(option);
    }
}

function selecionarUnidade(element, idMenuDe, idMenuPara) {
    var unidadeSelecionada = element.textContent;
    document.getElementById(idMenuDe).value = unidadeSelecionada;
    document.getElementById(idMenuPara).value = unidadeSelecionada;
}

function limparDisplay() {
    document.getElementById("display").value = "";
}

function adicionarNoDisplay(valor) {
    document.getElementById("display").value += valor;
}
