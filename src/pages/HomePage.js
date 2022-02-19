import React from "react";

const img01 =  'images/home/img01.jpg';



const HomePage = (props) => {
    return (
        <main className="holder">
        <div className="homeimg">
            <img src={img01} class="homeImagen" alt="Avion" />
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Beatae possimus molestias deserunt enim voluptas necessitatibus recusandae tempore aspernatur, 
                         dolorem nobis illo fugit dicta, ut itaque nostrum, fuga dolore iste corrupti?</p>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Beatae possimus molestias deserunt enim voluptas necessitatibus recusandae tempore aspernatur, 
                            dolorem nobis illo fugit dicta, ut itaque nostrum, fuga dolore iste corrupti?</p>
                </div>
                <div className="testimonios right">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente excelente</span>
                        <span className="autor">Juan Perez - zapatos.com </span>
                    </div>
                </div>
            </div>
        </div>

    </main>
    );
}

export default HomePage;