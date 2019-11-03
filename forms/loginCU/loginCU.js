btnLogin.onclick=function(){
    req1 = ""
    req1 = Ajax("https://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptNetID.value + "&j_password=" + inptPassword.value);
    if (req1.status == 200 && req1.responseText == 1) { //everything worked.
        ChangeForm(favFoods)
    } else {
        //Handle that. 
        NSB.MsgBox("Access Denied!")
    }
}
