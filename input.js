let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};



const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit();
  } else{
    if (data === 'w') {
      // console.log("Move Up");
      connection.write("Move: up"); 
    } else if (data === 'a') {
      // console.log("Move Left");
      connection.write("Move: left"); 
    } else if (data === 's') {
      // console.log("Move Down");
      connection.write("Move: down"); 
    } else if (data === 'd') {
      // console.log("Move Right");
      connection.write("Move: right"); 
    }
  }
};

module.exports = {setupInput}