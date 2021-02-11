var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Eof6uq_2e/model.json", modelloaded);
Webcam.set({
    width: 300,
    height: 250,
    image_format: "png",
    png_quality: 100,
});
Webcam.attach('camerA');

function capture_image() {
    Webcam.snap(function (datauri) {
        document.getElementById("resulTs").innerHTML = "<img id='imgg' src='" + datauri + "'/>";
    })
    document.getElementById("resulTs").style.display = "block";
}
console.log("The version is", ml5.version);

function modelloaded() {
    console.log("model has been loaded");
}

function identify() {
    classifier.classify(document.getElementById("imgg"), check);
}
function check(error,results){
    console.log(results);
    document.getElementById("Ob").innerHTML=results[0].label;
    document.getElementById("Ac").innerHTML=results[0].confidence;
}