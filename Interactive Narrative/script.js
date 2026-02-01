//scene image
const scenes = 
[
    "images/scene1.png",
    "images/scene2.png",
    "images/scene3.png",
    "images/scene4.png",
    "images/scene5.png",
    "images/scene6.png"
];

//track current scene index
let currentIndex = 0;

//get ref to the image element in html
const sceneImg = document.getElementById("scene");

function showScene(index) 
{
    //fade out
    sceneImg.style.opacity = 0;

    setTimeout(() => 
        {
        sceneImg.src = scenes[index];
        //fade in
        sceneImg.style.opacity = 1;
    }, 500);
}

//click to advance story
sceneImg.addEventListener("click", () => 
    {
    if (currentIndex < scenes.length - 1) 
        {
        currentIndex++;
        showScene(currentIndex);
    }
});

//arrow keys
document.addEventListener("keydown", (event) => 
    {
    if (event.key === "ArrowRight") 
        {
        //next scene
        if (currentIndex < scenes.length - 1) 
            {
            currentIndex++;
            showScene(currentIndex);
        }
    } else if (event.key === "ArrowLeft") 
        {
        //previous scene
        if (currentIndex > 0) 
            {
            currentIndex--;
            showScene(currentIndex);
        }
    }
});