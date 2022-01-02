async function newFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('input[name="new-title"]').value;
    const ingredients = document.querySelector('textarea[name="new-ingredients"]').value.trim();
    const direction = document.querySelector('textarea[name="new-direction"]').value.trim();
    const photo_url = document.querySelector('input[name="new-photo"]').value;

    const response = await fetch(`/api/recipes`, {
        method: 'POST',
        body: JSON.stringify({ title, ingredients, direction, photo_url }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-recipe-form').addEventListener('submit', newFormHandler);