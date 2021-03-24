/*Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.*/


// passo 1 dichiarare dove utilizzare VUEjs

var app = new Vue({
    el: "#app",

    data: {
      messaggio: "ciao",
      nome: "",
      cognome: "",
      immagine: "img/immagini-felicità.jpg",
      color: "red"
    },
    methods: {
      changeColor: function () {
        if (this.color == "blue") {
          this.color = "red";
        }else {
          this.color = "blue";

        }
      }
    }
  });
