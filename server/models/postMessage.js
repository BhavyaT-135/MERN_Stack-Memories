import mongoose from 'mongoose';

//A mongoose schema is a blueprint for the data that will be stored in the database.
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }
});

//Converting postSchema to a model
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;