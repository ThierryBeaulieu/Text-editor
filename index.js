document.getElementById('text-box-area').addEventListener('keydown', function(e) {
  if (e.key == 'Tab') {
    e.preventDefault();
    var start = this.selectionStart;
    var end = this.selectionEnd;

    this.value = this.value.substring(0, start) +
      "\t" + this.value.substring(end);

    this.selectionStart =
      this.selectionEnd = start + 1;
  }
});

// Makes me able to detect line breaks
/*
enteredText = textareaVariableName.val();
numberOfLineBreaks = (enteredText.match(/\n/g)||[]).length;

*/ 