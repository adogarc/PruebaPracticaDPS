import React from "react";
import { StyleSheet,TextInput,View } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

export default function Form(props) {
    const{setNombre,setApellido,setSexo,setDui,setNit,setFecha,setNacionalidad,setDireccion,setMunicipio,setDepartamento}=props;

    return(
    <View style={styles.viewForm}>
        <View syle={styles.viewInputs}>
            <TextInput placeholder="Ingrese su nombre" keyboardType="default" style={styles.input} onChange={(e)=>setNombre(e.nativeEvent.text)}/>
            <TextInput placeholder="Ingrese su apellido" keyboardType="default" style={styles.input} onChange={(e)=>setApellido(e.nativeEvent.text)}/>
        </View>
        <RNPickerSelect style={picketSelectStyles.inputAndroid} onValueChange={(value)=>setSexo(value)} placeholder={{label:'Seleccion de sexo',value:null,}}
        items={[{label:'Hombre', value:'hombre'},{label:'Mujer', value:'mujer'},]}/>
         <View syle={styles.viewInputs}>
            <TextInput placeholder="Ingrese su Dui sin guion" keyboardType="numeric" style={styles.input} onChange={(e)=>setDui(e.nativeEvent.text)}/>
            <TextInput placeholder="Ingrese su Nit sin guion" keyboardType="numeric" style={styles.input} onChange={(e)=>setNit(e.nativeEvent.text)}/>
            <TextInput placeholder="Ingrese la fecha" keyboardType="number-pad" style={styles.input} onChange={(e)=>setFecha(e.nativeEvent.text)}/>
            <TextInput placeholder="Ingrese su Nacionalidad " keyboardType="default" style={styles.input} onChange={(e)=>setNacionalidad(e.nativeEvent.text)}/>
        </View>
        <RNPickerSelect style={picketSelectStyles.inputAndroid} onValueChange={(value)=>setDepartamento(value)} placeholder={{label:'Seleccione su Departamento',value:null,}}
        items={[{label:'Ahuchapan', value:'Ahuachapan'},{label:'Santa Ana', value:'Santa Ana'},{label:'Sonsonate', value:'Sonsonate'},{label:'Chalatenango', value:'Chalatenango'},{label:'La Libertad', value:'La Libertad'},{label:'San Salvador', value:'San Salvador'},{label:'Cuscatlan', value:'Cuscatlan'},{label:'Cabañas', value:'Cabañas'},{label:'La Paz', value:'La Paz'},{label:'Usulutan', value:'Usulutan'},{label:'San Vicente', value:'San Vicente'},{label:'San Miguel', value:'San Miguel'},{label:'Morazan', value:'Morazan'},{label:'La Union', value:'La Union'},]}/>
        <View syle={styles.viewInputs}>
            <TextInput placeholder="Ingrese el municipio" keyboardType="default" style={styles.input} onChange={(e)=>setMunicipio(e.nativeEvent.text)}/>
            <TextInput placeholder="Ingrese su Dirección" keyboardType="default" style={styles.input} onChange={(e)=>setDireccion(e.nativeEvent.text)}/>
        </View>
    </View>
    );
}
const styles=StyleSheet.create({
    viewForm:{
        position:'absolute',
        bottom:0,
        width:'100%',
        paddingLeft:30,
        paddingHorizontal:20,
        backgroundColor:'white',
        height:750,
        justifyContent:'center',
    },
    viewInputs:{
        flexDirection:'row',
    },
    input:{
        height:50,
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor: 'blue',
        borderRadius: 5,
        width: '100%',
        marginRight: 5,
        marginLeft: -3,
        marginBottom: 10,
        color: '#000',
        paddingHorizontal: 20,
        
    },
});
const picketSelectStyles=StyleSheet.create({
    inputIOS:{
        fontSize:16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#fff',
        marginLeft: -5,
        marginRight: -5,
        },
        inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        padding:5,
        paddingVertical: 9,
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#fff',
        },
});