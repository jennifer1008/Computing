File.prototype.convertToBase64 = function(callback) {
    var reader = new FileReader();
    reader.onload = function(e) {
        callback(e.target.result);
    };
    reader.onerror = function(e) {
        callback(null);
    };
    reader.readAsDataURL(this);
};
