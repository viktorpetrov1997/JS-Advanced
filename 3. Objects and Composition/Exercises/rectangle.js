function returnRectangleObject(width, height, color)
{
    const rectangle = {
        width: width,
        height: height,
        color: color.charAt(0).toUpperCase() + color.slice(1),
        calcArea()
        {
            return width * height;
        }
        };

    return rectangle;
}

let rect = returnRectangleObject(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
