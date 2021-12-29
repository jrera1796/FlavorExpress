async function ratingHandler(event) {
  event.preventDefault();

  const rating_comment = document.querySelector('textarea[name="comment-body"]').value.trim();
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (rating_comment) {
    const response = await fetch('/api/ratings', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        rating_comment,
        rating_score
    }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.rating-form').addEventListener('submit-rating', ratingHandler);
