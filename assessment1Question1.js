var storage = window.localStorage;
$(document).ready(function(){
    var data = JSON.parse(storage.getItem('user'));
    $('#username').val(data.username);
    $('#password').val(data.password);
})
function storeUserData(){
    let username = $('#username').val();
        let password = $('#password').val();
        let user = {
            username: username,
            password: password
        }
        storage.setItem('user',JSON.stringify(user));
}
$('#rememberMe').change(function() {
    if(this.checked) {
        storeUserData();
    }
    else {
        storage.removeItem('user');
    }
})
$('#username, #password').change(function(){
    if($('#rememberMe').is(":checked")){
        storeUserData();
    }
})