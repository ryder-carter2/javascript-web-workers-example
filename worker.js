onmessage = (e) => {
    console.log("Message recieved from main script");
    console.log(e.data);
    var i = 0;
    for(i; i < 10000000000; i++){
        
    }
    postMessage(i);

}