import React, { useState, useEffect } from "react";
import {  StatusBar, StyleSheet, Text, ScrollView, View,SafeAreaView, Dimensions} from "react-native";
import Footer from "./src/component/footer";

//Archivos importados desde src/components
import Form from './src/component/form';
const{height}=Dimensions.get('window');
export default function App() {
   state={screenHeight:0,
  };
  onContentSizeChange=(contentWidth, contentHeight)=>{
    this.setState({screenHeight:contentHeight});
  };
  const scrollEnabled=this.state.screenHeight>height;
    const[nombre, setNombre]=useState(null);
    const [apellido, setApellido]=useState(null);
    const [sexo, setSexo]=useState(null);
    const [dui, setDui] = useState(null);
    const[nit, setNit]=useState(null);
    const [fecha, setFecha]=useState(null);
    const [nacionalidad, setNacionalidad]=useState(null);
    const [departamento, setDepartamento] = useState(null);
    const [municipio, setMunicipio]=useState(null);
    const [dirección, setDireccion] = useState(null);
    //validacion
    useEffect(() => {
      if (nombre && apellido && sexo && dui && nit && fecha && nacionalidad && departamento && municipio && dirección) ingresarDatos();
        
      }, [nombre, apellido, sexo,dui,nit,fecha,nacionalidad,departamento,municipio,dirección]);
      const ingresarDatos = () => {
      if (!nombre) {
        setErrorMessage('Debes añadir un nombre');
        } else if (!apellido) {
        setErrorMessage('Debes añadir un apellido');
        } else if (!sexo) {
        setErrorMessage('Debes seleccionar tu sexo');
        }else if (!dui) {
          setErrorMessage('Debes añadir tu dui');
        }else if (!nit) {
            setErrorMessage('Debes añadir tu nit');
        }else if (!fecha) {
              setErrorMessage('Debes añadir tu fecha de nacimiento');
        }else if (!nacionalidad) {
          setErrorMessage('Debes añadir tu nacionalidad');
        }else if (!departamento) {
            setErrorMessage('Debes elegir un departamento');
        }else if (!municipio) {
          setErrorMessage('Debes añadir tu municipio');
        }else if (!direccion) {
            setErrorMessage('Debes Completar tu dirección');
        }else{
          setErrorMessage('No se han llenado los campos');
        }
        };
       

  return (
    <>
    <StatusBar barStyle="light-content"/>
    <ScrollView style={{flex:1}} contentContainerStyle={styles.ScrollView} scrollEnabled={scrollEnabled} onContentSizeChange={this.onContentSizeChange}>
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.background} />
      <Text style={styles.titleApp}>Registro de pacientes UDB</Text>
        </SafeAreaView>
      <Form setNombre={setNombre} setApellido={setApellido} setSexo={setSexo} setDui={setDui} setNit={setNit} setFecha={setFecha}
              setNacionalidad={setNacionalidad} setDepartamento={setDepartamento} setMunicipio={setMunicipio} setDireccion={setDireccion}/>
      <Footer></Footer>
    </ScrollView>
    
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    height: 200,
    alignItems: 'center',
    },
    background: {
    backgroundColor: 'blue',
    height: 1000,
    width: '100%',
    position: 'absolute',
    zIndex: -1,
    },
    titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
    },
});