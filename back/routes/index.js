import express from 'express';
import connection from './conf';

const router = express.Router();

router.get('/api', (req, res) => {
  connection.query('SELECT * FROM movies', (err, results) => {
    if (err) {
      results.info('Erreur lors de la récupération des films');
      res.status(500).send('Erreur ');
    } else {
      res.json(results);
    }
  });
});

router.get('/api/random', (req, res) => {
  connection.query('SELECT * FROM movies ORDER BY RAND() LIMIT 3', (err, result) => {
    if (err) {
      res.status(500).json({ flash: err.message });
    } else {
      res.json(result);
    }
  });
});

router.post('/api/movie', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO movies SET ?', formData, (err) => {
    if (err) {
      res.status(500).json({ flash: err.message });
    } else {
      res.status(200).json({ flash: 'Le film a été créé'});
    }
  });
});

router.delete('/api/movie/:id', (req, res) => {
  const idMovie = req.params.id;
  connection.query('DELETE from movies WHERE id=?', idMovie, (err) => {
    if (err) {
      res.status(500).send('Erreur lors de la suppression');
    } else {
      res.sendStatus(200);
    }
  });
});

export default router;
