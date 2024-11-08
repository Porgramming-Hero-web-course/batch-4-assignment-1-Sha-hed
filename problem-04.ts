{
    // Start

    type Circle = {
        shape: string,
        radius: number
    }
    type Rectangle = {
        shape: string;
        width: number;
        height: number;
    }

    const calculateShapeArea = (obj: Circle | Rectangle): number => {
        if ('radius' in obj) {
            return Math.PI * obj.radius * obj.radius
        } else {
            return obj.height * obj.width;
        }
    }


    const circleArea = calculateShapeArea({shape: "circle", radius: 5});
    const rectangleArea = calculateShapeArea({shape: "rectangle", width: 4, height: 6});
    console.log(circleArea);
    console.log(rectangleArea);

    // End
}