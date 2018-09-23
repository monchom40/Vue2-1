var app = new Vue({
  el: "#app",
  data: {
    titulo: "Lista de tareas otro culo",
    tareas: [
      {
        texto: "4545454Aprender Vue 2",
        terminada: false
      },
      {
        texto: "Aprender Angular 2",
        terminada: false
      },
      {
        texto: "Aprender Ionic",
        terminada: false
      },
      {
        texto: "culo Aprender Webdev 25 Gold",
        terminada: false
      }
    ],
    nuevaTarea: ""
  },
  methods: {
    agregarTarea: function() {
      var texto = this.nuevaTarea.trim();
      if (texto) {
        this.tareas.push({
          texto: texto,
          terminada: false
        });

        this.nuevaTarea = "";
      }
    },

    borrar: function(indice) {
      this.tareas.splice(indice, 1);
    }
  }
});
