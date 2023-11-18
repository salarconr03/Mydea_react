import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, ScrollView, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import * as ImagePicker from 'expo-image-picker';
import Imagen from './Imagenes/image-solid.svg';
import Telefono from './Imagenes/phone-solid.svg';
import Correo from './Imagenes/square-envelope-solid.svg'
import Facebook from './Imagenes/facebook.svg'
import Instagram from './Imagenes/square-instagram.svg'
import Twitter from './Imagenes/square-twitter.svg'
import Web from './Imagenes/globe-solid.svg'

const data = [
    { label: 'Abarrotes', value: '1' },
    { label: 'Materia prima', value: '2' },
    { label: 'Restaurantes', value: '3' },
    { label: 'Snacks y Postres', value: '4' },
    { label: 'Cafetería', value: '5' },
    { label: 'Catering', value: '6' },
    { label: 'Panadería', value: '7' },
    { label: 'Venta de Ortalizas o Frutas', value: '8' },
];

const data_2 = [
    { label: 'Disponible en todo momento', value: '1' },
    { label: 'Por pedido', value: '2' },
    { label: 'Mayoreo', value: '3' },
    { label: 'Solo por unidad', value: '4' },
    { label: 'Disponible por un tiempo', value: '5' },
    { label: 'Proximamente', value: '6' },
];

const data_3 = [
    { label: 'Lunes', value: '1' },
    { label: 'Martes', value: '2' },
    { label: 'Miércoles', value: '3' },
    { label: 'Jueves', value: '4' },
    { label: 'Viernes', value: '5' },
    { label: 'Sábado', value: '6' },
    { label: 'Domingo', value: '7' },
];

