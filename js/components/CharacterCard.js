class CharacterCard extends HTMLElement {
    constructor() {
        super();
        //se adjunta un shadow DOM en modo abierto para encapsular estilos y estructura
        this.attachShadow({mode: "open"});
    }
    //Metodo setter para recibir los datos de cada personaje
    set data(c) {

        //se inyecta el HTML y el CSS dentro del shadow DOM usando las propiedades del objeto c (personaje)
        this.shadowRoot.innerHTML = `
            <style>
                <!-- Estilos de la card -->
                .card {
                  color: #fff;
                  border-radius: 15px;
                  padding: 20px;
                  margin: 15px;
                  width: 250px;
                  min-height: 720px; /* altura mínima para homogeneidad */
                  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
                  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                  transition: transform 0.3s ease, box-shadow 0.3s ease;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                }
                    
                .card:hover {
                  transform: translateY(-5px);
                  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.4);
                }
                    
                .card h3 {
                  font-size: 1.6em;
                  margin-bottom: 10px;
                  color: #ffd700;
                  text-align: center;
                }
                    
                .card img {
                  width: 100%;
                  height: 250px;
                  object-fit: contain; /* Muestra la imagen completa */
                  border-radius: 10px;
                  margin-bottom: 15px;
                }
                    
                .card p {
                  margin: 8px 0;
                  font-size: 0.95em;
                  line-height: 1.4;
                }
                    
                .card strong {
                  color: #87cefa;
                }
                    
                .btn {
                  margin-top: auto;
                  display: block;
                  background-color: #ffd700;
                  color: white;
                  border: none;
                  padding: 10px 15px;
                  border-radius: 8px;
                  cursor: pointer;
                  transition: background-color 0.3s ease;
                  margin-left: auto;
                  margin-right: auto;
                  width: 70px;
                  text-align: center;
                }
                    
                .btn:hover {
                  background-color: #ff1e3c;
                }

            </style>
            <!-- Estructura de la card -->
            <div class="card">
                <h3>${c.nameC}</h3>
                <img src="${c.img}" alt="${c.nameC}">
                <p><strong>Nombre Clave: </strong>${c.keyNameC}</p>
                <p><strong>Casa: </strong>${c.home}</p>
                <p><strong>Año de aparición: </strong>${c.yearOfAppearance}</p>
                <p><strong>Descripción: </strong>${c.description}</p>
                <div class="btn">
                    <button>Ver más</button>
                </div>
            </div>
        `;
    }
    
}

//Se registra el componente personalizado como <character-card>
customElements.define('character-card', CharacterCard);