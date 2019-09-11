var invWrapper = $('.inv-wrapper'),
    cache_width = invWrapper.width(),
    a4 = [610, 1100]; // for a4 size paper width and height

var canvasImage,
    winHeight = a4[1],
    invWrapperHeight = invWrapper.height(),
    invWrapperWidth  = invWrapper.width();

var imagePieces = [];

// on create pdf button click
$('#create_invoice_pdf').on('click', function() {
    $('body').scrollTop(0);
    imagePieces = [];
    imagePieces.length = 0;
    main();
});
    
// main code
function main() {
    getCanvas().then(function(canvas){
        canvasImage = new Image();
        canvasImage.src= canvas.toDataURL("image/png");
        canvasImage.onload = splitImage;
    });
}

// create canvas object
function getCanvas() {
    invWrapper.width((a4[0] * 1.33333) - 80).css('max-width', 'none');
    return html2canvas(invWrapper, {
        imageTimeout: 8000,
        removeContainer: true
    });
}

// chop image horizontally
function splitImage(e) {
    var totalImgs = Math.round(invWrapperHeight/winHeight);
    for(var i = 0; i < totalImgs; i++) {
        var canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d');
        canvas.width = invWrapperWidth;
        canvas.height = winHeight;
        //                    source region                   dest. region
        ctx.drawImage(canvasImage, 0, i * winHeight, invWrapperWidth, winHeight, 0, 0, canvas.width, canvas.height);
        
        imagePieces.push(canvas.toDataURL("image/png"));
    }
    console.log(imagePieces.length);
    createPDF();
}

// crete pdf using chopped images
function createPDF() {
    var totalPieces = imagePieces.length - 1;
    var doc = new jsPDF({
        unit: 'px',
        invWrapperat: 'a4'
    });
    imagePieces.forEach(function(img){
        doc.addImage(img, 'JPEG', 18, 0);
        if(totalPieces)
            doc.addPage();
        totalPieces--;
    });
    doc.save('invoice.pdf');
    invWrapper.width(cache_width);
}
