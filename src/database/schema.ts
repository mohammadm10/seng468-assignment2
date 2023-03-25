import { DateTime } from '@elastic/elasticsearch/lib/api/types';
import { MongoClient, Collection, ObjectId } from 'mongodb';

const uri = 'mongodb://localhost:27017/mydatabase';

interface User {
  id: ObjectId;
  name: string;
  username: string;
  email: string;
  password: string;
  dateOfBirth: DateTime;
  friends: User[];
  posts: Post[];
  comments: Comment[];
  createdAt: DateTime;
  updatedAt: DateTime;
}

interface Post {
  id: ObjectId;
  title: string;
  content: string;
  author: User;
  likes: number;
  comments: Comment[];
  createdAt: DateTime;
  updatedAt: DateTime;
}

interface Comment {
  id: ObjectId;
  author: User;
  post: Post;
  content: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  likes: number;
}

interface Notification {
  id: ObjectId;
  recipient: User;
  type: String;
  postId: String;
  commentId: String;
  CreatedAt: DateTime;
}


const client = new MongoClient(uri, {});

export const db = client.db('mydatabase');

export async function connect(): Promise<void> {
  await client.connect();
}

export const UserCollection: Collection<User> = db.collection('User');
export const PostCollection: Collection<Post> = db.collection('Post');
export const CommentCollection: Collection<Comment> = db.collection('Comment');
export const NotificationCollection: Collection<Notification> = db.collection('Notification');
