document.getElementById('viewPdfBtn').addEventListener('click', function() {
    const pdfViewer = document.getElementById('pdfViewer');
    const pdfObject = document.getElementById('pdfObject');
    
    // Set the path of the PDF file
    pdfObject.data = 'ML unit-01.pdf';  // Change 'pdf-file.pdf' to your PDF filename

    // Show the PDF viewer
    pdfViewer.style.display = 'block';
});
