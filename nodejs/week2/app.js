import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("This is a search engine");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.get('/search', (req, res) => {
    const query = req.query.q;
    const documents = require('./documents.json');

    if (!query) {
        return res.json(documents);
    }

    const filteredDocuments = documents.filter(doc => {
        return Object.values(doc).some(value => 
            typeof value === 'string' && value.toLowerCase().includes(query.toLocaleLowerCase())
        );
    });

    res.json(filteredDocuments);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.get('/documents/:id', (req, res) => {
    const documents = require('./documents.json');
    const document = documents.find(doc => doc.id === parseInt(req.params.id));

    if (!document) {
        return res.status(404).json({ error: 'Document not found'});
    }

    res.json(document);
});


app.post('/search', (req, res) => {
    const query = req.query.q;
    const fields = req.body.fields;
    const documents = require('./documents.json');

    if (query && fields) {
        return res.status(400).json({ error: "Cannot provide both 'q' and 'fields'"});
    }

    let filteredDocuments = documents;
if (query) {
    filteredDocuments = documents.filter(doc => {
        return Object.values(doc).some(value => 
            typeof value === 'string' && value.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        );
    });
}

if (fields) {
    filteredDocuments = documents.filter(doc => {
        return Object.keys(fields).every(key => doc[key] && doc[key] == fields[key]);
    });
}

res.json(filteredDocuments);
});