/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
     
        $("#form1").hide();
               
        $('#mcq').click(function(){
    
               $("#form1").show();
               $("#headertext").hide();
               
        });
         $('#fill_blank').click(function(){
    
            //   $("#form1").show();
                $("#headertext").show();
               $("#headertext").text("Fill in the blanks");
               $("#form1").hide();
               
        });
         $('#check_box').click(function(){
    
             //  $("#form1").show();
                $("#headertext").show();
               $("#headertext").text("check box");
               $("#form1").hide();
               
        });
         $('#tf').click(function(){
    
             //  $("#form1").show();
               $("#headertext").show();
               $("#headertext").text("True False");
               $("#form1").hide();
               
               
        });
        
        
});
    

        
  
