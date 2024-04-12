export default function createArticle(title, pictureId, categories, city, description) {
    const article = document.createElement('article');
    article.classList.add('post-item');
  
    const img = document.createElement('img');
    img.src = pictureId;
    img.alt = title;
    img.classList.add('post-item_thumbnail');
    article.appendChild(img);
  
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('post-item_content');
  
    const categoryLink = document.createElement('a');
    categoryLink.href = '#';
    categoryLink.classList.add('anchor', 'post-item_categories');
    categoryLink.textContent = categories;
    contentDiv.appendChild(categoryLink);
  
    const cityLink = document.createElement('a');
    cityLink.href = '#';
    cityLink.classList.add('anchor', 'post-item_city');
    cityLink.textContent = city;
    contentDiv.appendChild(cityLink);
  
    const titleLink = document.createElement('h1');
    const titleAnchor = document.createElement('a');
    titleAnchor.href = '#';
    titleAnchor.textContent = title;
    titleLink.appendChild(titleAnchor);
    contentDiv.appendChild(titleLink);
  
    const descriptionPara = document.createElement('p');
    descriptionPara.classList.add('post-item_description');
    descriptionPara.textContent = description;
    contentDiv.appendChild(descriptionPara);
  
    article.appendChild(contentDiv);
  
    return article;
  }