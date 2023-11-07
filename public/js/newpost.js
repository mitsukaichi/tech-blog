const postHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('.new-blog-title').value;
    const content = document.querySelector('.new-blog-content').value;
    if (title && content) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
        alert('Your blog was successfully posted!');
      } else {
        alert('Failed to post a new blog. Try again');
      }
    }
  };
  
  document.getElementById('submit-new-post').addEventListener('click', postHandler);