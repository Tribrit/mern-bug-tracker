import Bug from '../models/Bug.js';

export const createBug = async (req, res) => {
  const { title, description } = req.body;
  const bug = await Bug.create({ title, description });
  res.status(201).json(bug);
};

export const getBugs = async (req, res) => {
  const bugs = await Bug.find();
  res.status(200).json(bugs);
};

export const updateBug = async (req, res) => {
  const { id } = req.params;
  const bug = await Bug.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json(bug);
};

export const deleteBug = async (req, res) => {
  const { id } = req.params;
  await Bug.findByIdAndDelete(id);
  res.status(204).send();
};
