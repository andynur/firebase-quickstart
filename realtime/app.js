(function() {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyB2PZ0H79bm3pQelS_3z2awrcdSqPjoEac",
        authDomain: "web-quickstart-dc44f.firebaseapp.com",
        databaseURL: "https://web-quickstart-dc44f.firebaseio.com",
        storageBucket: "web-quickstart-dc44f.appspot.com",
        messagingSenderId: "117015672906"
    };
    firebase.initializeApp(config);

    // var bigOne = document.getElementById('bigOne');
    // var dbRef  = firebase.database().ref().child('text');
    // dbRef.on('value', snap => bigOne.innerText = snap.val())

    //  Get Elements
    const preObject = document.getElementById('object');
    const ulList = document.getElementById('list');

    // Create Reference
    const dbRefObject = firebase.database().ref().child('object');
    const dbRefList = dbRefObject.child('hobbies');

    // Sync object
    dbRefObject.on('value', snap => {
        preObject.innerText = JSON.stringify(snap.val(), null, 3);
    });

    // Sync list changes
    dbRefList.on('child_added', snap => {

        const li = document.createElement('li');
        li.innerText = snap.val();
        li.id = snap.key;
        ulList.appendChild(li);        
    
    });

    dbRefList.on('child_changed', snap => {
    
        const liChanged = document.getElementById(snap.key)
        liChanged.innerText = snap.val();
    
    });

    dbRefList.on('child_removed', snap => {
    
        const liRemoved = document.getElementById(snap.key)
        liRemoved.remove();
    
    });


}());