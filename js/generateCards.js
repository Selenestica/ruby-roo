const cardContainer = document.getElementById("card-container");
const modalBody = document.getElementById("modalBody");
const imageModalLabel = document.getElementById("imageModalLabel");

const cardMaker = async () => {
    let cards = "";
    for (let i = 0; i < imageURLs.length; i++) {
        let content;
        const text = imageURLs[i].text;
        if (
            imageURLs[i].path.slice(-3) === "mp4" ||
            imageURLs[i].path.slice(-3) === "MP4"
        ) {
            content = `
        <video style="width: 240px; height: 317.33px;" class="card-img-top">
          <source src="${imageURLs[i].path}" type="video/mp4">
          Your browser does not support the video tag.
        </video> 
      `;
        } else {
            content = `<img src="${imageURLs[i].path}" class="card-img-top" alt="${text}" />`;
        }
        const card = `
      <button type="button" onclick="generateModal('${text}', '${imageURLs[i].path}')" class="modalButton" data-toggle="modal" data-target="#imageModal">
        <div class="card" style="width: 15rem;">
          ${content}
        </div>
      </button>
    `;
        cards += card;
    }
    cardContainer.innerHTML = cards;
};

const generateModal = (text, path) => {
    let modalContent;
    if (path.slice(-3) === "mp4" || path.slice(-3) === "MP4") {
        modalContent = `
      <video controls id="modalImage" autoplay class="card-img-top">
        <source src="${path}" type="video/mp4">
        Your browser does not support the video tag.
      </video> 
    `;
    } else {
        modalContent = `
      <img src="${path}" id="modalImage" class="card-img-top" alt="ruby" loading="lazy" />
  `;
    }
    modalBody.innerHTML = modalContent;
    imageModalLabel.innerHTML = text;
};

cardMaker();
