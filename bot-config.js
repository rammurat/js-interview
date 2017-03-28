var CONFIG = {
    //Facebook API token
    accessToken: "EAAaGZAKuM5vQBAP4xfUiWabcI8CBscF1zV8DKfj2m9aNBBn32DAAKfalirH3Ue7u5Kz8hj3qfvY8uVAlC6B0z65WBZCi6rSWyvvuZA1U3CZBZAdfbBt7vZB4fdLxyj2xkNbnjBxoFsZBysWZBZABt8pvWJw3XdQ4zZBZAcZCZBVTvoZA7YmwZDZD",

    //WIT NPL engine API token
    witToken: "",

    port: 8080,
    ssl: {
        key: "",
        cert: "",
        ca: ""
    },

    isFirebaseDB : false,

    //Application token to verify with Facebook API
    verifyToken: "botdemo", //it can any string you want, but should match to facebook webhook token 

    listenPort: 443,

    //Set default messages 
    defaultAuthMsg: "User not authorized, kindly try again with different credentials.",
    defaultQueryMsg: "Will be glad to help you. Kindly write to us keplerlab@sapient.com",
    
    //firebase API token
    firebase : {
        apiKey: "AIzaSyD9mHFSZqTiDciX_kg7o2YpbM49B8r5-Jw",
        authDomain: "help-desk-6c086.firebaseapp.com",
        databaseURL: "https://help-desk-6c086.firebaseio.com",
        storageBucket: "help-desk-6c086.appspot.com",
        messagingSenderId: "814966357576",
        serviceAccount : {
            "type": "service_account",
            "project_id": "help-desk-6c086",
            "private_key_id": "a3dd3c0cd7a21d9904930473a1e3602de787521a",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCshUsZ2pyZ6i6F\nf2iCLZds5ZkAa8u8XwTfcx3wYf7k7dlhbozIJxpi8k8rqLeZniNY3BdcmKp1kDPX\n/0uxX2yC6pNwxPeta8KRt4lKh3uhCTftkEWrZJ6P8A8RftyIGztPDPnKz9DO3hPE\nYgK7ib8ZZiKJ4UFlNZUw4wHPHRZbAlXZ1KXL/Iij+rQaq1jEJqQTXlkMBKVNX7eD\nphIF2PNt1Ed0B6tioLlJzVpw/OIND7U5LiUhn6295MiECvRZRlk/uyy6FTNKMnnN\nn0uuubndYlVXaeOLSPZEcYEfztNP4KwapG5kARnPHPvHBz5aLoM8r5aiIYw6cClf\nst8XNkbBAgMBAAECggEAZ5aVlI2OUGCr1F6/KsMjVDC8YONY7t+C9oSRqn+85Ero\nprcRczD/iAAEh6uDqoqooLduk5vbZkHSz1QsZ/FrH2SoaSLrsMauin5Qwl59XiFB\n4rQpEROWnci/03qAAn2PbBTXe+6yazQvXFCZYXABPcf03yNQ9+tnjHYR5QGLJdNR\nw2QJP884A7R0ZeGExWCfJvjZzWRt5e7tY803WW/Z6Hqkg6tAbbwoQXE9bZ+zSPtL\nygFAPakjJR95lqfLQQUuZeP2Ykj2d8T10HQZAX2rP8lZI/y23RiO+A7t+VIbprfp\n2vRswWu6xYZs5xaTnxN5GbOLx1aJJQIVOF4UYZuuQQKBgQDUdWPoUTChESsf01tr\nKSXZ6Y240VLmbwPfRS/RjHLbOSQ6Sg179c30W/d2LjZKPFOeviEKt3sOlhc8i660\n9Re4M7cB3UBZ0hWmVfL8NVeClT/zAROX0thbXyArL8BK4mk/0ybbfmy5rXOVhw16\nrUIzgcbp16d35sgpJsu1EM9wSQKBgQDP4JFQ2C5ACwEf9QR8St15X59SYDDZY62e\nDbfnp/otnrSB/RjVECQzBm4GW3n79sMsgarFKPEjVWceY8i3HT4mC8XyUJNzZhiP\npPcfDlY/VtU95BZn3V5/63P/P+YdNfHGkhgpH7/ELBa98QBqOEp6aXLbNXO/EWb4\nSgEO0iESuQKBgEdiegMg5Hn5zseOuHS1CqbBNoEWtAgA3QgzsvFxg1XtSSLcptMz\nr9Oe4vKubEddJat8rpVvOMWZ4IzTUgwzHZkipybVND35vJR65H2hXpndk/MONYsZ\nqOBqgeCA1tdSY5KyW6f8PoPUp7Vh/0Fs3YV44WDIuNgsjqxlAKUB1PEhAoGBAIrL\n2HrwPMFKF7Asupf6rLHTpN8tlrAvm8bCRh6Iy8QWCVQZl7D7HBBtpJzeCy6u7lYT\nJeCKm6cJ6NYjreqFve9NQRevsSQF8TRH4zB7NB8KbUrrtgIXjnc+0K6HDbBHSm1Z\nMoSSzEnBXlXoSmyhtSjSq3utzuCuT+BMGTS6HJcRAoGBAJth+p3R7n7jRVnU/FAo\nGEbbA9yjniaY6HxTYAV7/9Q7US/EKIiPUGG3Lm9LOpDb44Kqz89RPIngc0OWZPes\ncudX5z+oVh2p2bwjNuB7707jGDHAQRdV8H8Ky/66ArWfNx0UqGe3EzUhoT1HT+II\nR0bOu+Tv5yA53tuZXXip8ddG\n-----END PRIVATE KEY-----\n",
            "client_email": "firebase-adminsdk-ij53m@help-desk-6c086.iam.gserviceaccount.com",
            "client_id": "104610018606014832453",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://accounts.google.com/o/oauth2/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ij53m%40help-desk-6c086.iam.gserviceaccount.com"
        } //Firebase private key
    },

    //chatbot key mapping (Mapping between user response and next questions to ask from end user) 
    keyMapped: {
        
    }
};
module.exports = CONFIG;