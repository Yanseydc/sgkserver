import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';
import { nextTick } from 'process';

//users interface ts
export interface IUser extends Document {
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    comparePassword: (password: string) => Promise<Boolean>;
}

//mongoose schema
const userSchema: Schema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String, 
        required: true
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

//execute each time a user is saved 
userSchema.pre<IUser>('save', async function(next) {
    const user = this;

    if(!user.isModified('password')) return next(); 

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    next();
});

userSchema.methods.comparePassword = async function(password: string): Promise<Boolean> {
   return await bcrypt.compare(password, this.password);
}

export default model('User', userSchema);