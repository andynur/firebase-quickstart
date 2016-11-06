(function() {

    var config = {
        apiKey: "AIzaSyB2PZ0H79bm3pQelS_3z2awrcdSqPjoEac",
        authDomain: "web-quickstart-dc44f.firebaseapp.com",
        databaseURL: "https://web-quickstart-dc44f.firebaseio.com",
        storageBucket: "web-quickstart-dc44f.appspot.com",
        messagingSenderId: "117015672906"
    };
    firebase.initializeApp(config);

    // Get elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');

    // Add login event
    btnLogin.addEventListener('click', e => {
        // Get email and password
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        // Sign in
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    // Add sign up event
    btnSignUp.addEventListener('click', e => {
        // Get email address
        // TODO : CHECK 4 REAL EMAILZ
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        // Sign in
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise
            .catch(e => console.log(e.message));
    });

    // Add Log out event
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
    });    

    // Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');
        } else {
            console.log('not logged in');      
            btnLogout.classList.add('hide');
        }
    }); 

}());