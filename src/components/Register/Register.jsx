import { Link } from "react-router-dom"
import { useState } from "react"
import { db } from "../../services/firebase"
import { addDoc, collection } from "firebase/firestore"
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const history = useNavigate();
    const [name, setName] = useState("")
    const [paterno, setPaterno] = useState("")
    const [materno, setMaterno] = useState("")
    const [date, setDate] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [error, setError] = useState("")

    const handleRegister = (e) => {
        e.preventDefault();
        if (!name || !paterno || !materno || !date || !email || !password || !password2) {
            setError('Por favor llena todo los datos')
            return;
        }

        if (password !== password2) {
            setError('Las contraseñas no coinciden')
            return;
        }
    let expresiones=/^[a-zA-Z8-9\_\-]{4,16}$/
           
        if(name === expresiones){
            setError('Error en nombre')
            return;
        }

        const usuario = {
            name: name,
            paterno: paterno,
            materno: materno,
            date: date,
            email: email,
            password: password
        }
        

        addDoc(collection(db, 'users'), usuario)
            .then((docRef) => {
                usuario.id = docRef.id
                setError("")
                window.localStorage.setItem(
                    'userLogged', JSON.stringify(usuario)
                )
                history('/')
            })
            .catch((error) => {
                console.log("Error al crear la orden", error, usuario);
                setError("Se produjo un error en el registro intentelo mas tarde.");
            })
    }


    return (
        <section className="bg-white" >
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                    <img alt="Pattern" src="https://www.my-vb.com/sites/default/files/styles/image_art/public/2019-05/M%C3%A9tier%20-%20Barman.jpg?itok=Km0Uj04v" className="absolute inset-0 h-full w-full object-cover" />
                </aside>

                <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                    <div className="max-w-xl lg:max-w-3xl">
                        <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                            Crea tu cuenta en SmartDrink
                        </h1>
                        <p className="mt-4 leading-relaxed text-gray-500">
                        Completa todos los campos para poder comprar los productos de tu preferencia.                         </p>
                        <form onSubmit={handleRegister} className="mt-8 grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                                    Nombre(s)
                                </label>
                                <input type="text" id="FirstName" name="first_name" required maxLength="20" className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2 border" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="LastName" required maxLength="20" className="block text-sm font-medium text-gray-700">
                                    Apellido paterno
                                </label>

                                <input type="text" id="LastName" name="last_name" className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2 border" value={paterno} onChange={(e) => setPaterno(e.target.value)} />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="FirstName"  className="block text-sm font-medium text-gray-700">
                                    Apellido paterno
                                </label>
                                <input type="text" id="FirstName" required maxLength="20" name="first_name" className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2 border" value={materno} onChange={(e) => setMaterno(e.target.value)} />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="LastName"required  maxLength="8" className="block text-sm font-medium text-gray-700">
                                    Fecha de Nacimiento
                                </label>
                                <input type="date" id="LastName"  name="last_name" className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2 border" value={date} onChange={(e) => setDate(e.target.value)} />
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                                    Correo electrónico
                                </label>
                                <input type="email" required id="Email" name="email" className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2 border" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="Password" required className="block text-sm font-medium text-gray-700">
                                    Contraseña
                                </label>
                                <input type="password" id="Password" name="password" className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2 border" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                                    Confirmar contraseña
                                </label>

                                <input type="password" required id="PasswordConfirmation" name="password_confirmation" className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2 border" value={password2} onChange={(e) => setPassword2(e.target.value)} />
                            </div>

                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button className="inline-block shrink-0 rounded-md border bg-black px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-black hover:border-black">
                                    Registrarme
                                </button>

                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    ¿Ya tienes cuenta?
                                    <Link to={'/login'} href="#" className="text-gray-700 underline ml-1">Iniciar sesión</Link>.
                                </p>
                            </div>
                        </form>
                        {
                            error && <p className="text-center font-semibold my-4 text-red-700">{error}</p>
                        }
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Register
