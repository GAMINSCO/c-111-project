//  https://teachablemachine.withgoogle.com/models/aFUhY93Qj/
//  &#128076;
//  &#128077;
//  &#9996;
//  &#129310;
//  &#128406;
//  &#129305;

Webcam.set({
    width:350,
    height:300,
    image_format: "png",
    png_quality:90
});

camera = document.getElementById("camera")
Webcam.attach("#camera")

classify = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/aFUhY93Qj/model.json", model_loaded)
console.log("ml5 loaded", ml5.version)

function model_loaded() {
    console.log("model loaded!")
}

function take_snap() {
    Webcam.snap(
        function (uri) {
            document.getElementById("snap").innerHTML = '<img id="result" src=' + uri + '>'
        }
    )
}

function speak() {
    var synth = window.speechSynthesis
    speak1 = "Prediction complete"
    var speech = new SpeechSynthesisUtterance(speak1)
    synth.speak(speech)
}