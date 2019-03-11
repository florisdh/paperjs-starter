import * as Paper from "paper";

window.onload = () => {
    const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('content');
    if (!canvas) {
        throw new Error('Could not find canvas named content in document!');
    }

    Paper.setup(canvas);

    // Create a simple drawing tool:
    let tool: Paper.Tool = new Paper.Tool();
    let path: Paper.Path;

    // Define a mousedown and mousedrag handler
    tool.onMouseDown = (event) => {
        path = new Paper.Path();
        path.strokeColor = 'black';
        path.add(event.point);
    }

    tool.onMouseDrag = (event) => {
        path.add(event.point);
    }
};
