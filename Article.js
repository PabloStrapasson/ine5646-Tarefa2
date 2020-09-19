class Article {

    constructor(containerElement){
        this.containerElement = containerElement;
        this.createPost = this.createPost.bind(this);
        this.post = document.createElement("ARTICLE");
        this.post.className = "article"
        this.title = document.createElement("H1");
        this.genre = document.createElement("H2");
        this.sinopse = document.createElement("P");
        this.image = document.createElement("IMG");
    }

    createPost(title, genre, sinopse, image){
        this.title.textContent = title;
        this.genre.textContent = genre;
        this.sinopse.textContent = sinopse;
        this.image.src = image;

        this.post.appendChild(this.title);
        this.post.appendChild(this.genre);
        this.post.appendChild(this.sinopse);
        this.post.appendChild(this.image);

        this.containerElement.appendChild(this.post);
    }
}