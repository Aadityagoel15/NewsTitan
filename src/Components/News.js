import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Lucia Mutikani",
      "title": "US job openings at more than two-year low but still elevated - Reuters",
      "description": "U.S. job openings fell to the lowest level in more than two years in June but remained at levels consistent with tight labor market conditions despite the Federal Reserve's hefty interest rate increases.",
      "url": "https://www.reuters.com/world/us/us-job-openings-fall-more-than-two-year-low-june-2023-08-01/",
      "urlToImage": "https://www.reuters.com/resizer/tLb9i70Ewhx5_fy6VU4owddDaxk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/S5FZQWBY4BKXPADWQ6L2LTM3V4.jpg",
      "publishedAt": "2023-08-01T16:16:00Z",
      "content": "WASHINGTON, Aug 1 (Reuters) - U.S. job openings fell to the lowest level in more than two years in June but remained at levels consistent with tight labor market conditions despite the Federal Reserv… [+5102 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "LEA SKENE, SARAH BRUMFIELD",
      "title": "Family of Henrietta Lacks settles lawsuit against Thermo Fisher Scientific - The Associated Press",
      "description": "The family of Henrietta Lacks is settling a lawsuit against a biotechnology company it accuses of improperly profiting from her cells. Their federal lawsuit in Baltimore claimed Thermo Fisher Scientific has made billions from tissue taken without the Black wo…",
      "url": "https://apnews.com/article/henrietta-lacks-hela-cells-thermo-fisher-scientific-bfba4a6c10396efa34c9b79a544f0729",
      "urlToImage": "https://dims.apnews.com/dims4/default/20a841c/2147483647/strip/true/crop/4919x2767+0+327/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F3a%2F16%2F754a93a02093e716ecccab906f17%2F3cf1b209c56d46fda2a4691eda78d7bd",
      "publishedAt": "2023-08-01T16:10:00Z",
      "content": "BALTIMORE (AP) More than 70 years after doctors at Johns Hopkins Hospital took Henrietta Lacks cervical cells without her knowledge, a lawyer for her descendants said they have reached a settlement w… [+4997 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "JULIE WALKER, KAREN MATTHEWS",
      "title": "Pulled out to sea by current, swimmer is rescued after treading water for 5 hours - The Associated Press",
      "description": "Police say a swimmer who got swept out to sea by a powerful current was rescued off New York’s Long Island after treading water for five hours. Suffolk County police say 63-year-old Dan Ho went swimming at a beach in Babylon at around 5 a.m. Monday and was pu…",
      "url": "https://apnews.com/article/swimmer-rescued-five-hours-long-island-f1189c55b26dfecde97fb371b1f6e64b",
      "urlToImage": "https://dims.apnews.com/dims4/default/332f113/2147483647/strip/true/crop/2000x1125+0+103/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F74%2F18%2F319ae769cadfb51502d243c5ccc3%2F443fb5658bc04cd2893ef2ac554751f5",
      "publishedAt": "2023-08-01T16:02:00Z",
      "content": "NEW YORK (AP) A swimmer who got swept out to sea by a powerful current was rescued off New Yorks Long Island after treading water for five hours, police said.\r\nDan Ho, 63, went swimming at a beach in… [+1060 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Ukraine war: Kyiv warns Russia as Moscow skyscraper hit in second drone attack - BBC",
      "description": "The building in Russia's capital was struck in a drone attack for the second time in two days",
      "url": "https://www.bbc.com/news/world-europe-66368016",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/10CA2/production/_130607786_2f1b41e08e8d17e4a04cb837ef1f9bbe15cb6dc2.jpg",
      "publishedAt": "2023-08-01T15:47:02Z",
      "content": "A skyscraper in Russia's capital Moscow has been attacked by a drone for the second time in two days, Mayor Sergei Sobyanin has said.\r\nSeveral drones were shot down overnight on Monday, he said, but … [+3466 chars]"
    },
    {
      "source": {
        "id": "ars-technica",
        "name": "Ars Technica"
      },
      "author": "Kevin Purdy",
      "title": "Microsoft keeps pushing toward repairability, now with Xbox controller parts - Ars Technica",
      "description": "Let the Xbox team take you inside your worn (or tossed) Xbox controller.",
      "url": "https://arstechnica.com/gaming/2023/08/microsoft-now-offers-xbox-controller-parts-manuals-and-video-repair-guides/",
      "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2023/08/Screenshot-2023-08-01-at-10.57.11-AM-760x380.png",
      "publishedAt": "2023-08-01T15:35:57Z",
      "content": "Enlarge/ Microsoft does not currently sell an Xbox-branded repair tray with dozens of perfect little slots for screws and components. But there's nothing stopping them from doing so, I might suggest.… [+2336 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "'Euphoria' star Angus Cloud dies at 25 l GMA - Good Morning America",
      "description": "Cloud, known for his role as Fezco, was struggling with the recent loss of his father, according to a statement from his family.READ MORE: https://tinyurl.co...",
      "url": "https://www.youtube.com/watch?v=MgEKeh29T44",
      "urlToImage": "https://i.ytimg.com/vi/MgEKeh29T44/maxresdefault.jpg",
      "publishedAt": "2023-08-01T15:35:51Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Hollywood Reporter"
      },
      "author": "Ryan Gajewski",
      "title": "“It’s Been Brutal”: Reality TV Producers Lament Conditions as Networks Remain Frugal During Strikes - Hollywood Reporter",
      "description": "Many thought the halt of scripted programming would lead to a reality boom, but even as fall schedules rely heavily on unscripted, workers still grapple with diminished job opportunities, long hours and a lack of union support: \"We get starved out all the tim…",
      "url": "https://www.hollywoodreporter.com/tv/tv-news/reality-tv-producers-strikes-sag-aftra-wga-1235538978/",
      "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/07/2023_07-reality_tv_crews-01.jpg?w=1024",
      "publishedAt": "2023-08-01T15:30:51Z",
      "content": "As networks are largely without new scripted episodes heading into the fall amid Hollywood’s dual strikes, the state of unscripted programming is suddenly in a brighter spotlight than ever before. Bu… [+8426 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Pee-wee Herman actor Paul Reubens dead at age 70 l GMA - Good Morning America",
      "description": "Reubens, the actor and comic best known for playing the character Pee-wee Herman on TV and in films, died of cancer at age 70, according to an announcement p...",
      "url": "https://www.youtube.com/watch?v=e45eVQXU51E",
      "urlToImage": "https://i.ytimg.com/vi/e45eVQXU51E/maxresdefault.jpg",
      "publishedAt": "2023-08-01T15:20:45Z",
      "content": null
    }
  ]
  constructor(){
    super();
    console.log("Hello I am a constructor from news component");
    this.state = {
      articles: this.articles,
      loading: false,
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsTitan - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} description={element.description.slice(0, 55)} imageUrl={element.urlToImage} newsUrl={element.url}/>
              </div>
            })}
        </div>
      </div>
    )
  }
}

export default News
