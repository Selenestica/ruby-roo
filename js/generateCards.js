const cardContainer = document.getElementById("card-container");
const modalBody = document.getElementById("modalBody");
const imageModalLabel = document.getElementById("imageModalLabel");
const URL = "https://rubyroophotos.s3.us-east-2.amazonaws.com/";
const imageURLs = [
    { path: `${URL}20200908_172635.jpg`, text: "Ruby with her ball" },
    {
        path: `${URL}62041191249--17704EF3-532B-433A-A460-6E4C0AA89725.JPG`,
        text: "Stoic Ruby"
    },
    {
        path: `${URL}62041391628--BC6CB9D6-6D40-4AD7-8327-A55DC1513048.JPG`,
        text: "Cat-eye Ruby"
    },
    {
        path: `${URL}62172065160--1E03A757-1AB2-4D40-A3C2-C0601FB94A46.JPG`,
        text: "Surprised Ruby"
    },
    { path: `${URL}IMG-3788.jpg`, text: "Neutral Ruby" },
    { path: `${URL}IMG-3803.jpg`, text: "Twisted Ruby" },
    { path: `${URL}IMG-3816.jpg`, text: "Tongue Ruby" },
    { path: `${URL}IMG-3844.jpg`, text: "Window Ruby" },
    { path: `${URL}IMG-3873.jpg`, text: "Ruby dead inside" },
    { path: `${URL}IMG-3911.jpg`, text: "Ruby snuggles Mama" },
    { path: `${URL}IMG-3913.jpg`, text: "Happy trails Ruby" },
    { path: `${URL}IMG-3930.jpg`, text: "Ruby family photo" },
    { path: `${URL}IMG-3952.jpg`, text: "Taco Ruby" },
    { path: `${URL}IMG-3958.jpg`, text: "Burrito Ruby" },
    { path: `${URL}IMG-3969.jpg`, text: "Sunbathing Ruby" },
    { path: `${URL}IMG-3974.jpg`, text: "Ruby snuggles Papa" },
    { path: `${URL}IMG-3976.jpg`, text: "Ruby waiting for Mama" },
    { path: `${URL}IMG-3982.jpg`, text: "Ruby worried for Mama" },
    { path: `${URL}IMG-3983.jpg`, text: "Taquito Ruby" },
    { path: `${URL}IMG-4011.jpg`, text: "Wet Ruby" },
    { path: `${URL}IMG-4018.jpg`, text: "Wet Ruby with the fam" },
    { path: `${URL}IMG-4031.jpg`, text: "Bath time Ruby" },
    { path: `${URL}IMG-4034.jpg`, text: "Shaking Ruby" },
    { path: `${URL}IMG-4050.jpg`, text: "Ground rubbing Ruby" },
    { path: `${URL}IMG-4059.jpg`, text: "Wrapped up Ruby" },
    { path: `${URL}IMG-4065.jpg`, text: "Rubys face" },
    { path: `${URL}IMG-4068.JPG`, text: "Cheesin pumpkin Ruby" },
    { path: `${URL}IMG-4069.JPG`, text: "Pumpkin patch Ruby with Mama" },
    { path: `${URL}IMG-4083.jpg`, text: "Ecstasy Ruby" },
    { path: `${URL}IMG-4348.jpg`, text: "Playing Ruby" },
    {
        path: `${URL}63226164675--B095820A-2EE9-4157-852F-FE803C064E09.jpg`,
        text: "Default Ruby"
    },
    {
        path: `${URL}63270313727--B1CEB6FA-FC22-4A1D-8C95-676940DFB53E.jpg`,
        text: "Jumping Ruby"
    },
    {
        path: `${URL}63242816708--683BF6FD-7F4E-4E73-BD79-C61275F3E624.jpg`,
        text: "Rubys new spot"
    },
    {
        path: `${URL}63226804779--889FE19B-357C-489F-B446-93537A9B3B2A.jpg`,
        text: "Whats wrong, Ruby?"
    },
    { path: `${URL}IMG_4625.jpg`, text: "Majestic Ruby" },
    { path: `${URL}IMG_4628.jpg`, text: "Ruby at my feet" },
    { path: `${URL}IMG_4633.jpg`, text: "Ruby walking with Mama" },
    { path: `${URL}IMG_4662.jpg`, text: "Buried in the sand Ruby" },
    { path: `${URL}IMG_4663.jpg`, text: "Ruby at the beach" },
    { path: `${URL}IMG_4325.jpg`, text: "Ruby looking for Mama" },
    { path: `${URL}IMG_4374.jpg`, text: "Rubys moment with Mama" },
    { path: `${URL}IMG_4391.jpg`, text: "Ruby with Papa" },
    { path: `${URL}IMG_4411.jpg`, text: "Ruby with Mama" },
    { path: `${URL}IMG_4429.jpg`, text: "Ruby helping Papa work" },
    { path: `${URL}IMG_4513.jpg`, text: "Ruby with Aunt and Uncle" },
    { path: `${URL}IMG_4595.jpg`, text: "Ruby helping Mama" },
    {
        path: `${URL}63967921301__737191F6-9C83-49CD-A777-9D936183A1A0.jpg`,
        text: "Ruby on her bed"
    },
    {
        path: `${URL}63155386789__8901025D-9158-4AE3-9B48-C3A231A5F93E.jpg`,
        text: "Oceans Ruby"
    },
    {
        path: `${URL}63828767529__5EB554C2-42B4-4022-AE85-51A1EA5C35D0.jpg`,
        text: "Majestic ocean Ruby"
    },
    {
        path: `${URL}63847813232__895C22FC-FB59-4AE5-B4FF-2112C5F2C448.jpg`,
        text: "Ruby at the coffee shop"
    },
    {
        path: `${URL}63441574589__E050EDDF-397B-4779-9802-C192B15B70B6.jpg`,
        text: "Ruby under guitars"
    },
    {
        path: `${URL}63934964062__232FDA63-DF27-4B75-A2D8-D7A3410D26BF.jpg`,
        text: "Ruby awaiting Mama"
    },
    {
        path: `${URL}64151208644__A1FAB868-8708-419C-B07E-2122BFB7808B.jpg`,
        text: "Another brick in the Ruby"
    },
    { path: `${URL}IMG_4714.jpg`, text: "Cuddles Ruby" },
    { path: `${URL}IMG_4727.jpg`, text: "Donut Ruby" },
    { path: `${URL}IMG_4726.jpg`, text: "Elongated Ruby" },
    { path: `${URL}IMG_4733.JPG`, text: "Derpy Ruby" },
    { path: `${URL}IMG_4735.jpg`, text: "Meek Ruby" },
    { path: `${URL}IMG_4672.jpg`, text: "Savage Ruby" },
    { path: `${URL}IMG_4674.jpg`, text: "Ruby not in her bed" },
    { path: `${URL}new-lawn-ruby.jpg`, text: "Ruby counting cars" },
    { path: `${URL}ravenous-ruby.jpg`, text: "Ravenous Ruby" },
    { path: `${URL}ruby-dick.jpg`, text: "Ruby Dick" },
    {
        path: `${URL}64115390307__46523B1F-CE3A-4320-A42E-C03092760659.mp4`,
        text: "Ruby being a weirdo"
    },
    {
        path: `${URL}64018655287__99377EF7-DB99-4C6C-A379-3EBFA900952C.mp4`,
        text: "Ruby the destroyer"
    },
    {
        path: `${URL}64064709330__A65A77D1-B674-46C4-BF43-909C90402D98.mp4`,
        text: "Ruby want a cracker"
    },
    { path: `${URL}cuddle-bug-ruby.jpg`, text: "Cuddle Bug Ruby" },
    { path: `${URL}coffee-shop-ruby-2.jpg`, text: "Coffee Shop Ruby 2" },
    { path: `${URL}ruby-at-the-farm.jpg`, text: "Ruby at The Farm" },
    { path: `${URL}ruby-sixth-bday.jpg`, text: "Rubys 6th birthday!" },
    { path: `${URL}snooping-ruby.jpg`, text: "Snooping Ruby" },
    { path: `${URL}ruby-and-summit.jpg`, text: "Ruby and Summit" },
    { path: `${URL}IMG_4788.mp4`, text: "Food motivated Ruby" },

    { path: `${URL}IMG_4944.jpg`, text: "Ruby and Kona" },
    { path: `${URL}IMG_4939.jpg`, text: "Ruby chillin with the homies" },
    { path: `${URL}IMG_4936.jpg`, text: "Cradled Ruby" },
    { path: `${URL}IMG_4869.JPG`, text: "Ruby with Saki" },
    { path: `${URL}IMG_4854.jpg`, text: "Soaked Ruby" },
    { path: `${URL}IMG_4853.jpg`, text: "Ruby watching Momma play Sims" },
    { path: `${URL}IMG_4850.jpg`, text: "Ruby hates greens" },
    { path: `${URL}IMG_4845.jpg`, text: "Passenger Ruby" },
    {
        path: `${URL}64504697977__7CF4414E-6FF6-496A-B7C4-9AC97F0F345E.jpg`,
        text: "Broken neck Ruby"
    },
    {
        path: `${URL}64364263628__99756861-1EDF-4ED1-87FF-1EC7004EC230.jpg`,
        text: "Glorious Ruby"
    },

    { path: `${URL}IMG_5014.jpg`, text: "Surprisingly Happy Ruby" },
    {
        path: `${URL}IMG_5056.jpg`,
        text: "Ready Ruby"
    },
    {
        path: `${URL}IMG_5090.jpg`,
        text: "Ruby amongst her toys"
    },
    {
        path: `${URL}64677151515__783B9C67-6DB4-4B55-B151-D95A3EE1361A.MOV`,
        text: "Scavenger Ruby"
    },
    {
        path: `${URL}IMG_5075.MOV`,
        text: "Ruby shaking a fish"
    }
];

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
      <img src="${path}" id="modalImage" class="card-img-top" alt="ruby" />
  `;
    }
    modalBody.innerHTML = modalContent;
    imageModalLabel.innerHTML = text;
};

cardMaker();
