module.exports = {
  create : (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {name, price, image_url} = req.body;
    const { params } = req;

    dbInstance.create_inventory([params.id, name, price, image_url])
    .then(inventory => res.status(200).send(inventory) )
    .catch(error => res.status(500).send(error) );     
  },

  readAll: (req, res, next) => {
    const dbInstance = req.app.get('db');
    console.log('Request for inventory received');
    dbInstance.read_all()
    .then(inventory => res.status(200).send( inventory ) )
    .catch(error => res.status(500).send(error) );
  },

  readOne: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { params } = req;

    dbInstance.read_one([ params.id ])
    .then(bin => res.status(200).send(bin))
    .catch(error => res.status(500).send(error) );
  },

  update: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { params } = req;
    const { name, price } = req.body;

    dbInstance.update_inventory([params.id, name, price])
    .then(inventory => response.status(200).send(inventory))
    .catch(error => res.status(500).send(error) );
  },

  delete: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { params } = req;

    dbInstance.delete_inventory([params.id])
    .then(bin => res.status(200).send(bin))
    .catch(error => res.status(500).send(error) );
  }
};