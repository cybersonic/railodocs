    //Add functionality to the String object
    if (typeof String.prototype.startsWith != 'function') {
    
      String.prototype.startsWith = function (str){
       return this.indexOf(str) == 0;
      };
    }

    $(function() {
      var availableTags = #SerializeJSON(rc.tflist)#;
      $( "#tags" ).autocomplete({
        source: availableTags,
        select: function( event, ui ) {

                if(ui.item.value.startsWith("cf")){
                  window.location = "/tag/" + ui.item.value;
                }
                else {
                  window.location = "/function/" + ui.item.value; 
                }
                 
                }
      });

      //Start the popover!

      //Check if we have shown them a popup! 
      
      //$('##beta').popover('show');
      $('#beta').popover();
      $('.poopy').popover();
    });