class Particle {
    constructor(canvas) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = 0;
        this.velocity = Math.random() * 0.2;
        this.size = Math.random() * 1.5 + 1;
        this.positionY = Math.floor(this.y);
        this.positionX = Math.floor(this.x);
    }
    update(canvas, mappedImage) {
        this.positionY = Math.floor(this.y);
        this.positionX = Math.floor(this.x);
        
        if (mappedImage.length > 0) {
            this.speed = mappedImage[this.positionY][this.positionX]["brightness"]; // [0,1]

            if(this.speed > 2.5)
                throw "Error";
            if(this.speed <= 0.1){
                this.speed=0.1;
            }
        }

        let movement = (2.1 - this.speed*2) + this.velocity;

        if(movement <= 0.1) {
            movement = 0.1;
        }

        this.y += movement;

        if(this.y >= canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
        }
    }
    draw(ctx, mappedImage) {
        let color = "white";

        ctx.globalAlpha = 0;

        if(mappedImage.length > 0){
            const red = mappedImage[this.positionY][this.positionX]["red"];
            const green = mappedImage[this.positionY][this.positionX]["green"];
            const blue = mappedImage[this.positionY][this.positionX]["blue"];

            const brightness = mappedImage[this.positionY][this.positionX]["brightness"];
            ctx.globalAlpha = brightness * 0.5 + 0.01;

            // const maxColourValue = Math.max(red, green, blue);
            // const colourIncreaseFactor = 255/maxColourValue;
            // color = `rgb(${red*colourIncreaseFactor}, ${green*colourIncreaseFactor}, ${blue*colourIncreaseFactor})`;
        
            color = `rgb(${red}, ${green}, ${blue})`;
        }
        
        // ctx.globalAlpha = this.speed * 0.4 + 0.05;
        // ctx.globalAlpha = 0.1;
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

export default Particle;