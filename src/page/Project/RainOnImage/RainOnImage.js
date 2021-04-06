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
            ctx.globalAlpha = 1;
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

                    const cell = {brightness, red, green, blue} ;
                    row.push(cell);
                }

                mappedImage.push(row);
            }
            console.log("Mapped image crated");
            // console.log(mappedImage);
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
            <h1>Rain on Image</h1>
            <p>This effect was based on this <a href="https://www.youtube.com/watch?v=UoTxOVEecbI" >freeCodeCamp's youtube video</a>.</p>
            <p>On this project, I've tweaked it and converted into a React component.</p>

            <div className="p-rainOnImage__inputContainer">
                <div className="p-rainOnImage__singleInputContainer">
                    <label htmlFor="base64Image">Base 64 Image</label>
                    <input name="base64Image" type="text" onChange={onBase64ImageChange} value={base64Image}/>
                </div>
                <div className="p-rainOnImage__singleInputContainer">
                    <label htmlFor="noOfParticles">Number of rain drops</label>
                    <input name="noOfParticles" type="text" onChange={onNParticlesChange} value={numberOfParticles} />
                </div>
            </div>
            <canvas className="p-rainOnImage__canvas" ref={canvasRef} {...props}/>
        </Fragment>
    );
};

export default RainOnImage;
