function User (email, password, avatarUrl) {
    this.email = email;
    this.password = password;
    this.avatarUrl = avatarUrl;
}; //struktura jak funkcji;




var userList = {
    allUsers: [],
    addUser: function(user){ //mala litera w () bo to nazwa obiektu a nie konstruktora
        if (user instanceof User){
            this.allUsers.push(user);
        } //musi byc to straszne this
    },
    login: function(email, password){
        var currentUser;
        for (var i = 0; i< this.allUsers.length; i++){
        currentUser = this.allUsers[i];
            if (currentUser.email === email && currentUser.password === password) {
                return true;
                }
        }
        return false;
    }
};

var kasia = new User ('kasiato@gmail.com', 'kasia123', 'mojeurl1');
userList.addUser(kasia);


var ela= new User ('elaoela@gmail.com', '123123', 'mojeurl2');
userList.addUser(ela);

var form = document.forms[1];
form.addEventListener('submit', function(e){
    e.preventDefault();
    if (userList.login(form.email.value, form.password.value)) {
        alert('Zalogowales sie, siema!');
    }
    else {
        alert('bledny email lub haslo')
    }
})
//utworzyc rejestracje
//adres email
//haslo
//potwierdz haslo 
//adres avatara
//dodaj uzytkownika
//daj zmoliwosc zalogowania
//sprawdz czy nowa nazwa uzytkownika ne jest zajeta