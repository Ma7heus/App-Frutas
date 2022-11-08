import React from "react";
import { Image, StyleSheet, Dimensions, Text, View, TouchableOpacity} from 'react-native';
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';
import Texto from '../componentes/Texto';

const width = Dimensions.get('screen').width;


export default function Cesta() {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>Detalhe da Cestas</Texto>
        <View style={estilos.cesta}>
            <Texto style={estilos.nome}>Cesta de Verduras</Texto>
            <View style={estilos.fazenda}>
                <Image source={logo} style={estilos.fazenda.imagemFazenda}></Image>
                <Texto style={estilos.fazenda.nomeFazenda}>Jenny Jack Farm</Texto>
            </View>
            <Texto style={estilos.descricao}>Uma cesta com produtos selecionados
                cuidadosamente da fazenda direto para sua cozinha
            </Texto>
            <Texto style={estilos.preco}>R$ 40,00</Texto>
            


        </View>


    </>
}
const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        heigth: 578 / 768 * width,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 30,
        lineHeight: 26,
        color: "white",
        padding: 30,
        fontWeight: "bold"
    },
    cesta: {
        paddingVertical: 16,
        paddingHorizontal: 16,
    },  
    nome: {
        fontSize: 30,
        lineHeight: 42,
        color: "#464646",
        fontWeight:"bold"
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 10,

        nomeFazenda: {
            fontSize: 20,
            lineHeight: 30,
            marginLeft: 10,
            fontFamily:"Montserrat_400Regular"
        },
        imagemFazenda: {
            width: 40,
            height: 40,
        },

    },

    descricao: {
        color: "#A3A3A3",
        fontSize: 20,
        lineHeight: 30,
    },
    preco: {
        color: "#2A9F85",
        fontSize: 40,
        lineHeight: 60,
        marginTop: 10,
        fontWeight: "bold",

    }


});

