var app = new Vue ({ 
  el: '.vue' , 
  data: { 
    mensaje: 'Hello Vue! --'
   },

   methods: {

      mostrarMensaje: function(){


         //return 'Aprende Vue MM 123'

         return this.mensaje

      }


   }

})