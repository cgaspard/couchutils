/*jslint node: true*/
var script = {

  // getDocByID(callBack) this function will be added by the parent script
  // getDocs(view, keys, callBack) this function will be added by the parent script
  // saveDoc(doc)
  // saveDocs(docs)

  /// [Required]
  name: "Name",
  description: "This is a script that does something",
  version: 1.1,
  verbose: false,  //// Do not change this, its updated by the running script

  /// [Required]
  config: {
    	db: {
		serverurl: "http://localhost",
		serverport: 5984,
		name: "efocus",
		secure: false,
		auth: {
			username: "mygait",
			password: "addison123"
		}
	},
  },

  /// [Optional] Use this init function if your initializer has errors
  initAsync: function(callBack) {
    /// Put code here that you migth ned to use in processing later
    callBack(/* errors reported here */);
  },

  /// [Optional]
  init: function() {
    /// Put setup code here
    console.log("Init called");
  },

  /// This is a one time run, and it happens after init, but before all the other functions
  /// [Optional]
  run : function() {
    console.log("Run called");
  },

  /// [Optional] Use this one time function in async mode
  runAsync: function(callBack) {
    /// Put code here that you migth ned to use in processing later
    callBack(/* errors reported here */);
  },

  /// This is how you process multiple 
  /// The runscript utility will run these views, each document 
  /// will be passed to the updateFunction.   If you modify it, it will be updated in the database.
  /// [Optional]
  updateViews: [
    {
      description: "Update the user accounts to convert their community id to an array of ids",
      updateView: "users/all",
      updateKey: {},
      updateFunction : function(object) {
        // Modify your object here then return it
        if(object.communities === undefined) {
          object.communityIds = [object.community];
        }
        delete object.community;
        return object;
      }
    },{
      description: "This is just a sample save of the residents",
      updateView: "residents/all",
      updateKey: {},
      updateFunction: function(object) {
        return object;
      }
    },{
      description: "This is just a sample save of the residents",
      updateID: "id1234",
      updateKey: {},
      updateFunction: function(object) {
        return object;
      }
    }

  ],

  /// Use this to upadate all objects in a view
  /// [Optional]
  updateView: 'residents/all',
  upateKey: {},
  saveObjectsAsync: true,
  processObject: function(object) {
    // Modify your object here then return it
    object.testproperty = "Hello there Kevin 1";
    return object;
  },

  /// return docs to be added to couchdb here
  /// [Optional]
  addDocs: function() {
    var docs = [
      {
        "_id": "joe@mygait.com",
        "docType" : "user",
        "firstname": "Joe"
      }

    ];
    return docs;
  },


};

module.exports = script;
