function generateOptionDomStr(arr) {
  let dom = "";
  if (arr instanceof Array) {
    arr.forEach(e => {
      if (e && e.url) {
        dom += `<option value="${e.url}">${e.name}</option>`;
      }
    });
  }
  return dom;
}

function generateLinkItemDomStr(arr) {
  let dom = "";
  if (arr instanceof Array) {
    arr.forEach((e, index) => {
      if (e && e.url) {
        dom += `<div class="link-item">
            <span class="link-item-name">${e.name}</span>
            <span class="link-item-url">${e.url}</span>
            <span class="link-item-del">X</span>
          </div>`;
      }
    });
  }
  return dom;
}

function addStore(item, db = "injectUrl") {
  if (window.localStorage) {
    if (db === "injectUrl") {
      let arr = JSON.parse(window.localStorage.getItem(db) || "[]");
      if (item) {
        if (
          !arr.filter(function(o) {
            if (o.name === item.name) {
              o.url = item.url;
            }
            return o.name === item.name;
          }).length
        ) {
          arr.push(item);
        }
      }
      window.localStorage.setItem(db, JSON.stringify(arr));
      resetDom(arr);
    }
    if (db === "size") {
      let size = JSON.parse(window.localStorage.getItem(db) || "{}");
      size.width = item.width;
      size.height = item.height;
      window.localStorage.setItem(db, JSON.stringify(size));
    }
  }
}

function delStore(item) {
  if (window.localStorage) {
    let arr = JSON.parse(window.localStorage.getItem("injectUrl") || "[]");
    if (item) {
      for (let index = 0; index < arr.length; index++) {
        if (arr[index].name === item.name) {
          arr.splice(index, 1);
          break;
        }
      }
    }
    window.localStorage.setItem("injectUrl", JSON.stringify(arr));

    resetDom(arr);
  }
}

function getStore() {
  if (window.localStorage) {
    let arr = JSON.parse(window.localStorage.getItem("injectUrl") || "[]");
    let size = JSON.parse(window.localStorage.getItem("size") || "{}");

    resetDom(arr, size);
  }
}

function removeStore(item) {
  if (window.localStorage) {
    let arr = JSON.parse(window.localStorage.getItem("injectUrl") || "[]");
    arr = arr.filter(function(o) {
      return o.name !== item.name;
    });
    window.localStorage.setItem("injectUrl", JSON.stringify(arr));
    resetDom(arr);
  }
}

function resetDom(arr, size) {
  $("#injectUrl").empty();
  $("#injectUrl").append(generateOptionDomStr(arr));
  $("#link-board-box").empty();
  $("#link-board-box").append(generateLinkItemDomStr(arr));
  if (size) {
    $("#width").val(size.width);
    $("#height").val(size.height);
  }
  //add event
  $(".link-item-del").on("click", function(e) {
    let tarName = $(e.target)
      .prevAll(".link-item-name")
      .text();
    removeStore({ name: tarName });
  });
}

document.getElementById("injectFrame").addEventListener("click", function() {
  //send Message to content-script

  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    let width = document.getElementById("width").value || "350";
    let height = document.getElementById("height").value || "450";
    let url = document.getElementById("url").value;
    let name = document.getElementById("injectName").value || url;
    // if (/^http(s)?:\/\/|\\.+/.test(window.location)) {
    if (url) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          size: { width: width + "px", height: height + "px" },
          name: name,
          url: url
        },
        function(response) {
          console.log(response);
        }
      );
    }
  });
});

$("#saveLink").on("click", function(params) {
  let url = document.getElementById("url").value;
  let name = document.getElementById("injectName").value || url;
  let width = $("#width").val();
  let height = $("#height").val();
  if (url) {
    addStore({ name: name, url: url });
  }
  if (width && height) {
    addStore({ width: width, height: height }, "size");
  }
});

getStore();
