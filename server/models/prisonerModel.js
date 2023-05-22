import mongoose from "mongoose";

const PrisonerSchema = new mongoose.Schema({

    fullname:{
        type: String,
        required:false
    },
    nic:{
        type: String,
        required:false
    },
    dateofbirth:{
        type: String,
        required:false
    },
    sex:{
        type: String,
        required:false
    },
    address:{
        type: String,
        required:false
    },
    category:{
        type: String,
        required:false
    },
    dateofincarceration:{
        type: String,
        required:false
    },
    releasedate:{
        type: String,
        required:false
    },
    image:{
        type: String,
        required:false
    }
},
{ timestamps: true }
);

const Prisoner = mongoose.model("Prisoner", PrisonerSchema);
export default Prisoner;
