async function deleteRating(event) {
  event.preventDefault();
  const id = document.getElementById('delete-rating').value
  const recipeID = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

  const response = await fetch(`/api/ratings/${id}`, { method: 'DELETE' });

  if (response.ok) {
      document.location.replace(`/recipe/${recipeID}`);
  } else {
      alert(response.statusText);
  }
}

document.getElementById('delete-rating').addEventListener('click', deleteRating);
