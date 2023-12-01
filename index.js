const paragraph =
  "This island is far beyond the images you see online it is absolutely stunningly beautiful. From arriving in Malle you are ushered into the private Luxe lounge to await your seaplane. Refreshments and relaxing facilities are at your disposal, cannot comment further as fortunately our seaplane was ready for us to board shortly after arriving. The seaplane is an exhilarating experience taking approximately 30 mins, something not to be missed. On arriving at Luxe you are greeted by a number of staff and whisked to reception to check in. We had booked a beach villa which was the second cheapest option, this was not just a financial decision but we wanted to be directly on the beach. Well, we were not disappointed as it was perfect. Large sleeping and lounging area leading straight out to a veranda and then onto a huge stretch of beach before reaching clear turquoise sea";

const response = [
  {
    sentence: "This island is far beyond the images you see online",
    topic: "the image",
    sentiment: "POSITIVE",
    score: 0.9040651917457581,
    span: {
      start: 0,
      end: 52,
    },
  },
  {
    sentence:
      "From arriving in Malle you are ushered into the private Luxe lounge to await your seaplane.",
    topic: "seaplane",
    sentiment: "POSITIVE",
    score: 0.9949505925178528,
    span: {
      start: 92,
      end: 183,
    },
  },
  {
    sentence:
      "relaxing facilities are at your disposal, cannot comment further as fortunately our seaplane was ready for us to board shortly after arriving.",
    topic: "seaplane,disposal",
    sentiment: "NEGATIVE",
    score: 0.9940604567527771,
    span: {
      start: 202,
      end: 342,
    },
  },
];
const para = document.getElementById("container");
const fetchData = (paragraph, response) => {
  let sortedArray = [];

  for (const data of response) {
    const { start, end } = data.span;

    sortedArray.push([start, end, data.sentence]);
  }

  para.innerHTML = "";
  let pos = 0;
  sortedArray.sort((a, b) => a[0] - b[0]);
  sortedArray.map((data) => {
    const [startIdx, endIdx, sentence] = data;
    para.innerHTML += paragraph.substring(pos, startIdx - 2);
    para.innerHTML += `<span class="highlight">${sentence}</span>`;
    pos = endIdx;
  });
  para.innerHTML += paragraph.substring(pos);
};
fetchData(paragraph, response);
