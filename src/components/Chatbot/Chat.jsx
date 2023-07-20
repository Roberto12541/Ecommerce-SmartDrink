import Chatbot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components';
import { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';
import { useNavigate } from 'react-router-dom'

const theme = {
    background: '#f5f8fb',
    headerBgColor: '#000000',
    headerFontColor: '#fff',
    headerFontSize: '20px',
    botBubbleColor: '#ccd3db',
    botFontColor: '#000000',
    userBubbleColor: '#f1f0f0',
    userFontColor: '#000000',
}

const Chat = () => {
    const { datos, login } = useContext(LoginContext);
    const history = useNavigate();

    return (
        <ThemeProvider theme={theme}>
            <Chatbot
                // recognitionEnable={true}
                // recognitionLang={'es'}
                // cache = {true}
                headerTitle="SmartBot"
                userAvatar="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                botAvatar="https://cdn1.iconfinder.com/data/icons/robots-avatars-set/354/Robot_avatar___robot_robo_avatar_chatbot_chat-512.png"
                steps={[
                    {
                        id: 'Saludo',
                        message: `¡Hola!👋 ${login ? datos[0].name : ''}`,
                        trigger: login ? 'ayuda' : 'Presentacion',
                        hideInput: true,
                    },
                    {
                        id: 'Presentacion',
                        message: 'Soy SmartBot 🤖, tu asistente virtual de SmartDrink. ¿Cual es tu nombre?',
                        trigger: 'Ingrese-nombre'
                    },
                    {
                        id: 'despedida',
                        message: '¡Fue un gusto atenderte! Recuerda que estoy para ayudarte. 🙋',
                        trigger: 'Ingrese-nombre'
                    },
                    {
                        id: 'Mas',
                        message: '¿Puedo apoyarte en algo más?',
                        trigger: 'SiNo'
                    },
                    {
                        id: 'SiNo',
                        options: [
                            { value: 'Si', label: 'Si', trigger: 'ayuda' },
                            { value: 'No', label: 'No', trigger: 'despedida' },
                        ]
                    },
                    {
                        id: 'Ingrese-nombre',
                        user: true,
                        trigger: 'Respuesta-nombre'
                    },
                    {
                        id: 'Respuesta-nombre',
                        message: '¡Hola! {previousValue}',
                        trigger: 'ayuda',
                        hideInput: true
                    },
                    {
                        id: 'ayuda',
                        message: '¿En que puedo ayudarte?',
                        trigger: 'opciones',
                        hideInput: true
                    },
                    {
                        id: 'opciones',
                        options: [
                            { value: 'Productos', label: 'Productos', trigger: 'Productos' },
                            { value: 'Servicios', label: 'Servicios', trigger: 'Opciones-Planes' },
                            { value: 'Contacto', label: 'Contacto', trigger: 'Contacto' }
                        ],
                        hideInput: true
                    },
                    {
                        id: 'Productos',
                        message: '¿Qué productos deseas consultar?',
                        trigger: 'Opciones-Productos',
                        hideInput: true
                    },
                    {
                        id: 'Opciones-Productos',
                        options: [
                            { value: 'Luces', label: 'Luces', trigger: () => history('/productos/Luces') },
                            { value: 'Apagadores', label: 'Apagadores', trigger: () => history('/productos/Apagadores') },
                            { value: 'Limpieza', label: 'Limpieza', trigger: () => history('/productos/Limpieza') },
                            { value: 'Aire-Acondicionado', label: 'Aire-Acondicionado', trigger: () => history('/productos/Aire-Acondicionado') },
                            { value: 'Enchufes', label: 'Enchufes', trigger: () => history('/productos/Enchufes') },
                        ]
                    },
                    {
                        id: 'Opciones-Planes',
                        message: '¿Cual plan deseas conocer?',
                        trigger: 'Planes'
                    },
                    {
                        id: 'Planes',
                        options: [
                            { value: 'SmartBasic', label: 'SmartBasic', trigger: 'SmartBasic' },
                            { value: 'SmartInter', label: 'SmartInter', trigger: 'SmartInter' },
                            { value: 'SmartPro', label: 'SmartPro', trigger: 'SmartPro' }
                        ]
                    },
                    {
                        id: 'Comprar/CancelarBasico',
                        options: [
                            { value: 'Comprar', label: 'Comprar', trigger: () => login ? history('/checkout/29999/SmartBasic') : history('/login') },
                            { value: 'Volver', label: 'Volver', trigger: 'ayuda' }
                        ]
                    },
                    {
                        id: 'Comprar/CancelarInter',
                        options: [
                            { value: 'Comprar', label: 'Comprar', trigger: () => login ? history('/checkout/36999/SmartInter') : history('/login') },
                            { value: 'Volver', label: 'Volver', trigger: 'ayuda' }
                        ]
                    },
                    {
                        id: 'Comprar/CancelarPro',
                        options: [
                            { value: 'Comprar', label: 'Comprar', trigger: () => login ? history('/checkout/49999/SmartPro') : history('/login') },
                            { value: 'Volver', label: 'Volver', trigger: 'ayuda' }
                        ]
                    },
                    {
                        id: 'SmartBasic',
                        message: 'Con el paquete SmartBasic tendrás acceso a tutoriales detallados para un mejor manejo de tu Drinker y soporte básico para dudas o preguntas.',
                        trigger: 'SmartBasic-Precio'
                    },
                    {
                        id: 'SmartBasic-Precio',
                        message: 'Precio: $29,999 MXN',
                        trigger: 'Comprar/CancelarBasico'
                    },
                    {
                        id: 'SmartInter',
                        message: 'Con el paquete SmartInter obtendrás la capacitación completa para el personal, de esta manera se tendrá un mejor funcionamiento y durabilidad del Drinker.',
                        trigger: 'SmartInter-Precio'
                    },
                    {
                        id: 'SmartInter-Precio',
                        message: 'Precio: $36,999 MXN',
                        trigger: 'Comprar/CancelarInter'
                    },
                    {
                        id: 'SmartPro',
                        message: 'Con el paquete SmartPro podrás elegir el diseño de tu preferencia para tu Drinker. Asi como capacitaciones completas al personal, Soporte técnico 24/7 más.',
                        trigger: 'SmartPro-Precio'
                    },
                    {
                        id: 'SmartPro-Precio',
                        message: 'Precio: $49,999 MXN',
                        trigger: 'Comprar/CancelarPro'
                    },
                    {
                        id: 'Contacto',
                        message: 'Para contactarte con nosotros puedes comunicarte a través de los siguientes medios:',
                        trigger: 'Telefono'
                    },
                    {
                        id: 'Telefono',
                        message: 'Teléfono: 56-31-40-37-19',
                        trigger: 'Correo'
                    },
                    {
                        id: 'Correo',
                        message: 'Correo electrónico: smartdrinkk@gmail.com',
                        trigger: 'Redes'
                    },
                    {
                        id: 'Redes',
                        message: 'Tambien puedes encontrarnos en todas las redes sociales como SmartDrink',
                        trigger: 'Mas'
                    },
                ]} />
        </ThemeProvider>
    )
}

export default Chat
