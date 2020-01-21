let hide = false;
let reload = function(request) {
  if (request) {
    if ($("#stealthily-read").length) {
      $("#stealthily-read").remove();
    }

    $("body").append(
      `
      <div id="stealthily-read" style="width:${request.size.width};height:${
        request.size.height
      }">
        <div style="position:relative;height: 100%;">
          <div id="stealthily-read-toggle">
            <svg style="width: 30px;height: 30px;" viewBox="0 0 512 512" width="512pt"><path d="m446 0h-380c-36.394531 0-66 29.605469-66 66v380c0 36.394531 29.605469 66 66 66h380c36.394531 0 66-29.605469 66-66v-380c0-36.394531-29.605469-66-66-66zm46 446c0 25.363281-20.636719 46-46 46h-380c-25.363281 0-46-20.636719-46-46v-380c0-2.035156.148438-4.035156.402344-6h101.097656c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10h-93.421875c8.300781-12.066406 22.199219-20 37.921875-20h380c25.363281 0 46 20.636719 46 46zm0 0"/><path d="m161.5 60c2.628906 0 5.210938-1.070312 7.070312-2.929688 1.859376-1.859374 2.929688-4.441406 2.929688-7.070312s-1.070312-5.210938-2.929688-7.070312c-1.859374-1.859376-4.441406-2.929688-7.070312-2.929688s-5.210938 1.070312-7.070312 2.929688c-1.859376 1.859374-2.929688 4.441406-2.929688 7.070312s1.070312 5.210938 2.929688 7.070312c1.859374 1.859376 4.441406 2.929688 7.070312 2.929688zm0 0"/><path d="m268 61.855469c-1.875-1.875-4.417969-2.929688-7.070312-2.929688-2.652344 0-5.195313 1.054688-7.070313 2.929688l-65.054687 65.054687c-1.875 1.875-2.929688 4.417969-2.929688 7.070313 0 2.652343 1.054688 5.195312 2.929688 7.074219l58.945312 58.945312h-183.75c-5.523438 0-10 4.476562-10 10v92c0 5.523438 4.476562 10 10 10h183.75l-58.945312 58.945312c-1.875 1.875-2.929688 4.417969-2.929688 7.070313s1.054688 5.195313 2.929688 7.074219l65.054687 65.054687c1.875 1.875 4.417969 2.925781 7.070313 2.925781 2.652343 0 5.195312-1.050781 7.070312-2.925781l67.070312-67.074219c3.90625-3.90625 3.90625-10.234374 0-14.140624s-10.234374-3.90625-14.140624 0l-60 60-50.914063-50.914063 68.949219-68.945313c2.855468-2.859374 3.714844-7.160156 2.167968-10.898437-1.550781-3.734375-5.195312-6.171875-9.242187-6.171875h-197.890625v-72h197.894531c4.042969 0 7.691407-2.4375 9.238281-6.171875 1.546876-3.738281.691407-8.039063-2.167968-10.898437l-68.949219-68.945313 50.914063-50.914063 172.925781 172.929688-56.925781 56.929688c-3.90625 3.90625-3.90625 10.234374 0 14.140624s10.234374 3.90625 14.140624 0l64-64c3.90625-3.902343 3.90625-10.234374 0-14.140624zm0 0"/><path d="m356 338c-2.628906 0-5.210938 1.070312-7.070312 2.929688-1.859376 1.859374-2.929688 4.429687-2.929688 7.070312s1.070312 5.210938 2.929688 7.070312c1.859374 1.859376 4.441406 2.929688 7.070312 2.929688s5.210938-1.070312 7.070312-2.929688c1.859376-1.859374 2.929688-4.441406 2.929688-7.070312s-1.070312-5.210938-2.929688-7.070312c-1.859374-1.859376-4.441406-2.929688-7.070312-2.929688zm0 0"/></svg>
          </div>
          <div id="stealthily-read-title">
            ${request.name || "Title"}
          </div>
          <div id="stealthily-read-destory">
            <svg version="1.1" x="0px" y="0px" viewBox="0 0 294.843 294.843" style="width: 30px;height: 30px;enable-background:new 0 0 294.843 294.843;" xml:space="preserve">
              <g>
                <path
                  d="M147.421,0C66.133,0,0,66.133,0,147.421s66.133,147.421,147.421,147.421c38.287,0,74.567-14.609,102.159-41.136
                  c2.389-2.296,2.464-6.095,0.167-8.483c-2.295-2.388-6.093-2.464-8.483-0.167c-25.345,24.367-58.672,37.786-93.842,37.786
                  C72.75,282.843,12,222.093,12,147.421S72.75,12,147.421,12s135.421,60.75,135.421,135.421c0,16.842-3.052,33.273-9.071,48.835
                  c-1.195,3.091,0.341,6.565,3.432,7.761c3.092,1.193,6.565-0.341,7.761-3.432c6.555-16.949,9.879-34.836,9.879-53.165
                  C294.843,66.133,228.71,0,147.421,0z"
                />
                <path
                  d="M167.619,160.134c-2.37-2.319-6.168-2.277-8.485,0.09c-2.318,2.368-2.277,6.167,0.09,8.485l47.236,46.236
                  c1.168,1.143,2.683,1.712,4.197,1.712c1.557,0,3.113-0.603,4.288-1.803c2.318-2.368,2.277-6.167-0.09-8.485L167.619,160.134z"
                />
                <path
                  d="M125.178,133.663c1.171,1.171,2.707,1.757,4.243,1.757s3.071-0.586,4.243-1.757c2.343-2.343,2.343-6.142,0-8.485
                  L88.428,79.942c-2.343-2.343-6.143-2.343-8.485,0c-2.343,2.343-2.343,6.142,0,8.485L125.178,133.663z"
                />
                <path
                  d="M214.9,79.942c-2.343-2.343-6.143-2.343-8.485,0L79.942,206.415c-2.343,2.343-2.343,6.142,0,8.485
                  c1.171,1.171,2.707,1.757,4.243,1.757s3.071-0.586,4.243-1.757L214.9,88.428C217.243,86.084,217.243,82.286,214.9,79.942z"
                />
              </g>
            </svg>
          </div>
          <div id="stealthily-read-content">
            <iframe src="${
              request.url
            }" style="width: 100%;height: 100%;"></iframe>
          </div>
        </div>
      </div>
    `
    );

    $("#stealthily-read-destory").click(function() {
      $("#stealthily-read").remove();
      window.localStorage.setItem("injectRequest", "");
    });

    $("#stealthily-read-toggle").click(function() {
      if (hide) {
        $("#stealthily-read").css("transform", "translateX(0%)");
        $("#stealthily-read-toggle").css("transform", "rotate(0deg)");
        hide = false;
      } else {
        $("#stealthily-read").css("transform", "translateX(100%)");
        $("#stealthily-read-toggle").css("transform", "rotate(180deg)");
        hide = true;
      }
    });
  }
};

document.addEventListener("DOMContentLoaded", function() {
  // console.log(
  //   11111,
  //   window.localStorage,
  //   JSON.parse(window.localStorage.getItem("injectRequest"))
  // );
  if (window.localStorage && window.localStorage.getItem("injectRequest")) {
    reload(JSON.parse(window.localStorage.getItem("injectRequest")));
  }

  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // console.log(
    //   request
    //   // sender.tab
    //   //   ? "from a content script:" + sender.tab.url
    //   //   : "from the extension"
    // );
    if (request.url) {
      if (window.localStorage) {
        window.localStorage.setItem("injectRequest", JSON.stringify(request));
      }
      reload(request);
      sendResponse("ok");
    }
    // if (request.cmd == "mycmd") sendResponse("ok");
  });
});