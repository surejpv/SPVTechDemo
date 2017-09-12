HTMLImports.whenReady(() => {
  const app = document.getElementById('quotesId');
  app.onClick = function() {
    this.responseNew = null;
    this.$.dataAjaxNew.generateRequest();
  };
  
  app.json = function(obj) {
    return JSON.stringify(obj, null, 2);
  };

 /* const appNew = document.getElementById('createId');
  appNew.createUser = function() {
    this.response = null;
    this.$.dataAjax.generateRequest();
  };  */
    
});

