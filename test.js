
const AWS = require('aws-sdk');
var fs = require('fs');
const mysql = require('mysql')
const S3 = new AWS.S3();

var pool = mysql.createPool({
 
});


const params = {
    Bucket: bucket,
    Key: key,
    ExpressionType: 'SQL',
    Expression: query,
    InputSerialization: { CSV: { FileHeaderInfo: 'USE' } },
    OutputSerialization: { CSV: {} }
}

exports.handler = async (event, context) => {
    try {
        const query = "SELECT * FROM s3object s WHERE s.id > '0'";
        const bucket = 'bmmshaha';
        const key = 'test.csv';

        

        const data = await getDataUsingS3Select(params);
        pool.getConnection((err, connection) => {
              if (err) throw err;
              console.log("Connected!" + connection);
            
            
              S3.getObject(params, function(err, result) {
                if (err) {
                  throw new Error(err);
                } else {
                  console.log('file stored successfully', result);
                  connection.query('TRUNCATE TABLE <table_name>', (err, result) => {
                    if (err) {
                     throw new Error(err);
                    } else {
                      console.log('table truncated');
                      var query = `LOAD DATA LOCAL INFILE '<file_name>' INTO table <table_name> FIELDS TERMINATED BY ','  ENCLOSED BY '"' IGNORE 1 LINES `;
                      connection.query(query, function(err, result) {
                        if (err) throw err;
                        console.log("Result: " + result);
                        connection.release();
                        console.log('file deleted');
                      });
                    }
                  });
                }
            
              });
            })
        context.succeed(data);
    } catch (error) {
        context.fail(error);
    }
};

const getDataUsingS3Select = async (params) => {
    return new Promise((resolve, reject) => {
        S3.selectObjectContent(params, (err, data) => {
            if (err) { reject(err); }

            // This is a stream of events
            data.Payload.on('data', (event) => {
                // event, there is data inside it
                if (event.Records) {
                    // do what you want with payload: send to a queue or direct to db
                    console.log('Row:', event.Records.Payload.toString('utf8'));
                }
            }).on('end', () => {
                // we arrive here after processing everything
                resolve();
            });
        });
    })
}




				
				
function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {
  //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
  var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
  
  var CSV = 'sep=,' + '\r\n\n';

  //This condition will generate the Label/Header
  if (ShowLabel) {
      var row = "";
      
      //This loop will extract the label from 1st index of on array
      for (var index in arrData[0]) {
          
          //Now convert each value to string and comma-seprated
          row += index + ',';
      }

      row = row.slice(0, -1);
      
      //append Label row with line break
      CSV += row + '\r\n';
  }
  
  //1st loop is to extract each row
  for (var i = 0; i < arrData.length; i++) {
      var row = "";
      
      //2nd loop will extract each column and convert it in string comma-seprated
      for (var index in arrData[i]) {
          row += '"' + arrData[i][index] + '",';
      }

      row.slice(0, row.length - 1);
      
      //add a line break after each row
      CSV += row + '\r\n';
  }

  if (CSV == '') {        
      alert("Invalid data");
      return;
  }   
  
  //Generate a file name
  var fileName = "MyReport_";
  //this will remove the blank-spaces from the title and replace it with an underscore
  fileName += ReportTitle.replace(/ /g,"_");   
  
  //Initialize file format you want csv or xls
  var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
  
  // Now the little tricky part.
  // you can use either>> window.open(uri);
  // but this will not work in some browsers
  // or you will not get the correct file extension    
  
  //this trick will generate a temp <a /> tag
  var link = document.createElement("a");    
  link.href = uri;
  
  //set the visibility hidden so it will not effect on your web-layout
  link.style = "visibility:hidden";
  link.download = fileName + ".csv";
  
  //this part will append the anchor tag and remove it after automatic click
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}