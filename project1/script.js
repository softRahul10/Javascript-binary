async function fetchNew(query="money") {
      try {
            showLoader();
            const img = document.querySelector('.content-img img');
            const res = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=Jr8qe04Ue9ufprIg5c6H2qP0DphFz0rS&s=${query}`);
            const data = await res.json();
            hideLoader();
            img.src = data.data.images.original.url;
      } catch (err)  {
            alert('Unable to fetch');
      }
}
function showLoader() {
      const loader = document.querySelector('.content-loader');
      loader.style.display = 'block';
}
function hideLoader() {
      const loader = document.querySelector('.content-loader');
      loader.style.display = 'none';
}

(function() {
      const inputTag = document.querySelector('input');
      const form = document.querySelector('form');
      form.addEventListener('submit',(e) => {
            e.preventDefault();
            let searchQuery = inputTag.value;
            if(searchQuery.trim().length > 0)  {
                  fetchNew(searchQuery);
            }else {
                  fetchNew();
            }
      });
})();
