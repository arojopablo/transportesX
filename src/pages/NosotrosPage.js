import React from "react";

const nosotros1 =  'images/nosotros/nosotros1.jpg';
const nosotros2 =  'images/nosotros/nosotros2.jpg';
const nosotros3 =  'images/nosotros/nosotros3.jpg';
const nosotros4 =  'images/nosotros/nosotros4.jpg';
const nosotros5 =  'images/nosotros/nosotros5.jpg';


const NosotrosPage = (props) => {
    return (
        <main className="holder">
        <div className="historia">
            <h2>Historia</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cum impedit sed corrupti repellendus at ex,
                dolorum suscipit libero aut autem nam dolores totam sit tempore labore et fugiat vel consectetur!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cum impedit sed corrupti repellendus at ex,
                dolorum suscipit libero aut autem nam dolores totam sit tempore labore et fugiat vel consectetur!</p>
        </div>
        <div className="staff">
            <h2>Staff</h2>
            <div class="personas">
                <div class="persona">
                    <img src={nosotros1} alt="Juan Gomez" />
                    <h5>Juan Gomez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quo voluptate nesciunt minus corrupti,
                        ducimus perspiciatis tenetur magnam asperiores!
                        Neque accusamus unde debitis dolore expedita iste blanditiis sequi minus dolorem eveniet!</p>
                </div>
                <div className="persona">
                    <img src={nosotros2}  alt="Juan Gomez" />
                    <h5>Juan Gomez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quo voluptate nesciunt minus corrupti,
                        ducimus perspiciatis tenetur magnam asperiores!
                        Neque accusamus unde debitis dolore expedita iste blanditiis sequi minus dolorem eveniet!</p>
                </div>
                <div className="persona">
                    <img src={nosotros3} alt="Juan Gomez" />
                    <h5>Juan Gomez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quo voluptate nesciunt minus corrupti,
                        ducimus perspiciatis tenetur magnam asperiores!
                        Neque accusamus unde debitis dolore expedita iste blanditiis sequi minus dolorem eveniet!</p>
                </div>
                <div className="persona">
                    <img src={nosotros4}  alt="Juan Gomez" />
                    <h5>Juan Gomez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quo voluptate nesciunt minus corrupti,
                        ducimus perspiciatis tenetur magnam asperiores!
                        Neque accusamus unde debitis dolore expedita iste blanditiis sequi minus dolorem eveniet!</p>
                </div>
                <div className="persona">
                    <img src={nosotros5}  alt="Juan Gomez" />
                    <h5>Juan Gomez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quo voluptate nesciunt minus corrupti,
                        ducimus perspiciatis tenetur magnam asperiores!
                        Neque accusamus unde debitis dolore expedita iste blanditiis sequi minus dolorem eveniet!</p>
                </div>
            </div>
        </div>


    </main> 
    );
}

export default NosotrosPage;