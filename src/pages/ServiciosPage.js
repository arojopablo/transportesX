import React from "react";

const aereo =  'images/servicios/aereo.jpg';
const ferroviario =  'images/servicios/ferroviario.jpg';
const terrestre =  'images/servicios/terrestre.jpg';
const maritimo =  'images/servicios/maritimo.jpg';


const ServiciosPage = (props) => {
    return (
        <main className="holder">
        <h2>Servicios</h2>
        <div className="servicio">
            <img src={ferroviario} alt="Tren" />
            <div className="info">
                <h4>Transporte ferroviario</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Reiciendis, nostrum facere quisquam eum ducimus tenetur aut aperiam tempore dolorem magnam enim qui quidem sed, 
                    dolores molestiae temporibus nesciunt error quo!</p>
            </div>
        </div>
        <div className="servicio">
         <img src={aereo} alt="Tren" />
         <div className="info">
             <h4>Transporte aereo</h4>
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                 Reiciendis, nostrum facere quisquam eum ducimus tenetur aut aperiam tempore dolorem magnam enim qui quidem sed, 
                 dolores molestiae temporibus nesciunt error quo!</p>
         </div>
     </div>
     <div className="servicio">
         <img src={aereo} alt="Tren" />
         <div className="info">
             <h4>Transporte maritimo</h4>
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                 Reiciendis, nostrum facere quisquam eum ducimus tenetur aut aperiam tempore dolorem magnam enim qui quidem sed, 
                 dolores molestiae temporibus nesciunt error quo!</p>
         </div>
     </div>
     <div className="servicio">
         <img src={terrestre}alt="Tren" />
         <div className="info">
             <h4>Transporte terrestre</h4>
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                 Reiciendis, nostrum facere quisquam eum ducimus tenetur aut aperiam tempore dolorem magnam enim qui quidem sed, 
                 dolores molestiae temporibus nesciunt error quo!</p>
         </div>
     </div>
     </main>
    );
}

export default ServiciosPage;