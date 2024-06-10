const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;


// define the Schema (the structure of the article)
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    role: { type: String, enum: ['user', 'admin'], default: 'user' }
});

// إضافة دالة للتحقق من كلمة المرور
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

// تشفير كلمة المرور قبل حفظ المستخدم
userSchema.pre('save', function(next) {
    if (this.isModified('password') || this.isNew) {
        this.password = bcrypt.hashSync(this.password, 10);
    }
    next();
});


// Create a model based on that schema
const User = mongoose.model('User', userSchema);
// export the model
module.exports = User;
