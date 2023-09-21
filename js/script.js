const books = [
{
  id: 1,
  image: "https://uploads-ssl.webflow.com/64c3d9ff4782619c91ced507/64c3ec7e205d0486fd45fe34_2020DT_Ebook_Studio_small-262x375.png.webp",
  title: "Design Trends 2020",
  description: "The great thing about graphic design trends is that each year arrives with the opportunity for a reset.",
  author: "uxpin",
  genres: "Design",
  review: 30,
}, {
  id: 2,
  image: "https://uploads-ssl.webflow.com/64c3d9ff4782619c91ced507/64c3f09fab7eee6a4009285e_lead.jpg",
  title: "Lean UX",
  description: "The Lean UX approach to interaction design is tailor-made for today’s web-driven reality. In this insightful book",
  author: "Jeff Gothelf",
  genres: "Design",
  review: 54,
}, {
  id: 3,
  image: "https://uploads-ssl.webflow.com/64c3d9ff4782619c91ced507/64c3dd46df24f95d7b70d11d_2.jpg",
  title: "Start with Why",
  description: "Discover the book that is captivating millions on TikTok and that served as the basis for one of the most popular",
  author: "Simon Sinek",
  genres: "Design",
  review: 50,
}, {
  id: 4,
  image: "https://uploads-ssl.webflow.com/64c3d9ff4782619c91ced507/64c3eb7fd5a961995f34ca72_4.jpg",
  title: "The 5 Building Blocks of Interaction Design",
  description: "Know the elements of interaction design required for successful UX",
  author: "Jerry Cao",
  genres: "Design",
  review: 30,
}, {
  id: 5,
  image: "https://uploads-ssl.webflow.com/64c3d9ff4782619c91ced507/64c3ed717ac3ccd984bae492_13.jpg",
  title: "Don't Make Me Think",
  description: "Don't Make Me Think was first published in 2000, hundreds of thousands of Web designers",
  author: "Adam Jeff",
  genres: "Design",
  review: 40,
}, {
  id: 6,
  image: "https://uploads-ssl.webflow.com/64c3d9ff4782619c91ced507/64c3ec0d9c5473c55ba6d30d_cover.png-p-500.webp",
  title: "DesignOps Pillar: How We Work Together",
  description: "Get actionable insights on structuring, managing, and growing a stellar design team",
  author: "John Calhoun",
  genres: "Design",
  review: 40,
}, {
  id: 7,
  image: "https://uploads-ssl.webflow.com/64c3d9ff4782619c91ced507/64c3eee956a48ea091358faa_header-1.png.webp",
  title: "DesignOps 101",
  description: "Learn all about DesignOps, how it affects the organization",
  author: "Simon Bref",
  genres: "Design",
  review: 25,
}, {
  id: 8,
  image: "https://uploads-ssl.webflow.com/64c3d9ff4782619c91ced507/64c3eee956a48ea091358faa_header-1.png.webp",
  title: "The Design Sprint",
  description: "How to Solve Big Problems and Test New Ideas in Just Five Days",
  author: "Jake Knapp",
  genres: "Design",
  review: 89,
}
]
const svg = () => {
  return `
  <div class="div-block-3">
    <div class="icon-height w-embed">
      <svg width="100%" style="" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.8794 4.3467C9.05518 3.80262 10.4838 4.48336 11.3536 5.35321C11.4484 5.44795 11.536 5.54437 11.6169 5.64094C11.7119 5.75435 11.8522 5.81987 12.0002 5.81987C12.1481 5.81987 12.2885 5.75435 12.3835 5.64093C12.4644 5.54436 12.552 5.44795 12.6467 5.35321C13.5166 4.48334 14.9453 3.80263 17.1215 4.34669C19.2952 4.89012 20.9357 6.52454 21.4832 8.57795C22.0343 10.6451 21.4644 13.0743 19.3535 15.1853C17.0178 17.521 15.0241 19.5157 13.7693 20.7712C12.7931 21.7481 11.2124 21.7485 10.2357 20.772L4.64816 15.1853C2.53632 13.0738 1.96643 10.6446 2.51781 8.57748C3.0655 6.5242 4.70627 4.89012 6.8794 4.3467Z" fill="#C7C7C7"></path>
      </svg>
    </div>
  </div>
  `
}
const start = () => {
  return `
  <div class="html-embed w-embed"><svg width="100%" style="" viewBox="0 0 109 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7648 3.17098C11.4929 2.33412 10.309 2.33412 10.0371 3.17098L8.65768 7.41631C8.53608 7.79057 8.18732 8.04395 7.7938 8.04395H3.33C2.45007 8.04395 2.08422 9.16994 2.79609 9.68714L6.40739 12.3109C6.72575 12.5422 6.85896 12.9522 6.73736 13.3265L5.35797 17.5718C5.08605 18.4086 6.04388 19.1045 6.75575 18.5873L10.367 15.9636C10.6854 15.7323 11.1165 15.7323 11.4349 15.9636L15.0461 18.5873C15.758 19.1045 16.7158 18.4086 16.4439 17.5718L15.0645 13.3265C14.9429 12.9522 15.0762 12.5422 15.3945 12.3109L19.0058 9.68714C19.7177 9.16994 19.3518 8.04395 18.4719 8.04395H14.0081C13.6146 8.04395 13.2658 7.79057 13.1442 7.41631L11.7648 3.17098Z" fill="#FF9900"></path>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M33.5649 3.17098C33.293 2.33412 32.109 2.33412 31.8371 3.17098L30.4577 7.41631C30.3361 7.79057 29.9874 8.04395 29.5939 8.04395H25.13C24.2501 8.04395 23.8843 9.16994 24.5961 9.68714L28.2074 12.3109C28.5258 12.5422 28.659 12.9522 28.5374 13.3265L27.158 17.5718C26.8861 18.4086 27.8439 19.1045 28.5558 18.5873L32.1671 15.9636C32.4855 15.7323 32.9165 15.7323 33.2349 15.9636L36.8462 18.5873C37.5581 19.1045 38.5159 18.4086 38.244 17.5718L36.8646 13.3265C36.743 12.9522 36.8762 12.5422 37.1946 12.3109L40.8059 9.68714C41.5177 9.16994 41.1519 8.04395 40.2719 8.04395H35.8081C35.4146 8.04395 35.0659 7.79057 34.9443 7.41631L33.5649 3.17098Z" fill="#FF9900"></path>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M55.3648 3.17098C55.0929 2.33412 53.909 2.33412 53.637 3.17098L52.2577 7.41631C52.1361 7.79057 51.7873 8.04395 51.3938 8.04395H46.93C46.05 8.04395 45.6842 9.16994 46.3961 9.68714L50.0074 12.3109C50.3257 12.5422 50.4589 12.9522 50.3373 13.3265L48.9579 17.5718C48.686 18.4086 49.6439 19.1045 50.3557 18.5873L53.967 15.9636C54.2854 15.7323 54.7165 15.7323 55.0348 15.9636L58.6461 18.5873C59.358 19.1045 60.3158 18.4086 60.0439 17.5718L58.6645 13.3265C58.5429 12.9522 58.6761 12.5422 58.9945 12.3109L62.6058 9.68714C63.3177 9.16994 62.9518 8.04395 62.0719 8.04395H57.6081C57.2146 8.04395 56.8658 7.79057 56.7442 7.41631L55.3648 3.17098Z" fill="#FF9900"></path>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M77.1648 3.17098C76.8929 2.33412 75.709 2.33412 75.4371 3.17098L74.0577 7.41631C73.9361 7.79057 73.5873 8.04395 73.1938 8.04395H68.73C67.8501 8.04395 67.4842 9.16994 68.1961 9.68714L71.8074 12.3109C72.1258 12.5422 72.259 12.9522 72.1374 13.3265L70.758 17.5718C70.4861 18.4086 71.4439 19.1045 72.1558 18.5873L75.7671 15.9636C76.0854 15.7323 76.5165 15.7323 76.8349 15.9636L80.4462 18.5873C81.158 19.1045 82.1159 18.4086 81.844 17.5718L80.4646 13.3265C80.343 12.9522 80.4762 12.5422 80.7945 12.3109L84.4058 9.68714C85.1177 9.16994 84.7518 8.04395 83.8719 8.04395H79.4081C79.0146 8.04395 78.6658 7.79057 78.5442 7.41631L77.1648 3.17098Z" fill="#FF9900"></path>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M98.9648 3.17098C98.6929 2.33412 97.5089 2.33412 97.237 3.17098L95.8576 7.41631C95.736 7.79057 95.3873 8.04395 94.9938 8.04395H90.5299C89.65 8.04395 89.2842 9.16994 89.996 9.68714L93.6073 12.3109C93.9257 12.5422 94.0589 12.9522 93.9373 13.3265L92.5579 17.5718C92.286 18.4086 93.2438 19.1045 93.9557 18.5873L97.567 15.9636C97.8854 15.7323 98.3164 15.7323 98.6348 15.9636L102.246 18.5873C102.958 19.1045 103.916 18.4086 103.644 17.5718L102.264 13.3265C102.143 12.9522 102.276 12.5422 102.594 12.3109L106.206 9.68714C106.918 9.16994 106.552 8.04395 105.672 8.04395H101.208C100.815 8.04395 100.466 7.79057 100.344 7.41631L98.9648 3.17098Z" fill="#FF9900"></path>
  </svg></div>
  `
}
const ul = document.getElementById("books")
const createCardBook = (book) => {
  const {id, image, title, description, author, genres, review} = book
  return `
    <li class="card" id="card_${id}">
      <header class="book-header">
        <h3>${title}</h3>
        <p>${description}</p>
      </header>
      <section class="book-body">
        <img src="${image}">
        <ul>
            <div>
            <li class="author_li"><strong>Author:</strong>
              <span>
                <img src="https://uploads-ssl.webflow.com/64c3d9ff4782619c91ced507/64c3f0cb7b0b9bcf55f7edb9_s7rto9fq7f1kj3ifkahnq3qtps._SY1080_CR0%2C0%2C1080%2C1080_-p-500.jpg">
                ${author}
              </span>
            </li>
            <li class="chip_li"><strong>Genres:</strong> <span class="chip">${genres}</span></li>
            <li class="review_li"><strong>Review:</strong> <span class="review">${start()} +(${review})</span></li>
            </div>
            <footer class="book-footer">
              <a href="#" class="button">Read Book</a>
              ${svg()}
            </footer>
          </ul>
      </section>
    </li>
  `;
}
books.map(book => {
  let result = createCardBook(book)
  ul.innerHTML += (result)
})
document.querySelector('.page-more').addEventListener("click", (e) => {
  e.preventDefault()
  document.querySelectorAll ('#books li').forEach(card => {
    card.style.opacity = 1
    card.style.height = "auto"
    card.style.visibility = "visible"
  })
  e.currentTarget.closest("div").style.display = "none"
})
document.getElementById("menu_icon").addEventListener("click", () => {
  document.querySelector(".responsive_menu").classList.toggle("show")
})