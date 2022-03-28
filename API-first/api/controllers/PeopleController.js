
const Person = require ('../controllers/Model');


 const PeopleController = {

    add: async(req, res) => {
        try{
            const {id,name,born,nationality,branch} = req.body;
            const newPerson = new Person(req.body);
            const savePerson = await newPerson.save();
            res.status(200).json(savePerson);
            

        }catch (err){
            res.status(500).json(err);
        } 
    },
     //GET ALL people
  getAll: async (req, res) => {
    try {
      const people = await Person.find();
      res.status(200).json(people);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET person
  get: async (req, res) => {
    try {
      const person = await Person.findById(req.params.id);
      res.status(200).json(person);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE 
  update: async (req, res) => {
    try {
      const {id,name,born,nationality,branch} = req.body;
      const person = await Person.findById(req.params.id);
      await person.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE 
  delete: async (req, res) => {
    try {
      
      await People.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
   
};

module.exports = PeopleController;