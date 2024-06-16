const container = document.querySelector(".container");
const image = document.querySelector(".car-image");

const cursor = {
    isDragging: false,
    initialPosition: 0,

};

let currentimage = 1;

const updateimage = (direction) => {
    if (direction < 0) {
        if(currentimage == 12){
            currentimage = 1;
        } else {
            currentimage += 1;
        }
    }

    if (direction > 0) {
        if (currentimage == 1) {
            currentimage = 12;
        } else {
            currentimage -= 1;
        }
    }

    image.src = `./images/${currentimage}.jpg`;
};   



container.addEventListener("mousedown", (event) => {
    cursor.isDragging = true;
    cursor.initialPosition = event.clientX;
    


});

container.addEventListener("mouseup", (event) => {
    cursor.isDragging = false;
});

container.addEventListener("mousemove", ({ clientX }) => {
    if(!cursor.isDragging) return;

    const offset = cursor.initialPosition - clientX;

    
    if (Math.abs(offset) >=50) {
        updateimage(offset);
        cursor.initialPosition = clientX;
    }
});



