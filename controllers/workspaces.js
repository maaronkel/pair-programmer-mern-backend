import Workspaces from '../models/Workspaces.js';

export const getWorkspaces = async (req, res) => {
    try {
       const workspace = await Workspaces.find();
       res.status(200).json(workspace);
    } catch (error) {
       res.status(404).json({ message: error.message });
    }
}

export const createWorkspaces = async (req, res) => {
    const workspace = req.body;
    const newWorkspace = new Workspaces(workspace);
    try {
       await newWorkspace.save() 
       res.status(201).json(newWorkspace);
    } catch (error) {
       res.status(409).json({ message: error.message });
    }
}