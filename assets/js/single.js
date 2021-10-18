var issueContainerEl = document.querySelector("#issues-container");
var getRepoIssues = function (repo) {
  console.log(repo);
  var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";

  fetch(apiUrl).then(function (response) {
    // request was successful
    if (response.ok) {
      response.json().then(function (data) {
        displayIssues(data);
      });
    } else {
      alert("There was a problem with your request!");
    }
  });
};

var displayIssues = function(issues) {
    
};

getRepoIssues("facebook/react");
