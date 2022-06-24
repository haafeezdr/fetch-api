 document.getElementById('button1').addEventListener('click', getText);

 document.getElementById('button2').addEventListener('click', getJson);

 document.getElementById('button3').addEventListener('click', getExternal);

 // get local text data
 function getText() {
    fetch('text.txt')
    .then(function(res){
        return res.text();
    })
    .then(function(data) {
        console.log(data);
         document.getElementById('output').innerHTML = data;
    })
    .catch(function(err){
        console.log(err);
    });
 }
 // get local json data
 function getJson() {
    fetch('post.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data) {
        console.log(data);
        let output = '';
        data.forEach(function(post) {
          output += `<li>${post.title}</li>`;  
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
        console.log(err);
    });
 }

  // get from external Api  
  function getJson() {
    fetch('https://api.github.com/users')
    .then(function(res){
        return res.json();
    })
    .then(function(data) {
        console.log(data);
        let output = '';
        data.forEach(function(post) {
          output += `<li>${post.title}</li>`;  
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
        console.log(err);
    });
 }