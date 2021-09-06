
if (window.Worker) {

    
    var myWorker = new Worker("worker.js");
    var input = document.getElementById("input");
    var red = document.querySelector("#red");
    
    red.onclick = () => {
        console.log("Oh Yeah! I can be clicked");
    }
    input.onclick = () => {
        myWorker.postMessage("From index: Start doing your job");
        console.log("The message has been posted to the worker and now it should start its task")
    }

    myWorker.onmessage = (result) => {
        console.log("The worker has finished its task and here is the final result");
        console.log(result.data)
    }
} else {
    document.write("Your browser doesn't support Workers");
}












