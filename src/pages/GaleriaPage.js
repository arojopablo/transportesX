import React from "react";
import "../styles/components/pages/galeriaPage.css";

const img01 =  'images/galeria/img01.jpg';
const img02 =  'images/galeria/img02.jpg';
const img03 =  'images/galeria/img03.jpg';
const img04 =  'images/galeria/img04.jpg';
const img05 =  'images/galeria/img05.jpg';
const img06 =  'images/galeria/img06.jpg';
const img07 =  'images/galeria/img07.jpg';


const GaleriaPage = (props) => {
    return (
        <main className="holder">
       <div className="galeria">
           <div className="foto"><img src={img01} alt="" /></div>
           <div className="foto"><img src={img02} alt="" /></div>
           <div className="foto"><img src={img03} alt="" /></div>
           <div className="foto"><img src={img04} alt="" /></div>
           <div className="foto"><img src={img05} alt="" /></div>
           <div className="foto"><img src={img06} alt="" /></div>
           <div className="foto"><img src={img07} alt="" /></div>
       </div>


    </main>
    );
}

export default GaleriaPage;