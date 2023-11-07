const commentHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('.comment-input').value;
    const post_id = document.location.pathname.split("/")[2]
    if (comment) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment, post_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        location.reload();
      } else {
        alert('Failed to leave comment. Try again');
      }
    }
  };
  
  document.getElementById('comment-submit').addEventListener('click', commentHandler);