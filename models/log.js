class  Log{
    constructor(Id,description,message,recipients){
      this.Id = Id;
      this.description = description;
      this.recipients = recipients;
      this.message = message;
      
    }
  }
  
  module.exports = Log;