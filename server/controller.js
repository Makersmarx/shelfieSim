module.exports = {
    read: (req, res, next) => {
      const dbInstance = req.app.get('db');

      dbInstance.get_inventory().then((products) => res.status(200).send(products)).catch((err) => {
        res.status(500).send({
          errorMessage: 'Its Not Right!'
        });
        console.log(err);
      });
    }