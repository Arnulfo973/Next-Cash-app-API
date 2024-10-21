import mongoose, { Schema, Document } from 'mongoose';

const depositSchema: Schema = new Schema({
    id: {type: String, default: "none"},
    amount: { type: Number, default: 0 },
    paymentoption: { type: String, default: "none" },
    paymenttype: {type: String, default: "none"},
    paymentstatus: { type: String, default: "processing" },
    date: { type: Date, default: Date.now },
}, { _id: false });

const withdrawalSchema: Schema = new Schema({
    id: {type:String, default:"none"},
    amount: { type: Number, default: 0},
    paymentoption: { type: String, default: "none" },
    paymenttype: {type: String, default: "none"},
    tip: {type: String, default: "none"},
    paymentstatus: {type: String, default: "processing"},
    paymentgateway: {type: String, default:"none"},
    date: { type: Date, default: Date.now },
}, { _id: false });

export interface IUser extends Document {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    role: string;
    ip: string;
    token: string;
    phonenumber: string;
    regitype: string;
    codenumber: string;
    status: string;
    loginid: string;
    passwordcode: string;
    createdAt: Date;
    cashtag:string;
    deposit: Array<typeof depositSchema>;
    withdrawal: Array<typeof withdrawalSchema>;
}

const userSchema: Schema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "user" },
    ip: { type: String },
    token: { type: String },
    cashtag: {type:String, default:"none"},
    phonenumber: { type: String, default: "none" },
    regitype: { type: String, default: "none" },
    codenumber: { type: String, default: "none" },
    status: { type: String, default: "none" },
    loginid: { type: String, default: "none" },
    passwordcode: { type: String, default: "none" },
    createdAt: { type: Date, default: Date.now },
    deposit: [depositSchema],
    withdrawal: [withdrawalSchema]   
});

const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;