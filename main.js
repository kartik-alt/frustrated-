Webcam.set({
    width:310,height:300,image_format:"png",png_quality:99,constraints:{facingMode: "environment"}
})


function capture_image(){
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML= "<img id='snap' src='" +data_uri+ "'/>"
    })

}
camera=document.getElementById("camera")
Webcam.attach("#camera")

console.log('ml5 version:', ml5.version);

classifire=ml5.imageClassifier("MobileNet",modelLoaded);

function modelLoaded(){
console.log("modelLoaded")

}

function identify_mam(){

img=document.getElementById("snap");
classifire.classify(img,gotResult);

}

function gotResult(error,result){
if(error){
console.error(error);

}
else{
    console.log(result)
    document.getElementById("result").innerHTML= result[0].label
}
}