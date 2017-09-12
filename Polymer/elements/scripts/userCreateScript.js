HTMLImports.whenReady(() => {
  const app = document.getElementById('userCreateId');
  app.onCreate = function() {
    this.responseNew = null;
    this.$.dataAjax.generateRequest();
  };
  
  app.json = function(obj) {
    return JSON.stringify(obj, null, 2);
  };
});