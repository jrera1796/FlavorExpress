async function ratingHandler(event) {
    event.preventDefault();
    
    if (document.getElementById('c1').checked){rating_score = document.getElementById('c1').value}
    if (document.getElementById('c2').checked){rating_score = document.getElementById('c2').value}
    if (document.getElementById('c3').checked){rating_score = document.getElementById('c3').value}
    if (document.getElementById('c4').checked){rating_score = document.getElementById('c4').value}
    if (document.getElementById('c5').checked){rating_score = document.getElementById('c5').value}

    const rating_comment = document.querySelector('textarea[name="rating-body"]').value.trim();
    
    console.log(rating_score)
    const recipe_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (rating_comment) {
        const response = await fetch('/api/ratings', {
            method: 'POST',
            body: JSON.stringify({
                rating_comment,
                rating_score,
                recipe_id

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

document.querySelector('.rating-form').addEventListener('submit', ratingHandler);