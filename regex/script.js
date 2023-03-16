$('#summernote').summernote({
  placeholder: 'Cole o texto do word aqui',
  tabsize: 2,
  height: 300,
  toolbar: [
    ['view', ['codeview']]
  ]
});


$("button").click(function () {


  var textareaValue = $('#summernote').summernote('code');

  textareaValue = textareaValue.replace(/\n/g, " "); // clear space
  textareaValue = textareaValue.replace(/(&nbsp;)+/g, " "); // clear space
  textareaValue = textareaValue.replace(/(&quot;)+/g, " "); // clear space
  textareaValue = textareaValue.replace(/<o:p>\s*<\/o:p>/g, " "); // clear space
  // textareaValue = textareaValue.replace(/<img(.*?)>/g, "<div class='img-center mx-800 text-center zoom'> <img $1><div class='legend'><b>Figura 1: Mapa de aula</b><br>Fonte: Autor(2023)</div></div>");
  // textareaValue = textareaValue.replace(/\<(\w+)\s[^>]*?style="margin-left.*?\s?[^>]*?(\/?)>(.*?)<\/\w+>/gi, "<blockquote><p>$3</p></blockquote>");
  textareaValue = textareaValue.replace(/\<(\w+)\s[^>]*?style=([\"|\']).*?\2\s?[^>]*?(\/?)>/gi, "<$1$3>");
  textareaValue = textareaValue.replace(/<span>(.*?)<\/span>/g, "$1"); // clear space
  textareaValue = textareaValue.replace(/<table>/g, "<div class='table-responsive mx-auto'><table class='data-table'>");
  textareaValue = textareaValue.replace(/<\/table>/g, "</table><div class='legend'><b>##</b><br>##</div></div>");

  //textareaValue = textareaValue.replace(/class\s*=\s*["|'](.*?)["|']/gm,"");




  /*var textareaValue = $('#summernote').summernote('code');
  // regex entre <p>(.*?)</p>

  textareaValue = textareaValue.replace(/(&nbsp;)+/g, " ");
  textareaValue = textareaValue.replace(/\s(sdtag|height|width|align|class|style)="[a-zA-Z0-9:;\.\s\(\)\-\,]*"/gi, " ");
  textareaValue = textareaValue.replace(/(<\/?(?:a|p|img|i|b)[^>]*>)|<[^>]+>/ig, "$1");

  // textareaValue = textareaValue.replace(/● (.*?)(<\/p>)/gi, "$1$2");
  textareaValue = textareaValue.replace(/\s\>/g, ">");*/




  // textareaValue = textareaValue.replace(/\s(style=)|\s(class=)(.*?)>/gi, ">");
  // textareaValue = textareaValue.replace(/(style=?)([a-zA-Z0-9:;\.\s\(\)\-\,]*)(>)/gi, ">");
  // textareaValue = textareaValue.replace(/(style=“)([a-zA-Z0-9:;\.\s\(\)\-\,]*)(”)/gi, "");
  // textareaValue = textareaValue.replace(/(sdtag=")([a-zA-Z0-9:;\.\s\(\)\-\,]*)(")/gi, "");
  // textareaValue = textareaValue.replace(/(class=")([a-zA-Z0-9:;\.\s\(\)\-\,]*)(")/gi, "");
  // textareaValue = textareaValue.replace(/(?<=<span.*?style=(.*?)>)(.*?)(?=<\/span>)/g , "$1");

  document.getElementById('result').textContent = textareaValue;

});


