import mongoose from 'mongoose';

const policySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 180
    },
    category: {
      type: String,
      required: true,
      enum: [
        'Scholarships',
        'Skill Development Programs',
        'Internship Schemes',
        'Digital Education Policies',
        'Loan & Financial Aid Schemes'
      ]
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 20,
      maxlength: 1500
    },
    eligibility: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 1000
    },
    benefits: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 1000
    }
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      virtuals: true,
      transform: (_, ret) => {
        ret.id = ret._id.toString();
        delete ret._id;
        return ret;
      }
    }
  }
);

policySchema.index({ category: 1 });
policySchema.index({ title: 'text', description: 'text', eligibility: 'text', benefits: 'text' });

const Policy = mongoose.model('Policy', policySchema);

export default Policy;
