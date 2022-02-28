import React from "react";
import "../styles/components/pages/contactoPage.css";

const ContactoPage = (props) => {
    return (
        <main className="holder">
        <div className="columna left">
            <h2>Contacto Rapido</h2>
            <form action="" method="" class="formulario">
                <p>
                    <label for="">Nombre</label>
                    <input type="text" />
                </p>
                <p>
                    <label for="">Email</label>
                    <input type="email" />
                </p>
                <p>
                    <label for="">Telefono</label>
                    <input type="text" />
                </p>
                <p>
                    <label for="comentraio">Comentario</label>
                    <textarea id="comentario"></textarea>
                </p>
                <p className="acciones"><input type="submit" value = "Enviar" /></p>
            </form>
        </div>
        <div className="columna right">
            <h2>Otras vias de contacto</h2>
            <p>Tambien se puede comunicar con nosotros...</p>
            <ul>
                <li>Telefono 4578-7894</li>
                <li>Email contacto@transportesX.com.ar</li>
                <li>Facebook</li>
                <li>Twiter</li>
                <li>Skype</li>
            </ul>
        </div>
        <div>          
    </div>
    </main>
    );
}

export default ContactoPage;