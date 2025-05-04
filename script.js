function formatText(command) {
    document.execCommand(command, false, null);
}

function changeFontSize(size) {
    document.execCommand("fontSize", false, size);
}

function changeFontSizePx(size) {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const span = document.createElement("span");
    span.style.fontSize = size;
    span.appendChild(range.extractContents());
    range.insertNode(span);
}


function changeFontFamily(font) {
    document.execCommand("fontName", false, font);
}

function saveDocument() {
    const content = document.getElementById("editor").innerHTML;
    const blob = new Blob([content], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "document.html";
    link.click();
}

function saveAsPDF() {
    const element = document.getElementById("editor");
    const opt = {
        margin: 0,
        filename: 'document.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}


function changeLineHeight(value) {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const span = document.createElement("span");
    span.style.lineHeight = value;
    span.appendChild(range.extractContents());
    range.insertNode(span);
}

function changeTextColor(color) {
    document.execCommand("foreColor", false, color);
}
