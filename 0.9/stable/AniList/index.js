"use strict";var source=(()=>{var G=Object.defineProperty;var he=Object.getOwnPropertyDescriptor;var fe=Object.getOwnPropertyNames;var Se=Object.prototype.hasOwnProperty;var ye=(t,r,e)=>r in t?G(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e;var be=(t,r)=>{for(var e in r)G(t,e,{get:r[e],enumerable:!0})},Ee=(t,r,e,o)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of fe(r))!Se.call(t,i)&&i!==e&&G(t,i,{get:()=>r[i],enumerable:!(o=he(r,i))||o.enumerable});return t};var Ie=t=>Ee(G({},"__esModule",{value:!0}),t);var m=(t,r,e)=>ye(t,typeof r!="symbol"?r+"":r,e);var Te={};be(Te,{AniList:()=>Re,AniListExtension:()=>F});var v=class{reloadForm(){let r=this.__underlying_formId;r&&Application.formDidChange(r)}get requiresExplicitSubmission(){return!1}};function E(t,r){return{...r,id:t,type:"labelRow",isHidden:r.isHidden??!1,isSelectable:r.onSelect!=null}}function se(t,r){return{...r,id:t,type:"inputRow",isHidden:r.isHidden??!1}}function D(t,r){return{...r,id:t,type:"stepperRow",isHidden:r.isHidden??!1}}function x(t,r){return{...r,id:t,type:"toggleRow",isHidden:r.isHidden??!1}}function oe(t,r){return{...r,id:t,type:"selectRow",isHidden:r.isHidden??!1}}function U(t,r){return{...r,id:t,type:"buttonRow",isHidden:r.isHidden??!1}}function $(t,r){return{...r,id:t,type:"navigationRow",isHidden:r.isHidden??!1}}function ne(t,r){return{...r,id:t,type:"oauthButtonRow",isHidden:r.isHidden??!1}}function y(t,r){let e;return typeof t=="string"?e={id:t}:e=t,{type:"listSection",...e,items:r.filter(o=>o),allowAddition:!1,allowDeletion:!1,allowReorder:!1}}var O=class{constructor(r){m(this,"id");this.id=r}registerInterceptor(){Application.registerInterceptor(this.id,Application.Selector(this,"interceptRequest"),Application.Selector(this,"interceptResponse"))}unregisterInterceptor(){Application.unregisterInterceptor(this.id)}};var H={},X={},ee=async t=>{if(H[t]){await H[t],await ee(t);return}H[t]=new Promise(r=>X[t]=()=>{delete H[t],r()})},ae=t=>{X[t]&&X[t]()};var q=class extends O{constructor(e,o){super(e);m(this,"options");m(this,"promise");m(this,"currentRequestsMade",0);m(this,"lastReset",Date.now());m(this,"imageRegex",new RegExp(/\.(png|gif|jpeg|jpg|webp)(\?|$)/i));this.options=o}async interceptRequest(e){return this.options.ignoreImages&&this.imageRegex.test(e.url)||(await ee(this.id),await this.incrementRequestCount(),ae(this.id)),e}async interceptResponse(e,o,i){return i}async incrementRequestCount(){if(await this.promise,(Date.now()-this.lastReset)/1e3>this.options.bufferInterval&&(this.currentRequestsMade=0,this.lastReset=Date.now()),this.currentRequestsMade+=1,this.currentRequestsMade>=this.options.numberOfRequests){let o=(Date.now()-this.lastReset)/1e3;if(o<=this.options.bufferInterval){let i=this.options.bufferInterval-o;console.log(`[BasicRateLimiter] rate limit hit, sleeping for ${i}`),this.promise=Application.sleep(i)}}}};var le;(function(t){t[t.NONE=0]="NONE",t[t.MANGA_CHAPTERS=1]="MANGA_CHAPTERS",t[t.CHAPTER_PROVIDING=1]="CHAPTER_PROVIDING",t[t.MANGA_PROGRESS=2]="MANGA_PROGRESS",t[t.MANGA_PROGRESS_PROVIDING=2]="MANGA_PROGRESS_PROVIDING",t[t.PROGRESS_PROVIDING=2]="PROGRESS_PROVIDING",t[t.DISCOVER_SECIONS=4]="DISCOVER_SECIONS",t[t.DISCOVER_SECIONS_PROVIDING=4]="DISCOVER_SECIONS_PROVIDING",t[t.DISCOVER_SECTION_PROVIDING=4]="DISCOVER_SECTION_PROVIDING",t[t.COLLECTION_MANAGEMENT=8]="COLLECTION_MANAGEMENT",t[t.MANAGED_COLLECTION_PROVIDING=8]="MANAGED_COLLECTION_PROVIDING",t[t.CLOUDFLARE_BYPASS_REQUIRED=16]="CLOUDFLARE_BYPASS_REQUIRED",t[t.CLOUDFLARE_BYPASS_PROVIDING=16]="CLOUDFLARE_BYPASS_PROVIDING",t[t.SETTINGS_UI=32]="SETTINGS_UI",t[t.SETTINGS_FORM_PROVIDING=32]="SETTINGS_FORM_PROVIDING",t[t.MANGA_SEARCH=64]="MANGA_SEARCH",t[t.SEARCH_RESULTS_PROVIDING=64]="SEARCH_RESULTS_PROVIDING",t[t.SEARCH_RESULT_PROVIDING=64]="SEARCH_RESULT_PROVIDING"})(le||(le={}));var R;(function(t){t.EVERYONE="SAFE",t.MATURE="MATURE",t.ADULT="ADULT"})(R||(R={}));var w;(function(t){t[t.featured=0]="featured",t[t.simpleCarousel=1]="simpleCarousel",t[t.prominentCarousel=2]="prominentCarousel",t[t.chapterUpdates=3]="chapterUpdates",t[t.genres=4]="genres"})(w||(w={}));var Nt=Object.freeze({items:[],metadata:void 0});var j=`
query Query(
  $page: Int
  $isAdult: Boolean
  $onList: Boolean
  $countryOfOrigin: CountryCode
  $isLicensed: Boolean
  $search: String
  $startDateGreater: FuzzyDateInt
  $startDateLesser: FuzzyDateInt
  $formatIn: [MediaFormat]
  $formatNotIn: [MediaFormat]
  $statusIn: [MediaStatus]
  $statusNotIn: [MediaStatus]
  $chaptersGreater: Int
  $chaptersLesser: Int
  $volumesGreater: Int
  $volumesLesser: Int
  $genreIn: [String]
  $genreNotIn: [String]
  $tagIn: [String]
  $tagNotIn: [String]
  $sourceIn: [MediaSource]
  $sort: [MediaSort]
) {
  Page(page: $page, perPage: 50) {
    pageInfo {
      hasNextPage
    }
    media(
      type: MANGA
      isAdult: $isAdult
      onList: $onList
      countryOfOrigin: $countryOfOrigin
      isLicensed: $isLicensed
      search: $search
      startDate_greater: $startDateGreater
      startDate_lesser: $startDateLesser
      format_in: $formatIn
      format_not_in: $formatNotIn
      status_in: $statusIn
      status_not_in: $statusNotIn
      chapters_greater: $chaptersGreater
      chapters_lesser: $chaptersLesser
      volumes_greater: $volumesGreater
      volumes_lesser: $volumesLesser
      genre_in: $genreIn
      genre_not_in: $genreNotIn
      tag_in: $tagIn
      tag_not_in: $tagNotIn
      source_in: $sourceIn
      sort: $sort
    ) {
      chapters
      coverImage {
        extraLarge
        large
        medium
      }
      format
      genres
      id
      isAdult
      status
      title {
        english
        native
        romaji
      }
      volumes
      synonyms
    }
  }
}
`;var C={JP:{id:"JP",label:"Japan"},KR:{id:"KR",label:"South Korea"},CN:{id:"CN",label:"China"},TW:{id:"TW",label:"Taiwan"}},I={MANGA:{id:"MANGA",label:"Manga"},NOVEL:{id:"NOVEL",label:"Novel"},ONE_SHOT:{id:"ONE_SHOT",label:"One Shot"}},g={FINISHED:{id:"FINISHED",label:"Finished"},RELEASING:{id:"RELEASING",label:"Releasing"},NOT_YET_RELEASED:{id:"NOT_YET_RELEASED",label:"Not Yet Released"},CANCELLED:{id:"CANCELLED",label:"Cancelled"},HIATUS:{id:"HIATUS",label:"Hiatus"}},T={SEARCH_MATCH:{id:"SEARCH_MATCH",label:"Search Match"},ID:{id:"ID",label:"Id \u2191"},ID_DESC:{id:"ID_DESC",label:"Id \u2193"},TITLE_ROMAJI:{id:"TITLE_ROMAJI",label:"Title Romaji \u2191"},TITLE_ROMAJI_DESC:{id:"TITLE_ROMAJI_DESC",label:"Title Romaji \u2193"},TITLE_ENGLISH:{id:"TITLE_ENGLISH",label:"Title English \u2191"},TITLE_ENGLISH_DESC:{id:"TITLE_ENGLISH_DESC",label:"Title English \u2193"},TITLE_NATIVE:{id:"TITLE_NATIVE",label:"Title Native \u2191"},TITLE_NATIVE_DESC:{id:"TITLE_NATIVE_DESC",label:"Title Native \u2193"},FORMAT:{id:"FORMAT",label:"Format \u2191"},FORMAT_DESC:{id:"FORMAT_DESC",label:"Format \u2193"},START_DATE:{id:"START_DATE",label:"Start Date \u2191"},START_DATE_DESC:{id:"START_DATE_DESC",label:"Start Date \u2193"},END_DATE:{id:"END_DATE",label:"End Date \u2191"},END_DATE_DESC:{id:"END_DATE_DESC",label:"End Date \u2193"},SCORE:{id:"SCORE",label:"Score \u2191"},SCORE_DESC:{id:"SCORE_DESC",label:"Score \u2193"},POPULARITY:{id:"POPULARITY",label:"Popularity \u2191"},POPULARITY_DESC:{id:"POPULARITY_DESC",label:"Popularity \u2193"},TRENDING:{id:"TRENDING",label:"Trending \u2191"},TRENDING_DESC:{id:"TRENDING_DESC",label:"Trending \u2193"},STATUS:{id:"STATUS",label:"Status \u2191"},STATUS_DESC:{id:"STATUS_DESC",label:"Status \u2193"},CHAPTERS:{id:"CHAPTERS",label:"Chapters \u2191"},CHAPTERS_DESC:{id:"CHAPTERS_DESC",label:"Chapters \u2193"},VOLUMES:{id:"VOLUMES",label:"Volumes \u2191"},VOLUMES_DESC:{id:"VOLUMES_DESC",label:"Volumes \u2193"},UPDATED_AT:{id:"UPDATED_AT",label:"Updated At \u2191"},UPDATED_AT_DESC:{id:"UPDATED_AT_DESC",label:"Updated At \u2193"},FAVOURITES:{id:"FAVOURITES",label:"Favourites \u2191"},FAVOURITES_DESC:{id:"FAVOURITES_DESC",label:"Favourites \u2193"}};var de={ORIGINAL:{id:"ORIGINAL",label:"Original"},MANGA:{id:"MANGA",label:"Manga"},LIGHT_NOVEL:{id:"LIGHT_NOVEL",label:"Light Novel"},WEB_NOVEL:{id:"WEB_NOVEL",label:"Web Novel"},NOVEL:{id:"NOVEL",label:"Novel"},Anime:{id:"ANIME",label:"Anime"},VISUAL_NOVEL:{id:"VISUAL_NOVEL",label:"Visual Novel"},VIDEO_GAME:{id:"VIDEO_GAME",label:"Video Game"},DOUJINSHI:{id:"DOUJINSHI",label:"Doujinshi"},COMIC:{id:"COMIC",label:"Comic"},LIVE_ACTION:{id:"LIVE_ACTION",label:"Live Action"},GAME:{id:"GAME",label:"Game"},MULTIMEDIA_PROJECT:{id:"MULTIMEDIA_PROJECT",label:"Multimedia Project"},PICTURE_BOOK:{id:"PICTURE_BOOK",label:"Picture Book"},OTHER:{id:"OTHER",label:"Other"}};var te=`
query Query {
  Viewer {
    avatar {
      large
    }
    createdAt
    id
    name
    mediaListOptions {
      rowOrder
      scoreFormat
      mangaList {
        advancedScoringEnabled
        advancedScoring
        customLists
        splitCompletedSectionByFormat
        sectionOrder
      }
    }
    options {
      activityMergeTime
      disabledListActivity {
        disabled
        type
      }
      displayAdultContent
      staffNameLanguage
      titleLanguage
    }
  }
}
`;var Pe="https://graphql.anilist.co";async function b(t,r,e){let o={url:Pe,method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:t,variables:e})};if(r){let u=String(Application.getSecureState("session"));if(u==null)throw new Error("You are not authenticated, please log in through the AniList settings");let p=JSON.parse(Application.base64Decode(u.split(".")[1]));if(Number(p.exp)<new Date().valueOf()/1e3)throw Application.setSecureState(null,"session"),Application.setState(null,"viewer-id"),Application.setState(null,"viewer-advanced-scoring"),Application.setState(null,"viewer-list-order"),Application.setState(null,"viewer-custom-lists"),Application.setState(null,"viewer-split-completed-list-by-format"),Application.setState(null,"viewer-advanced-scoring-enabled"),new Error("Your authorization token has expired, please log back in through the AniList settings");o.headers.Authorization="Bearer "+u}let[i,n]=await Application.scheduleRequest(o),h=Application.arrayBufferToUTF8String(n),a=JSON.parse(h);if(a==null||typeof a!="object"||!("data"in a||"error"in a))throw new Error(`Failed to parse JSON object: ${String(a)}`);let l=a;if(l.errors!=null){let u="";for(let p=0;p<l.errors.length;p++)p!=0&&(u+=`
`),u+=`AniList returned an error: [${l.errors[p].status}] ${l.errors[p].message}`;throw new Error(u)}return l.data}function M(){return Application.getState("setting-synonyms-in-titles")}var Q=class extends v{getSections(){return Application.getSecureState("session")==null?[y("no-session",[this.loginButton()])]:[y("session",[this.profileViewNavigation(),this.logOutButton()]),y("settings",[this.synonymsToggle()])]}loginButton(){let r={title:"Log In",subtitle:"Log in to AniList to automatically sync your library and reading progress.",onSuccess:Application.Selector(this,"handleLoginSuccess"),authorizeEndpoint:"https://anilist.co/api/v2/oauth/authorize?client_id=6621&response_type=token",responseType:{type:"token"},clientId:"6621"};return ne("login",r)}profileViewNavigation(){let r={title:"View Profile",form:new re};return $("profile-view",r)}logOutButton(){let r={title:"Log Out",onSelect:Application.Selector(this,"logOut")};return U("log-out",r)}synonymsToggle(){let r={title:"Display title synonyms if the title is not in English",value:M()??!1,onValueChange:Application.Selector(this,"handleSynonymsToggle")};return x("synonyms",r)}async handleSynonymsToggle(r){Application.setState(r,"setting-synonyms-in-titles"),Application.invalidateDiscoverSections(),this.reloadForm()}async handleLoginSuccess(r){Application.setSecureState(r,"session");let e=await b(te,!0);Application.setState(e.Viewer.id,"viewer-id"),Application.setState(JSON.stringify(e.Viewer.mediaListOptions.mangaList.advancedScoring),"viewer-advanced-scoring"),Application.setState(JSON.stringify(e.Viewer.mediaListOptions.mangaList.sectionOrder),"viewer-list-order"),Application.setState(JSON.stringify(e.Viewer.mediaListOptions.mangaList.customLists),"viewer-custom-lists"),Application.setState(String(e.Viewer.mediaListOptions.mangaList.splitCompletedSectionByFormat),"viewer-split-completed-list-by-format"),Application.setState(String(e.Viewer.mediaListOptions.mangaList.advancedScoringEnabled),"viewer-advanced-scoring-enabled"),this.reloadForm()}async logOut(){Application.setSecureState(null,"session"),Application.setState(null,"viewer-id"),Application.setState(null,"viewer-advanced-scoring"),Application.setState(null,"viewer-list-order"),Application.setState(null,"viewer-custom-lists"),Application.setState(null,"viewer-split-completed-list-by-format"),Application.setState(null,"viewer-advanced-scoring-enabled"),this.reloadForm()}},re=class extends v{constructor(){super(...arguments);m(this,"loadRequest");m(this,"viewer");m(this,"error")}formWillAppear(){this.loadRequest=b(te,!0).then(e=>{this.viewer=e}).catch(e=>{this.error=e}).finally(()=>{this.reloadForm()})}getSections(){return this.viewer==null&&this.error==null?[y("loading",[E("loading",{title:"Loading..."})])]:this.error!=null?[y("error",[E("error",{title:"Error",subtitle:this.error.toString()})])]:[this.getProfileSection(this.viewer),this.getSessionSection()]}getProfileSection(e){let o=new Date(0);o.setUTCSeconds(e.Viewer.createdAt);let i=[E("username-id",{title:"Username",value:e.Viewer.name,subtitle:"Id: "+e.Viewer.id.toString()}),E("creation-date",{title:"Creation Date",value:o.toLocaleString()})];return y({id:"profile-data",header:"Profile"},i)}getSessionSection(){let e=String(Application.getSecureState("session")),o=JSON.parse(Application.base64Decode(e.split(".")[1])),i=[];for(let[n,h]of Object.entries(o)){let a={title:n};n=="jti"?a.subtitle=String(h):a.value=String(h)||"Undefined",i.push(E(n,a))}return y({id:"session-data",header:"Session"},i)}};async function B(t,r,e,o){let i=[],n=await b(t,e,r),h=n.Page.media;for(let a of h){let l="";switch(a.format){case"NOVEL":l+="("+I.NOVEL.label+") ";break;case"ONE_SHOT":l+="("+I.ONE_SHOT.label+") "}l+=a.title.english??a.title.romaji??a.title.native??"No Title",M()==!0&&a.synonyms.length>0&&!a.title.english&&(l+=" / "+a.synonyms[0]);let u=a.isAdult?R.ADULT:a.genres.some(A=>A=="ecchi")?R.MATURE:R.EVERYONE,p;switch(a.status){case g.FINISHED.id:{if(!a.chapters&&!a.volumes){p=g.FINISHED.label;break}p=[a.chapters?"Chs. "+a.chapters.toString():"",a.volumes?"Vols. "+a.volumes.toString():""].join(" ");break}case g.NOT_YET_RELEASED.id:p=g.NOT_YET_RELEASED.label;break;case g.CANCELLED.id:p=g.CANCELLED.label;break;case g.HIATUS.id:p=g.HIATUS.label;break;case g.RELEASING.id:p=g.RELEASING.label}i.push({mangaId:a.id.toString(),title:l,imageUrl:a.coverImage.large,contentRating:u,subtitle:p})}return o=n.Page.pageInfo.hasNextPage?(o??1)+1:void 0,{items:i,metadata:o}}function ce(t,r){r.forEach(e=>{Object.getOwnPropertyNames(e.prototype).forEach(o=>{Object.defineProperty(t.prototype,o,Object.getOwnPropertyDescriptor(e.prototype,o)||Object.create(null))})})}var J=class{async getDiscoverSections(){let r={id:"trending-now",title:"Trending Now",type:w.featured},e={id:"all-time-popular",title:"All Time Popular",type:w.prominentCarousel},o={id:"popular-manga",title:"Popular Manga",type:w.simpleCarousel},i={id:"popular-manhwa",title:"Popular Manhwa",type:w.simpleCarousel},n={id:"top-100-manga",title:"Top 100 Manga",type:w.prominentCarousel};return[r,e,o,i,n]}async getDiscoverSectionItems(r,e){let o,i;switch(r.id){case"trending-now":o=T.TRENDING_DESC.id;break;case"all-time-popular":o=T.POPULARITY_DESC.id;break;case"popular-manga":o=T.POPULARITY_DESC.id,i=C.JP.id;break;case"popular-manhwa":o=T.POPULARITY_DESC.id,i=C.KR.id;break;case"top-100-manga":o=T.SCORE_DESC.id;break}return B(j,{page:e??1,sort:o,countryOfOrigin:i},!1,e)}};var ue=`
query Query($id: Int) {
  Media(id: $id) {
    averageScore
    bannerImage
    coverImage {
      extraLarge
      large
      medium
    }
    description
    format
    genres
    isAdult
    staff {
      edges {
        node {
          name {
            full
          }
        }
        role
      }
    }
    status
    tags {
      id
      name
    }
    title {
      english
      native
      romaji
    }
    synonyms
  }
}
`;var N=class{async getMangaDetails(r){let e={id:Number(r)},i=(await b(ue,!1,e)).Media,n=i.description?i.description.replaceAll(/<br>|<i>|<\/i>|<a.*?>|<\/a>/g,""):"No description";n+=i.synonyms.length>0?`

Synonyms: `+i.synonyms.toLocaleString().replaceAll(",",", ")+`

`:"";let h=[];for(let S of Object.values(i.title))S!=null&&h.push(S);for(let S of i.synonyms)h.push(S);let a=i.title.english??i.title.romaji??i.title.native??"No Title";M()==!0&&i.synonyms.length>0&&!i.title.english&&(a+=`
`+i.synonyms[0]);let l;switch(i.status){case g.FINISHED.id:l=g.FINISHED.label;break;case g.NOT_YET_RELEASED.id:l=g.NOT_YET_RELEASED.label;break;case g.CANCELLED.id:l=g.CANCELLED.label;break;case g.HIATUS.id:l=g.HIATUS.label;break;case g.RELEASING.id:l=g.RELEASING.label}let u,p;for(let S of i.staff.edges){if(S.role.startsWith("Story & Art")){u=S.node.name.full,p=void 0;break}if(!u&&(S.role.startsWith("Story")||S.role.startsWith("Original Story"))&&(u=S.node.name.full,u&&p)||S.role.startsWith("Art")&&(p=S.node.name.full,u&&p))break}let A=i.averageScore?i.averageScore/100:void 0,P=[];for(let S of i.genres)P.push({id:S.replaceAll(" ","_").toLowerCase(),title:S});let L=[];for(let S of i.tags)P.push({id:S.id.toString().replaceAll(" ","_").toLowerCase(),title:S.name});let d=[{id:"genres",title:"Genres",tags:P},{id:"tags",title:"Tags",tags:L}],f=i.isAdult?R.ADULT:P.some(S=>S.id=="ecchi")?R.MATURE:R.EVERYONE,s=[i.coverImage.extraLarge];i.bannerImage!=null&&s.push(i.bannerImage);let c={Format:i.format==I.MANGA.id?I.MANGA.label:i.format==I.NOVEL.id?I.NOVEL.label:I.ONE_SHOT.label};return{mangaId:r,mangaInfo:{thumbnailUrl:i.coverImage.extraLarge,synopsis:n,primaryTitle:a,secondaryTitles:h,contentRating:f,status:l,artist:p,author:u,bannerUrl:i.bannerImage??void 0,rating:A,tagGroups:d,artworkUrls:s,shareUrl:"https://anilist.co/manga/"+r,additionalInfo:c}}}};var _=`
query Query($userId: Int, $mediaId: Int) {
  MediaList(userId: $userId, mediaId: $mediaId) {
    advancedScores
    completedAt {
      day
      month
      year
    }
    createdAt
    customLists
    hiddenFromStatusLists
    id
    notes
    private
    progress
    progressVolumes
    repeat
    score
    startedAt {
      day
      month
      year
    }
    status
    updatedAt
  }
}
`,V={CURRENT:{id:"CURRENT",label:"Reading"},PLANNING:{id:"PLANNING",label:"Planning"},COMPLETED:{id:"COMPLETED",label:"Completed"},DROPPED:{id:"DROPPED",label:"Dropped"},PAUSED:{id:"PAUSED",label:"Paused"},REPEATING:{id:"REPEATING",label:"Rereading"}},Y=`
mutation Mutation(
  $id: Int
  $mediaId: Int
  $status: MediaListStatus
  $score: Float
  $progress: Int
  $progressVolumes: Int
  $repeat: Int
  $private: Boolean
  $notes: String
  $hiddenFromStatusLists: Boolean
  $customLists: [String]
  $advancedScores: [Float]
) {
  SaveMediaListEntry(
    id: $id
    mediaId: $mediaId
    status: $status
    score: $score
    progress: $progress
    progressVolumes: $progressVolumes
    repeat: $repeat
    private: $private
    notes: $notes
    hiddenFromStatusLists: $hiddenFromStatusLists
    customLists: $customLists
    advancedScores: $advancedScores
  ) {
    advancedScores
    completedAt {
      day
      month
      year
    }
    createdAt
    customLists
    hiddenFromStatusLists
    id
    notes
    private
    progress
    progressVolumes
    repeat
    score
    startedAt {
      day
      month
      year
    }
    status
    updatedAt
  }
}
`,pe=`
mutation Mutation($deleteMediaListEntryId: Int) {
  DeleteMediaListEntry(id: $deleteMediaListEntryId) {
    deleted
  }
}
`;var z=class extends v{constructor(e,o){super();m(this,"viewerId");m(this,"sourceMangaId");m(this,"loadRequest");m(this,"titleProgress");m(this,"error");this.viewerId=e,this.sourceMangaId=o}formWillAppear(){let e={userId:this.viewerId,mediaId:this.sourceMangaId};this.loadRequest=b(_,!0,e).then(o=>{this.titleProgress||(this.titleProgress=o)}).catch(o=>{o?.toString().includes("[404]")||(this.error=o);let n={MediaList:{advancedScores:{},completedAt:{day:null,month:null,year:null},createdAt:Date.now()/1e3,customLists:{},hiddenFromStatusLists:!1,notes:null,private:!1,progress:0,progressVolumes:0,repeat:0,score:0,startedAt:{day:null,month:null,year:null},status:"CURRENT",updatedAt:Date.now()/1e3}};this.titleProgress||(this.titleProgress=n)}).finally(()=>{this.reloadForm()})}get requiresExplicitSubmission(){return!0}async formDidSubmit(){if(this.titleProgress==null)return;let e=this.titleProgress.MediaList,o={userId:this.viewerId,mediaId:this.sourceMangaId,status:e.status,score:e.score,progress:e.progress,progressVolumes:e.progressVolumes,repeat:e.repeat,private:e.private,notes:e.notes,hiddenFromStatusLists:e.hiddenFromStatusLists};await b(Y,!0,o)}formDidCancel(){}getSections(){let e=[];if(this.titleProgress==null&&this.error==null)return[y("loading",[E("loading",{title:"Loading..."})])];if(this.error!=null)return[y("error",[E("error",{title:"Error",subtitle:this.error.toString()})])];let o=this.titleProgress.MediaList;o.id==null&&e.push(this.getNewMediaListEntrySection());let i=[...this.getProgressSections(),...this.getScoreSections(),this.getPrivacySection(),this.getNotesSection()];for(let n of i)e.push(n);return o.id!=null&&e.push(this.getDeleteSection()),e}getNewMediaListEntrySection(){return y("newMediaListEntry",[E("newMediaListEntry",{title:"New Media List Entry",subtitle:"Selecting Done will add this item to your media list"})])}getProgressSections(){let e=this.titleProgress.MediaList,o=[];for(let l of Object.keys(V)){let u=V[l];o.push({id:u.id,title:u.label})}let i={title:"Status",value:[e.status.toString()],minItemCount:1,maxItemCount:1,options:o,onValueChange:Application.Selector(this,"statusUpdate")},n={title:"Chapters",subtitle:"The highest read chapter number",value:e.progress,minValue:0,maxValue:99999,stepValue:1,loopOver:!1,onValueChange:Application.Selector(this,"chapterProgressUpdate")},h={title:"Volumes",subtitle:"The highest read volume number",value:e.progressVolumes,minValue:0,maxValue:99999,stepValue:1,loopOver:!1,onValueChange:Application.Selector(this,"volumeProgressUpdate")},a={title:"Reread Count",subtitle:"The amount of times you have reread the title",value:e.repeat,minValue:0,maxValue:99999,stepValue:1,loopOver:!1,onValueChange:Application.Selector(this,"rereadCountUpdate")};return[y({id:"progress",header:"Progress"},[oe("status",i),D("chapterProgress",n),D("volumeProgress",h),D("rereadCount",a)])]}async statusUpdate(e){this.titleProgress.MediaList.status=e[0]}async chapterProgressUpdate(e){this.titleProgress.MediaList.progress=e,this.reloadForm()}async volumeProgressUpdate(e){this.titleProgress.MediaList.progressVolumes=e,this.reloadForm()}async rereadCountUpdate(e){this.titleProgress.MediaList.repeat=e,this.reloadForm()}getScoreSections(){let e={title:"Score",subtitle:"",value:this.titleProgress.MediaList.score,minValue:0,maxValue:10,stepValue:.1,loopOver:!1,onValueChange:Application.Selector(this,"scoreUpdate")};return[y({id:"score",header:"Score"},[D("score",e)])]}async scoreUpdate(e){this.titleProgress.MediaList.score=Number(e.toFixed(1)),this.reloadForm()}getPrivacySection(){let e=this.titleProgress.MediaList,o={title:"Private",value:e.private,onValueChange:Application.Selector(this,"privateUpdate")},i={title:"Hidden From Status Lists",value:e.hiddenFromStatusLists,onValueChange:Application.Selector(this,"hiddenFromStatusListsUpdate")},n=[x("private",o),x("hiddenFromStatusLists",i)];return y({id:"privacy",header:"Privacy"},n)}async privateUpdate(e){this.titleProgress.MediaList.private=e}async hiddenFromStatusListsUpdate(e){this.titleProgress.MediaList.hiddenFromStatusLists=e}getNotesSection(){let e={title:"Notes",value:this.titleProgress.MediaList.notes??"",onValueChange:Application.Selector(this,"updateNotes")};return y({id:"notes",header:"Notes",footer:"Only you can see your notes"},[se("notes",e)])}async updateNotes(e){this.titleProgress.MediaList.notes=e}getDeleteSection(){let e={title:"Delete",form:new ie(this.titleProgress.MediaList.id)};return y({id:"delete",footer:"Delete the title from your media list"},[$("delete",e)])}},ie=class extends v{constructor(e){super();m(this,"mediaListId");this.mediaListId=e}getSections(){if(this.mediaListId==null)return[y("deleted",[E("deleted",{title:"Deleted",subtitle:"The title has been succesfully deleted from your media list"})])];let e={title:"Delete",onSelect:Application.Selector(this,"onDeletion")};return[y({id:"delete",footer:"WARNING: All media list data will be deleted, this action can not be undone"},[U("delete",e)])]}async onDeletion(){let e={deleteMediaListEntryId:this.mediaListId};(await b(pe,!0,e)).DeleteMediaListEntry.deleted&&(this.mediaListId=null,this.reloadForm())}};var W=class{async getMangaProgressManagementForm(r){let e=Number(Application.getState("viewer-id"));if(isNaN(e))throw new Error("You are not authenticated, please log in through the AniList settings");return new z(e,Number(r.mangaId))}async getMangaProgress(r){let e=Number(Application.getState("viewer-id"));if(isNaN(e))throw new Error("You are not authenticated, please log in through the AniList settings");let o={userId:e,mediaId:Number(r.mangaId)},i;try{i=(await b(_,!0,o)).MediaList}catch(l){if(!l?.toString().includes("[404]"))throw l;return}let n={chapterId:String(i.progress),sourceManga:r,langCode:"unknown",chapNum:i.progress,volume:i.progressVolumes},h=new Date(0);return h.setUTCSeconds(i.updatedAt),{sourceManga:r,lastReadChapter:n,lastReadTime:h,userRating:i.score}}async processChapterReadActionQueue(r){let e=Number(Application.getState("viewer-id")),o={successfulItems:[],failedItems:[]};if(isNaN(e))return o;let i=new Map;for(let n of r)(i.get(n.sourceManga.mangaId)??0)<Math.floor(n.chapterNum)&&i.set(n.sourceManga.mangaId,Math.floor(n.chapterNum));for(let n of r){if((i.get(n.sourceManga.mangaId)??0)!=Math.floor(n.chapterNum)){o.successfulItems.push(n.id);continue}try{let h={userId:e,mediaId:Number(n.sourceManga.mangaId)},a;try{a=(await b(_,!0,h)).MediaList}catch(u){if(!u?.toString().includes("[404]")){o.failedItems.push(n.id);continue}}if(a?.progress&&a.progress>=n.chapterNum){o.successfulItems.push(n.id);continue}let l={userId:e,mediaId:Number(n.sourceManga.mangaId),progress:Math.floor(n.chapterNum)};a||(l.status=V.CURRENT.id),n.chapterVolume&&(a?.progressVolumes??0)<Math.floor(n.chapterVolume)&&(l.progressVolumes=Math.floor(n.chapterVolume)-1),await b(Y,!0,l),o.successfulItems.push(n.id)}catch{o.failedItems.push(n.id)}}return o}};var me=`
query Query {
  GenreCollection
}
`,ge=`
query Query {
  MediaTagCollection {
    isAdult
    name
  }
}
`;var K=class extends N{async getSearchFilters(){let r,e;Number(Application.getState("search-filters-query-date")??0)+604800>new Date().valueOf()/1e3?(r=JSON.parse(Application.getState("genres")),e=JSON.parse(Application.getState("tags"))):(r=await b(me,!1),e=await b(ge,!1),Application.setState(JSON.stringify(r),"genres"),Application.setState(JSON.stringify(e),"tags"),Application.setState(String(new Date().valueOf()/1e3),"search-filters-query-date"));let i={type:"multiselect",id:"genres",title:"Genres",options:r.GenreCollection.map(s=>({id:s.replaceAll(" ","_"),value:s})),value:{},allowExclusion:!0,allowEmptySelection:!0,maximum:void 0},n={type:"multiselect",id:"formats",title:"Formats",options:Object.values(I).map(s=>({id:s.id,value:s.label})),value:{},allowExclusion:!0,allowEmptySelection:!0,maximum:void 0},h={type:"multiselect",id:"publishing-statuses",title:"Publishing Statuses",options:Object.values(g).map(s=>({id:s.id,value:s.label})),value:{},allowExclusion:!0,allowEmptySelection:!0,maximum:void 0},a={type:"dropdown",id:"country-of-origin",title:"Country of Origin",options:Object.values(C).map(s=>({id:s.id,value:s.label})),value:""},l={type:"multiselect",id:"source-materials",title:"Source Materials",options:Object.values(de).map(s=>({id:s.id,value:s.label})),value:{},allowExclusion:!1,allowEmptySelection:!0,maximum:void 0},u={type:"input",id:"start-years",title:"Start Years",placeholder:'Give two years separated by a "-" to give a range',value:""},p={type:"input",id:"chapter-counts",title:"Chapter Counts",placeholder:'Give two chapter counts separated by a "-" to give a range',value:""},A={type:"input",id:"volume-counts",title:"Volume Counts",placeholder:'Give two volume counts separated by a "-" to give a range',value:""},P={type:"multiselect",id:"adult",title:"Adult",options:[{id:"adult",value:"Adult"}],value:{},allowExclusion:!0,allowEmptySelection:!0,maximum:void 0},L={type:"multiselect",id:"doujin",title:"Doujin",options:[{id:"doujin",value:"Doujin"}],value:{},allowExclusion:!0,allowEmptySelection:!0,maximum:void 0},d={type:"multiselect",id:"tracked-titles",title:"Tracked Titles",options:[{id:"tracked-titles",value:"Tracked Titles"}],value:{},allowExclusion:!0,allowEmptySelection:!0,maximum:void 0},f={type:"multiselect",id:"tags",title:"Tags",options:e.MediaTagCollection.map(s=>({id:s.name.replaceAll(" ","_").replaceAll("'","?"),value:s.name})),value:{},allowExclusion:!0,allowEmptySelection:!0,maximum:void 0};return[i,n,h,a,l,u,p,A,P,L,d,f]}async getSortingOptions(r){let e=[];for(let o of Object.keys(T)){let i=T[o];e.push({id:i.id,label:i.label})}return e}async getSearchResults(r,e,o){let i=!1,n=[],h=[],a=[],l=[],u=[],p=[],A=[],P=[],L=[],d={page:e??1,sort:o.id};r.title&&(d.search=r.title);for(let f of r.filters)switch(f.id){case"genres":{let s=f.value??{};for(let c of Object.entries(s))switch(c[1]){case"included":n.push(c[0].replaceAll("_"," "));break;case"excluded":h.push(c[0].replaceAll("_"," "));break}n.length>0&&(d.genreIn=n),h.length>0&&(d.genreNotIn=h);break}case"formats":{let s=f.value??{};for(let c of Object.entries(s))switch(c[1]){case"included":a.push(c[0]);break;case"excluded":l.push(c[0]);break}a.length>0&&(d.formatIn=a),l.length>0&&(d.formatNotIn=l);break}case"publishing-statuses":{let s=f.value??{};for(let c of Object.entries(s))switch(c[1]){case"included":u.push(c[0]);break;case"excluded":p.push(c[0]);break}u.length>0&&(d.statusIn=u),p.length>0&&(d.statusNotIn=p);break}case"country-of-origin":{let s=f.value;s&&(d.countryOfOrigin=s);break}case"source-materials":{let s=f.value??{};for(let c of Object.entries(s))A.push(c[0]);A.length>0&&(d.sourceIn=A);break}case"start-years":{if(f.value=="")break;let s=f.value.split("-").map(c=>Number(c));if(s.length==0||s.length>2||s.includes(NaN))break;for(let c of s)if(c<0||c>9999)break;switch(s.length){case 1:d.startDateGreater=Number((s[0]-1).toString().padStart(4,"0"))*1e4,d.startDateLesser=Number((s[0]+1).toString().padStart(4,"0"))*1e4;break;case 2:if(s[0]>s[1])break;d.startDateGreater=Number(s[0].toString().padStart(4,"0"))*1e4,d.startDateLesser=Number(s[1].toString().padStart(4,"0"))*1e4;break}break}case"chapter-counts":{if(f.value=="")break;let s=f.value.split("-").map(c=>Number(c));if(s.length==0||s.length>2||s.includes(NaN))break;for(let c of s)if(c<0)break;switch(s.length){case 1:d.chaptersGreater=s[0]-1,d.chaptersLesser=s[0]+1;break;case 2:if(s[0]>s[1])break;d.chaptersGreater=s[0],d.chaptersLesser=s[1];break}break}case"volume-counts":{if(f.value=="")break;let s=f.value.split("-").map(c=>Number(c));if(s.length==0||s.length>2||s.includes(NaN))break;for(let c of s)if(c<0)break;switch(s.length){case 1:d.volumesGreater=s[0]-1,d.volumesLesser=s[0]+1;break;case 2:if(s[0]>s[1])break;d.volumesGreater=s[0],d.volumesLesser=s[1];break}break}case"adult":{let s=Object.entries(f.value);if(s.length!=1)break;switch(s[0][1]){case"included":d.isAdult=!0;break;case"excluded":d.isAdult=!1;break}break}case"doujin":{let s=Object.entries(f.value);if(s.length!=1)break;switch(s[0][1]){case"included":d.isLicensed=!1;break;case"excluded":d.isLicensed=!0;break}break}case"tracked-titles":{let s=Object.entries(f.value);if(Object.entries(s).length!=1)break;switch(s[0][1]){case"included":d.onList=!0,i=!0;break;case"excluded":d.onList=!1,i=!0;break}break}case"tags":{let s=f.value??{};for(let c of Object.entries(s))switch(c[1]){case"included":P.push(c[0].replaceAll("_"," ").replaceAll("?","'"));break;case"excluded":L.push(c[0].replaceAll("_"," ").replaceAll("?","'"));break}P.length>0&&(d.tagIn=P),L.length>0&&(d.tagNotIn=L);break}}return B(j,d,i,e)}};var Z=class{async getSettingsForm(){return new Q}};var k=class extends O{async interceptRequest(r){return r}async interceptResponse(r,e,o){return o}};var F=class{constructor(){m(this,"mainRateLimiter",new q("main",{numberOfRequests:1,bufferInterval:2,ignoreImages:!0}));m(this,"mainInterceptor",new k("main"))}async initialise(){this.mainRateLimiter.registerInterceptor(),this.mainInterceptor.registerInterceptor()}};ce(F,[Z,K,J,N,W]);var Re=new F;return Ie(Te);})();
