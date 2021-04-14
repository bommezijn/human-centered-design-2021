document.getElementById("fontSize").oninput = () => {
  const fsSize = document.getElementById("fontSize").value;
  document.querySelectorAll("main ul li").forEach((e) => {
    e.style.fontSize = fsSize + "px";
  });
  document.getElementById("fontSizeShow").textContent = fsSize;
};

document.getElementById("lineHeight").oninput = () => {
  const lhSize = document.getElementById("lineHeight").value;
  document.querySelectorAll("main ul li").forEach((e) => {
    e.style.lineHeight = lhSize + "px";
  });
  document.getElementById("lineHeightShow").textContent = lhSize;
};
