const postId = document.querySelector('input[name="post-id"]').value;

console.log('testing');
console.log(postId);

const commentFormHandler = async (event) => {
    event.preventDefault();

    const commentContent = document.querySelector('textarea[name="comment-body"]').value;
    console.log(commentContent);

    if (commentContent) {
        const respone = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                postId,
                commentContent
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (respone.ok) {
            document.location.reload();
        } else {
            alert(respone.statusText);
        }
    }
}

document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentFormHandler);