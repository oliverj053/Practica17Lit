import { LitElement, html, css } from 'lit-element';

class Lista extends LitElement {
    static get properties() {
        return {
            datos: { type: Array },
            input: { type: String },
        }
    }
    static get styles() {
        return css`
        .card {
            padding: 15px 25px;
            border: unset;
            border-radius: 15px;
            color: #212121;
            z-index: 1;
            background: #e8e8e8;
            position: relative;
            font-size: 17px;
            -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
            box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
            transition: all 250ms;
            overflow: hidden;
        }

        .group {
            position: relative;
            margin-bottom: 3rem
           }
           
           .input {
            font-size: 16px;
            padding: 10px 10px 10px 5px;
            display: block;
            width: 450px;
            border: none;
            border-bottom: 1px solid #515151;
            background: transparent;
            color: white;
           }
           
           .input:focus {
            outline: none;
           }
           
           label {
            color: #999;
            font-size: 18px;
            font-weight: normal;
            position: absolute;
            pointer-events: none;
            left: 5px;
            top: 10px;
            transition: 0.2s ease all;
            -moz-transition: 0.2s ease all;
            -webkit-transition: 0.2s ease all;
           }
           
           .input:focus ~ label, .input:valid ~ label {
            top: -20px;
            font-size: 14px;
            color: #5264AE;
           }
           
           .bar {
            position: relative;
            display: block;
            width: 465px;
           }
           
           .bar:before, .bar:after {
            content: '';
            height: 2px;
            width: 0;
            bottom: 1px;
            position: absolute;
            background: #5264AE;
            transition: 0.2s ease all;
            -moz-transition: 0.2s ease all;
            -webkit-transition: 0.2s ease all;
           }
           
           .bar:before {
            left: 50%;
           }
           
           .bar:after {
            right: 50%;
           }
           
           .input:focus ~ .bar:before, .input:focus ~ .bar:after {
            width: 50%;
           }
           
           .highlight {
            position: absolute;
            height: 60%;
            width: 100px;
            top: 25%;
            left: 0;
            pointer-events: none;
            opacity: 0.5;
           }
           
           .input:focus ~ .highlight {
            animation: inputHighlighter 0.3s ease;
           }
           
           @keyframes inputHighlighter {
            from {
             background: #5264AE;
            }
           
            to {
             width: 0;
             background: transparent;
            }
           }

                
        .icon-btn {
        width: 50px;
        height: 50px;
        border: 1px solid #cdcdcd;
        background: white;
        border-radius: 25px;
        overflow: hidden;
        position: relative;
        transition: width 0.2s ease-in-out;
        font-weight: 500;
        font-family: inherit;
        margin-left: 1rem;
        }

        .add-btn:hover {
        width: 120px;
        }

        .add-btn::before,
        .add-btn::after {
        transition: width 0.2s ease-in-out, border-radius 0.2s ease-in-out;
        content: "";
        position: absolute;
        height: 4px;
        width: 10px;
        top: calc(50% - 2px);
        background: seagreen;
        }

        .add-btn::after {
        right: 14px;
        overflow: hidden;
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
        }

        .add-btn::before {
        left: 14px;
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
        }

        .icon-btn:focus {
        outline: none;
        }

        .btn-txt {
        opacity: 0;
        transition: opacity 0.2s;
        }

        .add-btn:hover::before,
        .add-btn:hover::after {
        width: 4px;
        border-radius: 2px;
        }

        .add-btn:hover .btn-txt {
        opacity: 1;
        }

        .add-icon::after,
        .add-icon::before {
        transition: all 0.2s ease-in-out;
        content: "";
        position: absolute;
        height: 20px;
        width: 2px;
        top: calc(50% - 10px);
        background: seagreen;
        overflow: hidden;
        }

        .add-icon::before {
        left: 22px;
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
        }

        .add-icon::after {
        right: 22px;
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
        }

        .add-btn:hover .add-icon::before {
        left: 15px;
        height: 4px;
        top: calc(50% - 2px);
        }

        .add-btn:hover .add-icon::after {
        right: 15px;
        height: 4px;
        top: calc(50% - 2px);
        }

        .contenedor {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
          }
          
        `;
    }

    constructor() {
        super();
        this.datos = ["Tarea 1"];
        this.input = "";
    }


    render() {
        return html`
            <div class="contenedor">
                <div class="group">
                    <input required="" type="text" class="input" @change='${this._change}' .value=${this.input}>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Ingrese nueva tarea</label>
                </div>
                <div>
                    <button class="icon-btn add-btn"  @click='${this._add}'>
                        <div class="add-icon"></div>
                        <div class="btn-txt">Agregar</div>
                    </button>
                </div>
            </div>
        
            <div class='card'>
                <ul>
                    ${this.datos.map(item => html`<li>${item}</li>`)}
                </ul>
            </div>
       
        `;
    }

    _add() {
        if (this.input == "") {
            alert("Ingrese una Tarea");
            return;
        }

        this.datos.push(this.input);
        this.input = "";
        this.requestUpdate();
    }

    _change(e) {
        this.input = e.target.value;
    }
}

customElements.define("bb-lista", Lista);