export class Card{
  constructor(cardTemplate, api) {
    this.api = api;
    this.cardTemplate = cardTemplate;
    this.data = data;
  }

  create() {
    this.card = this.cardTemplate.cloneNode(true);
    const image = this.data.url === null ? imageUrl : this.data.url;
    console.log('рисуем карточку')
    this.card.querySelector('.card__link').setAttribute('href', image);
    this.card.querySelector('.card__title').textContent = this.data.title;
    this.card.querySelector('.card__image').setAttribute('src', this.data.urlToImage);
    // this.card.querySelector('.article__date').textContent = editDataFormat(this.data.publishedAt.slice(0, 10));
    this.card.querySelector('.card__text').textContent = this.data.description;
    // this.card.querySelector('.article__source').textContent = this.data.source.name;
    this.card.querySelector('.card__icon').addEventListener('click', this._saveCourse);
    this._setHoverListeners();
    return this.card;
  }

  _saveCourse() {
    console.log(this.api)
    this.api.getUser()
      .then((res) => {
        if (res != undefined) {
          
          this.card.querySelector('#icon-unhover').classList.add('hidden');
          this.card.querySelector('#icon-mark').classList.remove('hidden');
          this._removeListeners();
          this.card.querySelector('.article__icon').addEventListener('click', this._cancelSaveArticle);
          const articleData = {
            keyword: searchWord.value,
            title: this.data.title,
            text: this.data.description,
            
            link: this.data.url,
            image: this.data.urlToImage
          };
          this.api.postArticle(articleData)
            .then((res) => {
              this.articleID = res.data._id;
            })
            .catch(err => console.log(err));
        }
      })
      .catch(err => console.log(err));
  }
}