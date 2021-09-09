
var un="john";
var temppassword="test";


$("#copa-signin").click(function(event){

    var uninput= $('#uninput').val();
var password=$('#passwordinput').val();

if(uninput!=un || password!=temppassword){
    
    $("#wrongpassword").show();
    event.preventDefault();

}
    
  });