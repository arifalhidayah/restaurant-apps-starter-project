export default function createArticle(name, pictureId, categories, city, description) {
  // Buat string HTML untuk representasi artikel
  const articleHTML = `
      <article class="post-item">
          <img src="${pictureId}" alt="${name}" class="post-item_thumbnail">
          <div class="post-item_content">
              <p>
              <a href="#" class="anchor post-item_categories">${categories}</a>
              dari Kota
              <a href="#" class="anchor post-item_city">${city}</a>
              </p>
              <h1 class="post-item_title"><a href="#">${name}</a></h1>
              <p class="post-item_description">${description}</p>
          </div>
      </article>
  `;

  const articleElement = document.createElement('article');
  articleElement.innerHTML = articleHTML;

  return articleElement;
}