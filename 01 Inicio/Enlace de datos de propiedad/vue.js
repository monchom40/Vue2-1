var app = new Vue ({ 
  el: '.vue' , 
  data: { 
    mensaje: 'Hello Vue! --',
    src1: 'https://vuejs.org/images/logo.png',
    texto: 'Incluya su nombre'
   },

   methods: {

      mostrarMensaje: function(){


         //return 'Aprende Vue MM 123'

         return this.mensaje

      }


   }

})