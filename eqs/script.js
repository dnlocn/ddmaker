function loadFormula() {

    var array = [
        //Ao deletar uma formula aqui, delete também a div correspondente no html
        "\\vec{F}", '\\overleftarrow{AB}', '\\overrightarrow{AB}', '\\underleftarrow{AB}', '\\underrightarrow{AB}', '\\overleftharpoon{ac}', '\\overrightharpoon{ac}', '\\overleftrightarrow{AB}', '\\underleftrightarrow{AB}', '\\overline{AB}', '\\underline{AB}',

        '\\left(\\LARGE{AB}\\right)',

        '\\begin{matrix} a & b \\\\ c & d  \\end{matrix}', '\\begin{pmatrix} a &  b \\\\ c &  d \\end{pmatrix}', '\\begin{bmatrix} a &  b \\\\ c &  d \\end{bmatrix}', '\\begin{vmatrix}  a &  b \\\\ c &  d \\end{vmatrix}',

        '\\begin{matrix} \\begin{split}a&=b+c\\\\&=e+f\\\\&=g+h \\end{split}\\end{matrix}', '\\begin{aligned}a&=b+c\\d+e&=f\\end{aligned}', '\\begin{aligned} 10&x+&3&y=2 \\\\ 3&x+&13&y=4 \\end{aligned}',

        '\\Alpha', '\\alpha', '\\Beta', '\\beta', '\\Gamma', '\\Delta', '\\delta', '\\Sigma', '\\sigma', '\\lambda', '\\mu', '\\varphi', '\\Theta', 'x+y^{2x}', 'x_n', 'e^x', '\\exists', '\\nexists', '\\isin', '\\notin',

        '+', '-', '\\cdot', '\\div', '*', '\\pm', '\\times',

        '\\frac{a}{b}', '\\cfrac{a}{1+\\cfrac{1}{b}}', '\\binom{n} {k}', '{n \\brack k}',

        '\\sqrt{x}', '\\sqrt[3]{x}',

        '\\textcolor{blue}{F=ma}', '\\colorbox{aqua}{$F=ma$}', '\\displaystyle\\sum_{i=1}^n', '\\textstyle\\sum_{i=1}^n',

        '\\lim\\limits_x', '\\lim\\nolimits_x'
    ];

    for (let i = 0; i < array.length; i++) {

        try {
            document.getElementById('divFormula' + i).innerHTML = katex.renderToString(array[i]);
            document.getElementById('divFormula' + i).setAttribute('data-formula', array[i]);
            document.getElementById('divFormula' + i).title = array[i];
            document.getElementById('divFormula' + i).onclick = function () {
                fillTextArea(this.getAttribute('data-formula'));
            }
            //console.log('Div' + i, array[i]);
        } catch (error) {
            console.log(i, array[i], error);
        }
    }
}

function fillTextArea(f) {
    var txtAreaSentence = document.getElementById('txtLatexSentencesArea');
    txtAreaSentence.value += f;
    txtAreaSentence.focus();

    showPreview(txtAreaSentence.value);
}


function showPreview(txtAreaSentence) {
   
    //var txtAreaSentence = document.getElementById('txtLatexSentencesArea').value;
    var divPreview = document.getElementById('divResultEqs');
    // divPreview.innerHTML = "";
    var divPreviewImgs = document.getElementById('divResultImgEqs');

    let txtAreaSplit = txtAreaSentence.split('@');

    var div = document.createElement('div');
    console.log('txtAreaSplit',txtAreaSplit);

    for (let i = 0; i < txtAreaSplit.length; i++) {
        div.id = "previewEqs" + i;
        div.innerHTML = katex.renderToString(txtAreaSplit[i]);
        divPreview.appendChild(div);
    }
}




function exportEquations(divResultEqs) {

    domtoimage.toPng(divResultEqs).then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;

        document.getElementById("divResultImgEqs").appendChild(img);

    }).catch(function (error) {
        console.error('oops, alguma coisa deu errado >', error);
    });
}



document.getElementById('txtlatexSentencesArea').onblur = showPreview();