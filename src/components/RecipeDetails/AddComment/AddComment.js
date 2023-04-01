import styles from './AddComment.module.css';

import { useForm } from '../../../hooks/useForm';

export const AddComment = () => {

    const { formValues, onChangeHandler, onSubmit, changeFormValues } = useForm({
        comment: ''
    });

    return (
        <div className={styles["addComments"]}>
            <form action="post" onSubmit={onSubmit}>
                <textarea name="comment" id="comment-text-area" cols="30" rows="10" placeholder="Add Comment..." value={formValues.comment} onChange={onChangeHandler}></textarea>
                <button>Post</button>
            </form>
        </div>
    )
}