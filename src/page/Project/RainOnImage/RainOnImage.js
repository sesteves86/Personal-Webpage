import React, {useEffect, useRef, Fragment, useState} from "react";
import Particle from "./Particle";
import startingImage from "./startingImage";

const RainOnImage = ( props) => {

    const [numberOfParticles, setnumberOfParticles] = useState(3000);
    const [base64Image, setBase64Image] = useState(startingImage);
    const [animationId, setAnimationId] = useState(0);
    const canvasRef = useRef(null);
    const image1 = new Image();
    let particlesArray = [];
    let mappedImage = [];

    const onNParticlesChange = (e) => {
        setnumberOfParticles(e.target.value);
    };

    const onBase64ImageChange = (e) => {
        setBase64Image(e.target.value);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        let ctx = canvas.getContext('2d');
        image1.src = base64Image;
        
        image1.addEventListener("load", () => {
            ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
            const pixels = ctx.getImageData( 0, 0, canvas.width, canvas.height);

            mappedImage = [];

            // Map image
            for (let y = 0; y<canvas.height; y++) {
                let row = [];

                for (let x = 0; x< canvas.width; x++) {
                    const index = 4 * y * pixels.width + x * 4;
                    const red = pixels.data[index];
                    const green = pixels.data[index+1];
                    const blue = pixels.data[index+2];
                    // const brightness = Math.sqrt((red*red*0.299) + (green*green*0.587) + (blue*blue*0.114))/255;
                    const brightness = Math.sqrt((red*red) + (green*green) + (blue*blue))/256;

                    if (brightness >= 1)
                        console.log("Too bright");
                    
                    if (brightness > 0.1){
                        console.log("good brightness");
                    }

                    const cell = {brightness, red, green, blue} ;
                    row.push(cell);
                }

                mappedImage.push(row);
            }
            console.log("Mapped image crated");
            console.log(mappedImage);
        })

        //Create particles
        particlesArray = [];
        for (let i = 0; i< numberOfParticles; i++) {
            particlesArray.push(new Particle(canvas));
        }

        if(animationId) {
            window.cancelAnimationFrame(animationId);
            console.log("Cancelled animation");
        }

        const render = () => {
            if(ctx)
                draw(canvas, ctx);
            else
                console.log("No ctx");

                const _animationId = window.requestAnimationFrame(render);
                setAnimationId(_animationId);
        }

        render();
    }, [numberOfParticles, base64Image]);
    
    const draw = (canvas, ctx) => {
        ctx.globalAlpha = 0.1;
        ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.1;
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for(let i = 0; i < numberOfParticles; i++) {
            particlesArray[i].update(canvas, mappedImage);
            particlesArray[i].draw(ctx, mappedImage);
        }
    };

    return (
        <Fragment>
            <label htmlFor="base64Image">Base 64 Image</label>
            <input name="base64Image" type="text" onChange={onBase64ImageChange} value={base64Image}/>
            <label htmlFor="noOfParticles">Number of rain drops</label>
            <input name="noOfParticles" type="text" onChange={onNParticlesChange} value={numberOfParticles} />
            <canvas className="p-rainOnImage__canvas" ref={canvasRef} {...props}/>
        </Fragment>
    );
};

export default RainOnImage;
