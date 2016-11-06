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

    // Get Elements
    var uploader = document.getElementById('uploader');
    var fileButton = document.getElementById('fileButton');

    // Listen for file selection
    fileButton.addEventListener('change', function(e) {
        // Get file
        var file = e.target.files[0];

        // Create a storage ref
        var storageRef = firebase.storage().ref('sweet_gifs/' + file.name);

        // Upload file
        var task = storageRef.put(file);

        // Update progress bar
        task.on('state_changed', 

            function progress(snapshot) {
                var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                uploader.value = percentage;
            },

            function error(err) {
                
            },

            function complete() {
                
            }

        );

    });

}());