function Crear_negocio_formulario({navigation}) {

    const [fontsLoaded] = useFonts({
        'InriaSans': require('./fonts/Inria_sans/InriaSans-Regular.ttf'),
    });

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [image, setImage] = useState(null);
    const [image_2, setImage_2] = useState(null);
    const [image_3, setImage_3] = useState(null);
    const [image_4, setImage_4] = useState(null);
    const [image_5, setImage_5] = useState(null);


    if (!fontsLoaded) {
        return undefined;
    }


    const renderLabel = () => {
        if (value || isFocus) {
            return (
            <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                Dropdown label
            </Text>
            );
        }
        return null;
    };

    const pickImage = async (containerId) => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
            switch (containerId) {
                case 'container1':
                    setImage(result.assets[0].uri);
                    break;
                case 'container2':
                    setImage_2(result.assets[0].uri);
                    break;
                case 'container3':
                    setImage_3(result.assets[0].uri);
                    break;
                case 'container4':
                    setImage_4(result.assets[0].uri);
                    break;
                case 'container5':
                    setImage_5(result.assets[0].uri);
                    break;
                default:
                    break;
            }
        }
    };
    
    return (
        <SafeAreaView>
            <View style={styles.container_morado}></View>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>¡EMPECEMOS!</Text>
                    <View style={styles.contenedor_formulario}>
                        <Text style={styles.title_formulario}>Datos del negocio</Text>
                        <View style={styles.subcontenedor_formulario}>
                            <Text style={styles.subtitulo_formulario}>Nombre del negocio</Text>
                            <TextInput
                            style={styles.text_input}
                            placeholder="Nombre de su negocio"
                            ></TextInput>
                        </View>
                        <View style={styles.subcontenedor_formulario}>
                            <Text style={styles.subtitulo_formulario}>Tipo de negocio</Text>
                            <Dropdown
                                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                iconStyle={styles.iconStyle}
                                data={data}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocus ? 'Seleccione su tipo de negocio' : '...'}
                                value={value}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                setValue(item.value);
                                setIsFocus(false);
                                }}></Dropdown>
                        </View>
                        <View style={styles.subcontenedor_formulario}>
                            <Text style={styles.subtitulo_formulario}>Descripción del negocio</Text>
                            <TextInput style={styles.textArea_input} 
                            multiline
                            numberOfLines={4}
                            ></TextInput>
                        </View>
                        <View style={styles.subcontenedor_formulario}>
                            <Text style={styles.subtitulo_formulario}>Logo del negocio</Text>
                            <TouchableOpacity style={styles.boton_logo} onPress={() => pickImage('container1')}>
                                <Imagen width={50} height={50} style={styles.imagen_icono}></Imagen>
                                {image && <Image source={{ uri: image }} style={styles.Imagen_logo} />}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.subcontenedor_formulario}>
                            <Text style={styles.subtitulo_formulario}>Horarios</Text>
                            <View style={styles.contenedor_botones_semana}>
                            <Dropdown
                                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                iconStyle={styles.iconStyle}
                                data={data_3}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocus ? 'Seleccione la Disponibilidad del Producto o Servicio ' : '...'}
                                value={value}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                setValue(item.value);
                                setIsFocus(false);
                                }}>
                            </Dropdown>
                            </View>
                        </View>
                        <View style={styles.subcontenedor_formulario_direccion}>
                            <Text style={styles.subtitulo_formulario}>Dirección del local</Text>
                            <View style={styles.contenedor_mapa}></View>
                            <Text style={styles.texto}>Código postal</Text>
                            <TextInput
                            style={styles.text_input}
                            ></TextInput>
                            <Text style={styles.texto}>Colonia</Text>
                            <TextInput
                            style={styles.text_input}
                            ></TextInput>
                            <Text style={styles.texto}>Calle</Text>
                            <TextInput
                            style={styles.text_input}
                            ></TextInput>
                            <Text style={styles.texto}>Número interior</Text>
                            <TextInput
                            style={styles.text_input}
                            ></TextInput>
                        </View>
                        <View style={styles.subcontenedor_formulario_Imagenes}>
                            <Text style={styles.subtitulo_formulario}>Imagenes del local</Text>
                            <TouchableOpacity style={styles.contenedor_mapa} onPress={() => pickImage('container2')}>
                                <Imagen width={50} height={50} style={styles.imagen_icono}></Imagen>
                                {image_2 && <Image source={{ uri: image_2 }} style={styles.Imagen_logo} />}
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.contenedor_mapa} onPress={() => pickImage('container3')}>
                                <Imagen width={50} height={50} style={styles.imagen_icono}></Imagen>
                                {image_3 && <Image source={{ uri: image_3 }} style={styles.Imagen_logo} />}
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.contenedor_mapa} onPress={() => pickImage('container4')}>
                                <Imagen width={50} height={50} style={styles.imagen_icono}></Imagen>
                                {image_4 && <Image source={{ uri: image_4 }} style={styles.Imagen_logo} />}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.subcontenedor_formulario_Imagenes}>
                            <Text style={styles.subtitulo_formulario}>Contactos del local</Text>
                            <View style={styles.contenedor_contacto}>
                                <Telefono width={40} height={40} style={styles.contacto_icono}></Telefono>
                                <TextInput style={styles.input_contacto}></TextInput>
                            </View>
                            <View style={styles.contenedor_contacto}>
                                <Correo width={40} height={40} style={styles.contacto_icono}></Correo>
                                <TextInput style={styles.input_contacto}></TextInput>
                            </View>
                            <View style={styles.contenedor_contacto}>
                                <Facebook width={40} height={40} style={styles.contacto_icono}></Facebook>
                                <TextInput style={styles.input_contacto}></TextInput>
                            </View>
                            <View style={styles.contenedor_contacto}>
                                <Instagram width={40} height={40} style={styles.contacto_icono}></Instagram>
                                <TextInput style={styles.input_contacto}></TextInput>
                            </View>
                            <View style={styles.contenedor_contacto}>
                                <Twitter width={40} height={40} style={styles.contacto_icono}></Twitter>
                                <TextInput style={styles.input_contacto}></TextInput>
                            </View>
                            <View style={styles.contenedor_contacto}>
                                <Web width={40} height={40} style={styles.contacto_icono}></Web>
                                <TextInput style={styles.input_contacto}></TextInput>
                            </View>
                        </View>
                        <Text style={styles.title_formulario}>Crear y Añadir Productos o Servicios</Text>
                        <View style={styles.subcontenedor_formulario_Imagenes}>
                            <Text style={styles.subtitulo_formulario}>Imagen del producto o servicio</Text>
                            <TouchableOpacity style={styles.boton_logo} onPress={() => pickImage('container5')}>
                                <Imagen width={50} height={50} style={styles.imagen_icono}></Imagen>
                                {image_5 && <Image source={{ uri: image_5 }} style={styles.Imagen_logo} />}
                            </TouchableOpacity>
                            <Text style={styles.subtitulo_formulario}>Nombre del producto o servicio</Text>
                            <TextInput
                            style={styles.text_input}
                            ></TextInput>
                            <Text style={styles.subtitulo_formulario}>Precio del producto o servicio</Text>
                            <TextInput
                            style={styles.text_input}
                            ></TextInput>
                            <Text style={styles.subtitulo_formulario}>Descripción del producto o servicio</Text>
                            <TextInput style={styles.textArea_input} 
                            multiline
                            numberOfLines={4}
                            ></TextInput>
                            <Text style={styles.subtitulo_formulario}>Disponibilidad del Producto o Servicio </Text>
                            <Dropdown
                                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                iconStyle={styles.iconStyle}
                                data={data_2}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocus ? 'Seleccione la Disponibilidad del Producto o Servicio ' : '...'}
                                value={value}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                setValue(item.value);
                                setIsFocus(false);
                                }}>
                            </Dropdown>
                            <TouchableOpacity style={styles.boton_agregar_lista}>
                                <Text style={styles.texto_boton}>Agregar a la lista</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.title_formulario}>Lista de productos</Text>
                        <View style={styles.subcontenedor_formulario_Imagenes}>
                            <View style={styles.contenedor_mapa}></View>
                            <View style={styles.contenedor_mapa}></View>
                            <View style={styles.contenedor_mapa}></View>
                        </View>
                        <TouchableOpacity style={styles.boton_agregar_lista}>
                                <Text style={styles.texto_boton}>Continuar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container_morado: {
        backgroundColor: '#5B1D63',
        width: '100%',
        height: 150,
        position: 'absolute', 
    },
    container: {
        alignItems: 'center', 
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'InriaSans',
        fontSize: 40,
        margin: 10,
        color: '#fff',
    },
    contenedor_formulario: {
        backgroundColor: '#f8f8f8',
        borderColor: '#000',
        borderStyle:'solid',
        borderWidth: 3,
        borderRadius: 7,
        width: '90%',
        alignItems: 'center', 
        justifyContent: 'center',
    },
    title_formulario: {
        fontFamily: 'InriaSans',
        fontSize: 30,
        margin: 10,
        fontWeight: 'bold',
    },
    subcontenedor_formulario: {
        alignItems: 'center', 
        width: '90%',
    },
    subcontenedor_formulario_direccion: {
        alignItems: 'center', 
        width: '90%',
        borderColor: '#000',
        borderStyle:'solid',
        borderTopWidth: 3,
        borderBottomWidth: 3,
    },
    subcontenedor_formulario_Imagenes: {
        alignItems: 'center', 
        width: '90%',
        borderColor: '#000',
        borderStyle:'solid',
        borderBottomWidth: 3,
    },
    subtitulo_formulario: {
        fontFamily: 'InriaSans',
        fontSize: 20,
        marginTop: 10,
        marginBottom: 2,
        fontWeight: 'bold',
    },
    text_input: {
        borderColor: '#000',
        borderStyle:'solid',
        borderWidth: 2,
        borderRadius: 7,
        width: '100%',
        marginBottom: 10,
        height: 50,
        backgroundColor: '#E5E5E5',
        padding: 10,
        fontSize: 16,
    },
    textArea_input: {
        borderColor: '#000',
        borderStyle:'solid',
        borderWidth: 2,
        borderRadius: 7,
        width: '100%',
        marginBottom: 10,
        height: 100,
        backgroundColor: '#E5E5E5',
        padding: 10,
        fontSize: 16,
    },
    dropdown: {
        height: 50,
        borderColor: '#000',
        borderStyle:'solid',
        borderWidth: 2,
        borderRadius: 7,
        backgroundColor: '#E5E5E5',
        marginBottom: 10,
        width: '100%', 
    },
    placeholderStyle: {
        fontSize: 16,
        margin: 6,
    },
    selectedTextStyle: {
        fontSize: 16,
        margin: 6,
    },
    boton_logo: {
        borderColor: '#000',
        borderStyle:'solid',
        borderWidth: 2,
        borderRadius: 7,
        width: '50%',
        marginBottom: 10,
        height: 150,
        backgroundColor: '#E5E5E5',
        elevation: 4,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    imagen_icono: {
        fill: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        zIndex: 10, 
    },
    Imagen_logo: {
        width: '100%',
        height: 148,
        borderRadius: 7,
    },
    contenedor_botones_semana: {
        flexDirection: 'row',
        width: '90%',
    },
    boton_dia: {
        flex: 1,
        borderColor: '#E5E5E5',
        borderStyle:'solid',
        borderWidth: 2,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
        marginBottom: 10,
        height: 50,
        backgroundColor: '#E5E5E5',
        alignItems: 'center', 
        justifyContent: 'center',
    },
    
    boton_cerrado: {
        alignItems: 'center', 
        justifyContent: 'center',
        flex: 1, 
        backgroundColor: '#F43770',
        borderColor: '#F43770',
        borderStyle:'solid',
        borderWidth: 2,
        height: 50,
    },
    boton_sin_horario: {
        alignItems: 'center', 
        justifyContent: 'center',
        flex: 1, 
        backgroundColor: '#000',
        borderColor: '#000',
        borderStyle:'solid',
        borderWidth: 2,
        height: 50,
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
    },
    contenedor_mapa:{
        borderColor: '#000',
        borderStyle:'solid',
        borderWidth: 2,
        borderRadius: 7,
        width: '100%',
        marginBottom: 10,
        height: 150,
        backgroundColor: '#E5E5E5',
        elevation: 4,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    texto: {
        fontFamily: 'InriaSans',
        fontSize: 20,
        marginTop: 10,
        marginBottom: 2,
    },
    contenedor_contacto: {
        flexDirection: 'row',
        width: '100%',
    },
    input_contacto: {
        flex: 1,
        borderColor: '#000',
        borderStyle:'solid',
        borderWidth: 2,
        borderRadius: 7,
        marginBottom: 10,
        height: 50,
        backgroundColor: '#E5E5E5',
        padding: 10,
        fontSize: 16,
    },
    contacto_icono: {
        flex: 1,
        margin: 5,
    },
    boton_agregar_lista: {
        alignItems: 'center', 
        justifyContent: 'center',
        flex: 1, 
        backgroundColor: '#F43770',
        borderColor: '#F43770',
        borderStyle:'solid',
        borderWidth: 2,
        borderRadius: 7,
        height: 50,
        marginTop: 6,
        marginBottom: 10,
    },
    texto_boton: {
        color: '#fff',
        fontFamily: 'InriaSans',
        fontSize: 20,
        marginHorizontal: 5,
    },
});

export default Crear_negocio_formulario;