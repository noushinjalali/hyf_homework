import express from "express";
import fs from "fs";

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());

const loadDocuments = () => {
  const data = fs.readFileSync("documents.json");
  return JSON.parse(data);
};

app.get("/search", (req, res) => {
  const query = req.query.q;
  const documents = loadDocuments();

  if (!query) {
    return res.json(documents);
  }

  const filteredDocuments = documents.filter((doc) =>
    Object.values(doc).some((value) =>
      value.toString().toLowerCase().includes(query.toLowerCase())
    )
  );

  res.json(filteredDocuments);
});

app.get("/documents/:id", (req, res) => {
  const documentId = parseInt(req.params.id, 10);
  const documents = loadDocuments();
  const document = documents.find((doc) => doc.id === documentId);

  if (!document) {
    return res.status(404).send("Document not found");
  }

  res.json(document);
});

app.post("/search", (req, res) => {
  const query = req.query.q;
  const fields = req.body.fields;
  const documents = loadDocuments();

  if (query && fields) {
    return res
      .status(400)
      .json({ error: "Both query parameter and fields can't be provided" });
  }

  let filteredDocuments = documents;

  if (query) {
    filteredDocuments = documents.filter((doc) =>
      Object.values(doc).some((value) =>
        value.toString().toLowerCase().includes(query.toLowerCase())
      )
    );
  } else if (fields) {
    filteredDocuments = documents.filter((doc) =>
      Object.keys(fields).every(
        (key) => doc[key] && doc[key].toString() === fields[key].toString()
      )
    );
  }

  res.json(filteredDocuments);
});

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
