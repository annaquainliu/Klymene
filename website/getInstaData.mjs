// import mysql2 from "./mysql2.js";
import mysql2 from "mysql2";

function Post(Url, Like) {
  this.Url = Url;
  this.Like = Like;
  // this.getUrl = function() {return Url; }
  // this.getLike = function() {return Like; }
}

var Posts = new Array;
var connection;

function createConnection() {
  connection = mysql2.createPool({
    host: "database-1.cu0uoxlfpjr3.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "TaylorSwiftIsCool1989",
    database: "insta",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
    })
}

createConnection();

connection.connect();

var instapost;

function getData() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM insta', function (error, results, fields) {
      if (error) {
        console.log('HISDFDSFSDFSDF');
        // connection.destroy();
        // createConnection();
        // resolve(0)
        throw error;
      }
      else {
        for (var i = 0; i < results.length; i++ ) {
          instapost = new Post(results[i].url, results[i].likes);
          Posts.push(instapost);
        }
        resolve(Posts)
      }
    });
  })
}

connection.end();

async function getPost(index) {
  Posts = await getData();
  return Posts[index].Url;
}

getPost(0);
