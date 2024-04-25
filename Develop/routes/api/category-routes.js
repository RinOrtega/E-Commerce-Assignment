const router = require('express').Router();
const { Category, Product } = require('../../models');

// pulls catagories
router.get('/', async (req, res) => {
  try {
    // locates catagories
    const catData = await Category.findAll({

      include: [{ model: Product}]
    });
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  try {

    const catData = await Category.findByPk(req.params.id, {

      include: [{ model: Product}],
    });
    res.status(200).json(catData);
    } catch (err) {
      res.status(500).json(err);
    }

});


router.post('/', async (req, res) => {
  try {
  const catData = await Category.create(req.body);
  res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.put('/:id', async (req, res) => {
  try {
    const catData = await Category.update(req.body, {

      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(catData);
    } catch (err) {
      res.status(500).json(err);
    }
});


router.delete('/:id', async (req, res) => {
  try {
    const catData = await Category.destroy(req.body, {

      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
