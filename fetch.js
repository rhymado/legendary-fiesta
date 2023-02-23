// syntax: fetch (URL, options?)
// options: Request object => berisikan info terkait request
// diantaranaya: method, body, header, signal
document.title = "DOM & Versioning";
const URL = "https://jsonplaceholder.typicode.com/users";
// let token, email, password;
const controller = new AbortController();

function abortFetch(controller) {
  controller.abort(new Error("Canceled by User"));
  console.log("Fetch Aborted");
}

async function doFetch(url, controller) {
  //   fetch(url, { signal: controller.signal })
  //     .then((res) => {
  //       console.log(res);
  //       if (res.ok === false) {
  //         // error handling untuk status 400 dan 500
  //         throw new Error(res.statusText);
  //       } else {
  //         return res.json();
  //       }
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => console.log(err.message));
  try {
    const res = await fetch(url, { signal: controller.signal });
    let data;
    console.log(res);
    if (res.ok === false) {
      throw new Error(res.statusText);
    } else {
      data = await res.json();
    }
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
}

const fetchBtn = document.querySelector("#fetch");
fetchBtn.addEventListener("click", () => doFetch(URL, controller));
// fetchBtn.addEventListener("mouseover", () => {
//   console.log("Mouse here");
// });
// fetchBtn.onclick = () => doFetch(URL, controller);
const abortBtn = document.querySelector("#abort");
abortBtn.addEventListener("click", () => abortFetch(controller));

// console.log(fetchBtn.getAttribute("onclick"));
// fetchBtn.setAttribute("style", "background: hsl(9, 97%, 61%)");
// fetchBtn.style.background = "hsl(9, 97%, 61%)";

const names = ["Andi", "Budi", "Susi"];
// console.log(content);
const listWrapper = document.createElement("ol");
for (let name of names) {
  const listElement = document.createElement("li");
  const text = document.createTextNode(name);
  listElement.appendChild(text);
  listWrapper.appendChild(listElement);
}
// console.log(listWrapper);
const showBtn = document.querySelector("#show");
showBtn.addEventListener("click", () => {
  const mainContent = document.querySelector("main[class='content']");
  mainContent.appendChild(listWrapper);
});

// const titleHero = document.querySelector(".hero .title");
const titleProducts = document.querySelector(".products .title");
titleProducts.innerHTML += " Modified";

const titleElements = document.querySelectorAll(".title");
titleElements.forEach((el, idx) => {
  const re = /(H|h)ero/g;
  if (re.test(el.innerHTML)) {
    el.innerHTML += " Superb";
  } else {
    el.innerHTML += " Latest";
  }
});
