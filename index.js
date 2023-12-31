
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/news', (req, res) => {
  const dummyNewsData = {
    "status": "ok",
    "totalResults": 38,
    "articles": [
        {
            "source": {
                "id": null,
                "name": "Devdiscourse"
            },
            "author": "Devdiscourse News Desk",
            "title": "AstroSat detects X-ray bursts from new neutron star with magnetar - Devdiscourse",
            "description": "Magnetars are neutron stars having an ultrahigh magnetic field that are much stronger than the terrestrial magnetic field.",
            "url": "https://www.devdiscourse.com/article/science-environment/2757669-astrosat-detects-x-ray-bursts-from-new-neutron-star-with-magnetar",
            "urlToImage": "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/21_03_2021_18_06_03_7399901.jpg?width=920&format=jpeg",
            "publishedAt": "2023-12-26T06:35:40Z",
            "content": "AstroSat, India’s first multi-wavelength space-based observatory, has detected bright sub-second X-ray bursts from a new and unique neutron star with ultrahigh magnetic field (magnetar), which can he… [+2828 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Deccan Herald"
            },
            "author": "DH Web Desk",
            "title": "Humane to begin ChatGPT-powered Ai Pin delivery in March 2024 - Deccan Herald",
            "description": null,
            "url": "https://www.deccanherald.com/technology/gadgets/humane-to-begin-chatgpt-powered-ai-pin-delivery-in-march-2024-2825159",
            "urlToImage": "https://images.deccanherald.com/deccanherald%2F2023-12%2F7c417251-f0d8-4eba-8b98-d6248b81e67b%2FHumane_AI_Pin_CS_1.jpg?rect=0%2C0%2C937%2C492&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop",
            "publishedAt": "2023-12-26T06:28:32Z",
            "content": "In November, Sam Altman-backed Humane launched an innovative Artificial Intelligence(AI)-based gadget Ai Pin with ChatGPT support in the US.\r\nNow, the company has announced that it has received an ov… [+1101 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Business Standard"
            },
            "author": "BS Tech",
            "title": "Xiaomi to launch Redmi Note 13 5G series on Jan 4: Expected specs and more - Business Standard",
            "description": "Ahead of the launch, Xiaomi has unveiled some of the features of its upcoming Redmi Note 13 5G series smartphones. Below are the details",
            "url": "https://www.business-standard.com/technology/tech-news/xiaomi-to-launch-redmi-note-13-5g-series-on-jan-4-expected-specs-and-more-123122600245_1.html",
            "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2023-12/26/full/1703571633-1371.jpg",
            "publishedAt": "2023-12-26T06:25:58Z",
            "content": "Ahead of the launch, Xiaomi has unveiled some of the features of its upcoming Redmi Note 13 5G series smartphones. Below are the details\r\nPhoto: Redmi India\r\nBS TechNew Delhi\r\nXiaomi is set to launch… [+3354 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "India vs South Africa Boxing Day Test Unlikely To Start Today. Here's Full Weather Report - NDTV Sports",
            "description": "Director Comey says the probe into last year's US election would assess if crimes were committed.",
            "url": "https://www.bbc.com/news/world-us-canada-39324587",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/44EC/production/_95244671_mediaitem95244670.jpg",
            "publishedAt": "2023-12-26T06:16:32Z",
            "content": "Media caption, 'Putin hates Clinton' and other things the FBI learned about Russia\r\nFBI director James Comey has confirmed for the first time that the FBI is investigating alleged Russian interferenc… [+5942 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "Young UP Cop Dies Of Gunshot Injury In Encounter. He Was To Marry In Feb - NDTV",
            "description": "Police constable Sachin Rathi's family was making preparations for his wedding a month later. Now, there will be a funeral. The 30-year-old Uttar Pradesh cop succumbed to injuries last night after he was shot during an hour-long encounter",
            "url": "https://www.ndtv.com/india-news/young-up-cop-sachin-rathi-dies-of-gunshot-injury-in-encounter-he-was-to-marry-in-feb-4744002",
            "urlToImage": "https://c.ndtvimg.com/2023-12/p4ednrdg_up-cop_625x300_26_December_23.jpg",
            "publishedAt": "2023-12-26T06:07:40Z",
            "content": "Sachin Rathi had joined the police force in 2019\r\nLucknow: Police constable Sachin Rathi's family was making preparations for his wedding a month later. Now, there will be a funeral. The 30-year-old … [+1170 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT News Desk",
            "title": "Covid in India Live: Delhi govt plans to set up genome surveillance - Hindustan Times",
            "description": "Covid in India Live Updates: Check out the latest developments from across the country on the new sub-variant of Covid-19 here.",
            "url": "https://www.hindustantimes.com/india-news/covid-india-cases-live-updates-coronavirus-new-variant-jn-1-omicron-restrictions-mask-advisory-guidelines-latest-news-101703554368931.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/26/1600x900/20231221-DNO-SGH-MN-COVIDTest-008-0_1703555149177_1703555243657.jpg",
            "publishedAt": "2023-12-26T05:42:29Z",
            "content": "On Tuesday, India recorded 412 new cases of Covid-19, resulting in an increase in the number of active cases to 4,170, as reported by the health ministry, PTI reported.\r\nThe death toll attributed to … [+597 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Indian Express"
            },
            "author": "Express Web Desk",
            "title": "Plane grounded in France over human trafficking concerns lands in Mumbai with 276 passengers - The Indian Express",
            "description": "According to local officials, when the flight landed at France’s Vatry airport on Thursday, it had 303 Indian passengers, including 11 minors.",
            "url": "https://indianexpress.com/article/cities/mumbai/plane-grounded-in-france-over-human-trafficking-lands-in-mumbai-9082765/",
            "urlToImage": "https://images.indianexpress.com/2023/12/cover-97.jpg",
            "publishedAt": "2023-12-26T05:27:14Z",
            "content": "A charter plane carrying 276 passengers, mostly Indians, which was grounded in France for four days over suspected human trafficking, landed in Mumbai at 3 am on Tuesday.Visuals taken at the Mumbai a… [+3792 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "Dense Fog In Delhi Delays 30 Flights, Passengers Alerted - NDTV",
            "description": "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
            "url": "https://www.ndtv.com",
            "urlToImage": "https://cdn.ndtv.com/common/images/ogndtv.png",
            "publishedAt": "2023-12-26T05:12:17Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "India.com"
            },
            "author": "https://www.india.com/author/lifestylestaff/",
            "title": "Weight Loss With Nutmeg: Here’s How a Pinch of Jaiphal Can Boost Metabolism And Help You Burn Belly Fat - India.com",
            "description": "Nutmeg is an aromatic spice that adds flavour to our food. Also, when it comes to weight loss, this kitchen ingredient is all you need to keep on your top shelf. Here's why!",
            "url": "https://www.india.com/lifestyle/weight-loss-with-nutmeg-heres-how-a-pinch-of-jaiphal-can-boost-metabolism-and-help-you-burn-belly-fat-6612003/",
            "urlToImage": "https://static.india.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-26-at-10.34.33-AM.jpeg",
            "publishedAt": "2023-12-26T05:05:13Z",
            "content": "Nutmeg is an aromatic spice that adds flavour to our food. Also, when it comes to weight loss, this kitchen ingredient is all you need to keep on your top shelf. Here's why!\r\nWeight Loss With Nutmeg:… [+2194 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "Garena Free Fire Redeem Codes for December 26: Free skins, weapons, and more on offer - HT Tech",
            "description": "Garena Free Fire MAX Redeem Codes for December 26: Check out the latest Garena Free Fire redeem codes and know how to redeem them.",
            "url": "https://tech.hindustantimes.com/how-to/garena-free-fire-redeem-codes-for-december-26-free-skins-weapons-and-more-on-offer-71703564935861.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/26/1600x900/17ea3ac09960840442ac3d40be4fdad0jpg_1632795220880_1703565340822.jpeg",
            "publishedAt": "2023-12-26T04:40:54Z",
            "content": "Garena Free Fire MAX Redeem Codes for December 26: Ever wondered why online multiplayer games like Free Fire work on a global ranking system and not a level-based format like many campaign-based game… [+2378 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "News18"
            },
            "author": "Srishti Choudhary",
            "title": "Newsmaker | Moon? Done. Sun? Nearly Done. Indians in Spacesuits? On it, Says ISRO Chief Somanath - News18",
            "description": "In just two years of becoming the ISRO chief, S Somanath has deftly propelled the national agency closer to the moon and the sun, and realised the dreams of a multitude of scientists who dedicated years to the goal. But bigger milestones await",
            "url": "https://www.news18.com/india/newsmaker-moon-done-sun-nearly-done-indians-in-spacesuits-on-it-says-isro-chief-somanath-8715242.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/12/isro-somanath-2023-12-324034f294334cbd733d14c8f9e5a3ae-16x9.png?impolicy=website&width=1200&height=675",
            "publishedAt": "2023-12-26T04:35:10Z",
            "content": "When the Indian Space Research Organization (ISRO) returned to launch-pad with Chandrayaan-3 in July this year, the excitement was palpable among people. Four years had passed since India last attemp… [+3949 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Moneycontrol"
            },
            "author": "Moneycontrol News",
            "title": "Strong debut | Motisons Jewellers lists at 98% premium to IPO price - Moneycontrol",
            "description": "The Rs 151-crore public issue was bought 159.61 times during December 18-20 as all categories of investors showed strong participation in the IPO",
            "url": "https://www.moneycontrol.com/news/business/markets/strong-debut-motisons-jewellers-lists-at-98-premium-to-ipo-price-11955381.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/11/Gold-jewellery-770x433.jpg",
            "publishedAt": "2023-12-26T04:34:26Z",
            "content": "Shares of Motisons Jewellers made a blockbuster debut on December 26, listing at 98 percent premium over issue price. The stock started trading at Rs 109 against IPO price of Rs 55.\r\nThe Rs 151-crore… [+1728 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "75-foot asteroid to come as close as 2.4 mn km to Earth; NASA reveals speed, other details - HT Tech",
            "description": "An aircraft-sized asteroid is expected to pass Earth today, December 26, NASA has revealed. Know details such as speed, size, distance, and more, as per NASA.",
            "url": "https://tech.hindustantimes.com/tech/news/75foot-asteroid-to-come-as-close-as-2-4-mn-km-to-earth-nasa-reveals-speed-other-details-71703564638293.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/26/1600x900/3_1693479089566_1703564830748.jpg",
            "publishedAt": "2023-12-26T04:28:36Z",
            "content": "When NASA's telescopes track a new Near-Earth Asteroid (NEA), astronomers measure the asteroid's observed positions in the sky and report them to the Minor Planet Center. The Center for Near-Earth Ob… [+1688 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TOI Sports Desk",
            "title": "Australia vs Pakistan, 2nd Test: Watch - David Warner, dropped on 2, becomes Australia's second best - Times of India",
            "description": "Cricket News: On day one of the Boxing Day Test at the Melbourne Cricket Ground on Tuesday, Pakistan chose to bowl first and then let off seasoned opener David Warn",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/news/australia-vs-pakistan-2nd-test-watch-david-warner-dropped-on-2-becomes-australias-second-best/articleshow/106280308.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106280387,width-1070,height-580,imgsize-45860,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-26T04:14:20Z",
            "content": "Top run scorers for Australia across all formats"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "More Pics From Arbaaz And Shura Khan's Wedding Ceremony - NDTV Movies",
            "description": "\"It's you. It's me. It's us,\" Arbaaz Khan captioned the post",
            "url": "https://www.ndtv.com/entertainment/more-pics-from-arbaaz-and-shura-khans-wedding-ceremony-4743503",
            "urlToImage": "https://c.ndtvimg.com/2023-12/871ovj6g_arbaaz-khan_625x300_26_December_23.jpg",
            "publishedAt": "2023-12-26T04:04:59Z",
            "content": "Arbaaz Khan with Shura Khan. (courtesy: arbaazkhanofficial)\r\nNew Delhi: Actor and film producer Arbaaz Khan married make-up artist Shura Khan on December 24. The actor has now shared some more photos… [+1446 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TOI World Desk",
            "title": "NASA releases space security guide to enhance mission cybersecurity - IndiaTimes",
            "description": "US News: NASA has unveiled the initial version of its Space Security Best Practices Guide, marking a crucial step in bolstering cybersecurity for both public a.",
            "url": "https://timesofindia.indiatimes.com/world/us/nasa-releases-space-security-guide-to-enhance-mission-cybersecurity/articleshow/106280176.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106280156,width-1070,height-580,imgsize-394676,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-26T04:03:24Z",
            "content": "Vitamin D rich dry fruits you must consume in winter"
        },
        {
            "source": {
                "id": null,
                "name": "MENAFN.COM"
            },
            "author": "MENAFN",
            "title": "Berries To Kiwi: 7 Fruits To Keep Skin Hydrated For New Year - MENAFN.COM",
            "description": "(MENAFN - AsiaNet News)   Unlock radiant skin with nature's hydrating wonders! Dive into a world of skincare as we explore seven fr",
            "url": "https://menafn.com/1107656209/Berries-To-Kiwi-7-Fruits-To-Keep-Skin-Hydrated-For-New-Year",
            "urlToImage": "https://menafn.com/updates/pr/2023-12/25/AN_53fe0image_story.jpg",
            "publishedAt": "2023-12-26T04:00:16Z",
            "content": "(MENAFN- AsiaNet News) Unlock radiant skin with nature's hydrating wonders! Dive into a world of skincare as we explore seven fruits brimming with moisture. From watermelon's 92% water content to kiw… [+2093 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Zee Business"
            },
            "author": "ZeeBiz WebTeam",
            "title": "Muthoot Microfin IPO Listing Live: Shares to list on bourses today - Zee Business",
            "description": "Muthoot Microfin IPO Listing Price, Muthoot Microfin Share Price NSE, BSE: Zee Business Managing Ed",
            "url": "https://www.zeebiz.com/markets/ipo/live-updates-muthoot-microfin-ipo-listing-new-today-muthoot-microfin-share-price-nse-bse-anil-singhvi-views-buy-sell-of-hold-269869",
            "urlToImage": "https://cdn.zeebiz.com/sites/default/files/2023/12/26/274124-muthootmicrofinipo.jpg",
            "publishedAt": "2023-12-26T03:40:53Z",
            "content": "Muthoot Microfin IPO Listing Price, Muthoot Microfin Share Price NSE, BSE: Shares of Muthoot Microfin, the microfinance subsidiary of Muthoot Pappachan group, will be listed on the bourses today i.e.… [+337 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Livemint"
            },
            "author": "Fareha Naaz",
            "title": "Salaar Box Office collection Day 4: After minting ₹400 crore worldwide, Parbhas' movie earns ₹45.77 cr on Christmas | Mint - Mint",
            "description": "Salaar Box Office collection Day 4: Parbhas starrer film is making big numbers at the box office and raked in  ₹45.77 crore net on Christmas.",
            "url": "https://www.livemint.com/industry/salaar-box-office-collection-day-4-after-minting-rs-400-crore-worldwide-parbhas-movie-earns-rs-45-77-cr-on-christmas-11703554957706.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/26/1600x900/m1_1693461004532_1703558120163.jpg",
            "publishedAt": "2023-12-26T03:25:34Z",
            "content": "Salaar Box Office collection Day 4: Parbhas starrer 'Salaar: Part One- Ceasefire' is making big numbers at the box office following its release before a long weekend. The festival of Christmas accele… [+2329 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT News Desk",
            "title": "Biden orders US strike on Iran-backed forces in Iraq. ‘A response to…’: Pentagon - Hindustan Times",
            "description": "Defence secretary Lloyd Austin said US conducted necessary and proportionate strikes on three facilities used by Kataeb Hezbollah and affiliated groups in Iraq. | World News",
            "url": "https://www.hindustantimes.com/world-news/us-strikes-sites-used-by-iran-backed-forces-in-iraq-a-response-to-pentagon-101703560739977.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/26/1600x900/Biden-8_1703561348585_1703561409991.jpg",
            "publishedAt": "2023-12-26T03:24:44Z",
            "content": "The US military carried out strikes on three sites used by Iran-backed forces in Iraq on Monday after an attack wounded American personnel earlier in the day, defence secretary Lloyd Austin said. The… [+2622 chars]"
        }
    ]
};

  res.json(dummyNewsData);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
