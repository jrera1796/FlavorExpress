async function newFormHandler(event) {
    event.preventDefault();

    const ingredient = document.querySelector('textarea[name="post-ingredients"]').value.trim();
    const direction = document.querySelector('textarea[name="post-direction"]').value.trim();
    const photo_url = document.querySelector('input[name="post-url"]').value;

    const response = await fetch(`/api/recipes`, {
        method: 'POST',
        body: JSON.stringify({ ingredient, direction, photo_url }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-recipe-form').addEventListener('submit', newFormHandler);