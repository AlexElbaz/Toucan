import axios from 'axios';

const url = 'api/posts/';

class PostService {
    // Get Posts
    static async getPosts() {
        const res = await axios.get(url);
        const data = res.data;

        return data.map(post => ({
            ...post,
            createdAt: new Date(post.createdAt)
        }))
    }

    // Get Post
    static async getPost(id) {
        const res = await axios.get(`${url}${id}`);
        const data = res.data;

        let course = data.map(post => ({
            ...post,
            createdAt: new Date(post.createdAt)
        }));

        return course[0];
    }

    // Create Post for testing
    static insertPost(title, body, type, courseID, dueDate, dueTime, modalID) {
        return axios.post(url, {
            title,
            body,
            type,
            courseID,
            dueDate,
            dueTime,
            modalID
        });
    }

    // Delete Post
    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }

    // Delete all posts belonging to a course.
    static deleteCoursePosts(courseID) {
        return axios.delete(`${url}course+${courseID}`);
    }
}

export default PostService;