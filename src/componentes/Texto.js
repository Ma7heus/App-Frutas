import React from "react";
import { StyleSheet,Text } from "react-native";

export default function Texto({children, style}){// COLOCAR O STYLE SERVE PARA ELE NAO IGNORAR AS CONFIGURACOES DO OBJETO
    let estilo = estilos.texto;

    if(style?.fontWeight === 'bold') {
        estilo = estilos.textoNegrito;
    }
    
    return <Text style={[style,estilo]}>{ children }</Text>
}

const estilos = StyleSheet.create({
    texto:{
        fontFamily:"Montserrat_400Regular",
        fontWeight: "normal"
    },
    textoNegrito:{
        fontFamily: "Montserrat_700Bold",
        fontWeight: "normal"
    }
})