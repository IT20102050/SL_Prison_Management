
import prisoner from "../models/prisonerModel.js";


//get all details from allPrisoners

export const getallPrisoners = async (req, res) => {
  try {
    const prisoner = await prisoner.find();
    const prisonerModel = [...prisoner];
    res.status(200).json(prisonerModel);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/***************************************************************************************************** */

//get all details from Prisoners

export const getPrisoners = async (req, res) => {
  try {
    const prisoners = await prisoner.find();
    res.status(200).json(prisoners);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// get prisoner by id

export const getPrisonersById = async (req, res) => {
  try {
    const prisoners = await prisoner.findById(req.params.id);
    res.json(prisoners);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// add Prisoner details

// export const createPrisoner = async (req, res) => {
//   const {fullname,nic,dateofbirth,sex,address,category,dateofincarceration,releasedate} = req.body

//   let emptyFields = []

  
//   // add doc to db
//   try{
//       const workout = await prisoner.create({fullname,nic,dateofbirth,sex,address,category,dateofincarceration,releasedate})
//       res.status(200).json(workout)

//   } catch (error){
//       res.status(400).json({error:error.message})

//   }
// }

export const savePrisoners = async (req, res) => {
  const prisoners = new prisoner(req.body);
  try {
    const insertedprisoners = await prisoners.save();
    res.status(201).json(insertedprisoners);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//update Prisoner details

export const updatePrisoners = async (req, res) => {
  try {
    const updatedprisoners = await prisoner.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedprisoners);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//delete Prisoner details

export const deletePrisoners = async (req, res) => {
  try {
    const deletedprisoners = await prisoner.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedprisoners);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

