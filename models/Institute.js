import mongoose from 'mongoose'

const instituteSchema = mongoose.Schema({
    institutename: String,
    institutelocation: String,
});

const Institute = mongoose.model('Institute', instituteSchema);

export default Institute;