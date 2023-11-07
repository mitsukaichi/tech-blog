// Update post

const updatePostHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('.new-blog-title').value;
    const content = document.querySelector('.new-blog-content').value;
    const id = document.location.pathname.split("/")[2];
    if (title && content) {
      const response = await fetch('/api/posts', {
        method: 'PUT',
        body: JSON.stringify({ title, content, id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
        alert('Your blog was successfully updated!');
      } else {
        alert('Failed to update your blog. Try again');
      }
    }
  };

  // Delete post
  const deletePostHandler = async (event) => {
    event.preventDefault();
    const id = document.location.pathname.split("/")[2];
    const response = await fetch(`/api/posts`, {
        method: 'DELETE',
        body: JSON.stringify({ id }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        alert(`The post is deleted!`);
        document.location.replace('/dashboard');
    } else {
        alert(`Post couldn't be deleted, please try again`)
    }
};

  
document.getElementById('update-post').addEventListener('click', updatePostHandler);
document.getElementById('delete-post').addEventListener('click', deletePostHandler);
