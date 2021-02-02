function formValidate(){
    if(document.userReg.firstname.value == ""){
        alert( "Please provide your first name!" );
        document.userReg.firstname.focus() ;
        return false;
    }else if(document.userReg.lastname.value == ""){
        alert( "Please provide your last name!" );
        document.userReg.lastname.focus() ;
        return false;
    }else if(document.userReg.id.value == ""){
        alert( "Please provide your MCID!" );
        document.userReg.id.focus() ;
        return false;
    }else if(document.userReg.email.value == ""){
        alert( "Please provide your email address!" );
        document.userReg.email.focus() ;
        return false;
    }else if(document.userReg.WorkingArea.value == ""){
        alert( "Please provide your area of Work!" );
        document.userReg.WorkingArea.focus() ;
        return false;
    }else if(document.userReg.tp.value == ""){
        alert( "Please provide your contact number" );
        document.userReg.tp.focus() ;
        return false;
    }else if(document.userReg.passw.value == ""){
        alert( "Please provide a Password!" );
        document.userReg.passw.focus() ;
        return false;
    }else if(document.userReg.repw.value == ""){
        alert( "Please retype your Password!" );
        document.userReg.repw.focus() ;
        return false;
    }
    if(document.userReg.passw.value != document.userReg.repw.value ){
        alert("assword miss match...Please check again");
        document.userReg.repw.focus() ;
        return false;
    }
        
}