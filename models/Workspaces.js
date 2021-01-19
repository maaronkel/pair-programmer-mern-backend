import mongoose from 'mongoose'

const workspaceSchema = mongoose.Schema({
    name: String,
    type: String,
    description: String,
    outcomes: [String],
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users'
        },
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

const Workspaces = mongoose.model('Workspaces', workspaceSchema);

export default Workspaces;