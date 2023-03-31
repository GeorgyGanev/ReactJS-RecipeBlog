import styles from './AddComment.module.css';

export const AddComment = () => {

    return (
        <div className={styles["addComments"]}>
            <form action="post">
                <textarea name="comment-text" id="comment-text-area" cols="30" rows="10" placeholder="Add Comment..."></textarea>
                <button>Post</button>
            </form>
        </div>
    )
}