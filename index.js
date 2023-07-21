// // alert("welcome")
// document.querySelector(".fill__btn").addEventListener("click", function(){
//     // name
//     for (){
//       while(!name){
//         var name = prompt("Input Username in your name")
//     }
//     }
  
//     // Number
//     while(!number){
//     var number = prompt("Enter your number");
//     }
//     //  password
  
//   if(password =Boolean ){
//     while(!password){
//         var password = prompt("Type your password")
//   }
//     };
//     // confirm password
//     while(!ConfirmPassword){
//   var ConfirmPassword = prompt("Confirm Password")
//     };

// });

// javascript project javascript
var details = document.querySelectorAll(".fill__btn").length;
var users =[];



for(var i = 0; i < details; i++){
  
    document.querySelectorAll(".fill__btn")[i].addEventListener("click", function(){
    
        var userName = "";
        while (userName === ""){
          userName = prompt("Enter a name");

          if(userName.length > 0 && userName.length < 10){
              alert("valid data!");            
          }
          else{
            alert("invalid data!");
            userName = "";
            
          }
        }
        
        var phoneNumber = "";
        while (phoneNumber === ""){

          phoneNumber = prompt("Enter your 11 digit phone number");
          
          if(phoneNumber.length === 11 ){
            alert("valid data!");
          }

          else{
            alert("invalid data!");
            phoneNumber = "";
          }

        }
        
        var email = "";
        while (email === "") {
         email = prompt("Enter Email Adress");

         if( email.includes("@") && email.includes(".")){
          alert("valid data");
         }
         else{
          alert("invalid data");
          email = "";

         }
        }
        var password = "";
        while ( password === "" ){
            password =prompt("Please enter your password (must be at least 6 characters):");

            if(password.length > 6){
              alert("password is valid");
            }
            else{
              alert("check your password and try again");
              password = ""
            }
        }
        
        var confirmPassword = ""
        while(confirmPassword === ""){
          confirmPassword =  prompt("Please confirm your password:");
          if(confirmPassword === password){
            alert("data is valid");
          }
          else{
            alert("check that your passwords match!");
            confirmPassword = "";
          }
        }
        confirm('Are you sure your details are correct')
        alert("All user data is valid!");

        var user = {
          userName : userName,
          phoneNumber : phoneNumber,
          email : email
        }
        users.push(user);

        

        }         
    )
}


function revealDetails(){
  var reveal = document.getElementById("reveal").innerHTML = alert("Here are your details"+ JSON.stringify(users));
}




