const mongoose = require('mongoose');

const fitnessSchema = new mongoose.Schema({
    activityName:
     { type: String,
        required: true,
         trim: true
         },
    duration: 
    { type: Number,
         required: true
         }, // in minutes
    caloriesBurned:
     { type: Number,
         required: true
         },
    date:
     { type: Date,
         default: Date.now
         },
    userId:
     { type: mongoose.Schema.Types.ObjectId,
         ref: 'User', 
         required: true 
        } // space removed
}, { timestamps: true });

module.exports = mongoose.model('Fitness', fitnessSchema);