//https://teachablemachine.withgoogle.com/models/jFgWvYT6L/model.json
function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/jFgWvYT6L/model.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(results,error){
    console.log("Got result");
}