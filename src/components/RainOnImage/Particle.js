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
        }

        let movement = (2.1 - this.speed*2) + this.velocity;

        if(movement <= 0.001) 
            console.log("No movement");

        this.y += movement;

        if(this.y >= canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
        }
    }
    draw(ctx, mappedImage) {
        let color = "white";

        if(mappedImage.length > 0){
            // try{
                const red = mappedImage[this.positionY][this.positionX]["red"];
                const green = mappedImage[this.positionY][this.positionX]["green"];
                const blue = mappedImage[this.positionY][this.positionX]["blue"];


                // color = `rgb(200,50,0)`;
                // color = `rgb(${red*3}, ${green*3}, ${blue*3})`;
                // color = `rgb(${red}, ${green}, ${blue})`;
                // console.log(`rgb(${red}, ${green}, ${blue})`);
            // } catch(ex){
            //     debugger;
            // }
        }
        ctx.globalAlpha = this.speed * 0.9 + 0.01;
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

export default Particle;