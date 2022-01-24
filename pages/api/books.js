const data = [
  {
    title: "Aprendiendo JavaScript",
    ISBN: "9788700179263",
    authors: ["Carlos Azaustre"],
    cover: "blank.png",
  },
  {
    title: "Clean JavaScript",
    ISBN: "979856783319",
    authors: ["Miguel A. Gómez"],
    cover: "blank.png",
  },
  {
    title: "MERN Guía Práctica de Aplicaciones Web",
    ISBN: "9788418551055",
    authors: [
      "Jesús Fontecha",
      "Manuel Ángel Serrano",
      "Iván González",
      "Ramón Hervás",
    ],
    cover: "blank.png",
  },
  {
    title: "Cracking the Coding Interview",
    ISBN: "9780984782857",
    authors: ["Gayle Laakmann McDowell"],
    cover: "blank.png",
  },
  {
    title: "Distributed Systems with Node.js",
    ISBN: "9781492077299",
    authors: ["Thomas Hunter II"],
    cover: "blank.png",
  },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    getAllBooks(req, res);
  }
}

function getAllBooks(req, res) {
  res.status(200).json(data);
}
