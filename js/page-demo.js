(function() {
  $(function() {
    var $preview, editor, mobileToolbar, toolbar;
    Simditor.locale = 'en-US';
    toolbar = ['title', 'bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color', '|', 'ol', 'ul', 'blockquote', 'code', 'table', '|', 'link', 'image', 'hr', '|', 'indent', 'outdent', 'alignment'];
    mobileToolbar = ["bold", "underline", "strikethrough", "color", "ul", "ol"];
    if (mobilecheck()) {
      toolbar = mobileToolbar;
    }

    if ($('#txt-content').length > 0) {
      
      editor = new Simditor({
        textarea: $('#txt-content'),
        placeholder: 'write here...',
        toolbar: toolbar,
        pasteImage: true,
        defaultImage: 'assets/images/image.png',
        upload: location.search === '?upload' ? {
          url: '/upload'
        } : true
      });
    }

    $preview = $('#preview');
    if ($preview.length > 0) {
      return editor.on('valuechanged', function(e) {
        return $preview.html(editor.getValue());
      });
    }

    if ($('#txt-content2').length > 0){
      
      editor2 = new Simditor({
        textarea: $('#txt-content2'),
        placeholder: 'write here...',
        toolbar: toolbar,
        pasteImage: true,
        defaultImage: 'assets/images/image.png',
        upload: location.search === '?upload' ? {
          url: '/upload'
        } : true
      });
    }

    $preview2 = $('#preview');
    if ($preview2.length > 0) {
      return editor2.on('valuechanged', function(e) {
        return $preview2.html(editor2.getValue());
      });
    }

  });

}).call(this);