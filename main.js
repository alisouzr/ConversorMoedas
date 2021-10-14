function Converter() {
    var valorParaConverter = document.getElementById("tipoMoeda").value;

    if (valorParaConverter == "USD") {
        var resultadoConversao =
            "O valor convertido em REAL é R$" +
            parseFloat(document.getElementById("valor").value * 5.26).toFixed(2);
        document.getElementById("resultado").innerHTML = resultadoConversao;
    } else if (valorParaConverter == "EUR") {
        var resultadoConversao =
            "O valor convertido em REAL é R$" +
            parseFloat(document.getElementById("valor").value * 6.19).toFixed(2);
        document.getElementById("resultado").innerHTML = resultadoConversao;
    } else if (valorParaConverter == "IENE") {
        var resultadoConversao =
            "O valor convertido em REAL é R$" +
            parseFloat(document.getElementById("valor").value * 0.048).toFixed(2);
        document.getElementById("resultado").innerHTML = resultadoConversao;
    } else {
        var resultadoConversao =
            "O valor convertido em REAL é R$" +
            parseFloat(document.getElementById("valor").value * 248954.17).toFixed(2);
        document.getElementById("resultado").innerHTML = resultadoConversao;
    }
}
