class CharacterSearch extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._characters = [];
        console.log('datos: ', this._characters); //Verificar si tiene datos

        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');

        wrapper.innerHTML = `
            <div class='container-search'>
                <h1>Buscar:</h1>
                <input type="text" id="searchInput" placeholder="Busca tu personaje de 'comic' favorito.">
                <button id="searchBtn" class="btn">🔍</button>
            </div>
        `;

        const style = document.createElement('style');
        style.textContent = `
            .container-search {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                font-family: Arial, sans-serif;
                padding: 20px;
                background: #f9f9f9;
                border-radius: 12px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                max-width: 70vw;
                margin: auto;
                gap: 10px;
            }

            .container-search h1 {
                font-size: 24px;
                margin-bottom: 10px;
                color: #333;
            }

            .container-search input {
                flex: 1;
                padding: 10px;
                font-size: 16px;
                border: 1px solid #ccc;
                border-radius: 8px;
            }

            .container-search .btn {
                padding: 10px 16px;
                font-size: 16px;
                border: none;
                background-color: rgb(97, 183, 245);
                color: white;
                border-radius: 8px;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }

            .container-search .btn:hover {
                background-color: rgb(3, 116, 197);
            }
        `;

        this.shadowRoot.append(style, wrapper);
    }

    set data(charactersList) {
        this._characters = charactersList;
        this.render();
    }

    connectedCallback() {
        const searchBtn = this.shadowRoot.getElementById('searchBtn');
        const searchInput = this.shadowRoot.getElementById('searchInput');

        searchBtn.addEventListener('click', () => this.searchCharacter());
        searchInput.addEventListener('input', () => this.searchCharacter());
    }

    render(charactersToShow = this._characters) {
        // Emitir evento con los personajes filtrados
        const event = new CustomEvent('character-search', {
            detail: charactersToShow,  // Pasamos los datos filtrados
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
    }

    searchCharacter() {
        const query = this.shadowRoot.getElementById('searchInput').value.toLowerCase();
        const filtered = this._characters.filter(c =>
            c.nameC.toLowerCase().includes(query) ||
            c.keyNameC.toLowerCase().includes(query)
        );
        this.render(filtered);
    }
}

customElements.define('character-search', CharacterSearch);
