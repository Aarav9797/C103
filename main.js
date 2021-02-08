Webcam.set({
    width: 300,
    height: 250,
    image_format: "png",
    png_quality: 100,
});
Webcam.attach('camerA');
function capture_image(){
    Webcam.snap( function(datauri){
        document.getElementById("resulTs").innerHTML="<img src='"+datauri+"'/>";
    })
    document.getElementsById("resulTs").style.display="block"
}