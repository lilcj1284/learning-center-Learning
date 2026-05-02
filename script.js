let apps = ["Instagram", "Roblox", "TikTok"];

// SEARCH (Google-style)
function search() {
  let q = document.getElementById("search").value;
  window.open("https://www.google.com/search?q=" + q, "_blank");
}

// OPEN TAB SYSTEM
function openTab(name) {
  let tabs = document.getElementById("tabs");

  let div = document.createElement("div");
  div.className = "tab";
  div.style.display = "block";

  div.innerHTML = "<h2>" + name + "</h2>";

  tabs.appendChild(div);

  // if Apps tab
  if (name === "Apps") {
    apps.forEach(a => {
      let b = document.createElement("button");
      b.innerText = a;
      div.appendChild(b);
    });
  }
}

// OWNER LOGIN → SIDE PANEL
document.addEventListener("keydown", function(e){
  if (e.key === "o") {
    let code = prompt("Owner Code:");
    if (code === "12341234") {
      document.getElementById("ownerPanel").style.right = "0px";
    }
  }
});

// ADD APP
function addApp() {
  let name = prompt("App name:");
  apps.push(name);
  alert("Added!");
}

// DELETE APP
function deleteApp() {
  let name = prompt("App to delete:");
  apps = apps.filter(a => a !== name);
  alert("Deleted!");
}

// ANNOUNCEMENTS
function sendAnnouncement() {
  let msg = prompt("Announcement:");
  alert("Sent: " + msg);
}