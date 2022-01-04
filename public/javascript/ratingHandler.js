async function ratingHandler(event) {
    event.preventDefault();
    var c1 = document.getElementById("c1");
    var c2 = document.getElementById("c2");
    var c3 = document.getElementById("c3")
    var c4 = document.getElementById("c4");
    var c5 = document.getElementById("c5");

    const rating_comment = document.querySelector('textarea[name="rating-body"]').value.trim();
    const rating_score = document.querySelector('input[type="checkbox"').value;
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
                user_id,
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