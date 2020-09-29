
const AWS = require('aws-sdk');
var fs = require('fs');
const mysql = require('mysql')
const S3 = new AWS.S3();

var pool = mysql.createPool({
  host: "jdbc:mysql://mysqlpipdb.cob2atfvib8y.us-east-1.rds.amazonaws.com",
  user: "redbuttonuser",
  password: "fjgjwk1$",
  database: "redbutton"
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


