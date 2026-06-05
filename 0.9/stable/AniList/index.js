var source=(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:`Module`});function t(e){"@babel/helpers - typeof";return t=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},t(e)}function n(e,n){if(t(e)!=`object`||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var i=r.call(e,n||`default`);if(t(i)!=`object`)return i;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(n===`string`?String:Number)(e)}function r(e){var r=n(e,`string`);return t(r)==`symbol`?r:r+``}function i(e,t,n){return(t=r(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=class{constructor(){i(this,`requiresExplicitSubmission`,!1)}reloadForm(){let e=this.__underlying_formId;e&&Application.formDidChange(e)}};function o(e,t,n){return e[`__closure_selector-`+t]=n,Application.Selector(e,`__closure_selector-`+t)}function s(e,t){let n;return n=typeof e==`string`?{id:e}:e,{type:`listSection`,...n,items:t.filter(e=>e),allowAddition:!1,allowDeletion:!1,allowReorder:!1}}function c(e,t){let n;return n=typeof e==`string`?{id:e}:e,{type:`flowSection`,...n,items:t.filter(e=>e)}}function l(e,t){if(t.maxItemCount<1)throw Error(`[${t.id}] maxItemCount must not be less than one`);if(t.minItemCount<0)throw Error(`[${t.id}] minItemCount must not be less than zero`);if(t.minItemCount>=t.maxItemCount&&t.maxItemCount>1)throw Error(`[${t.id}] minItemCount must be less than maxItemCount, or both must be one`);if(t.value.length<t.minItemCount)throw Error(`[${t.id}] value count must not be less than minItemCount`);if(!t.value.every(e=>t.items.some(t=>t.id===e)))throw Error(`[${t.id}] All provided values must be inside items`);let n=Object.keys(t.value).length;return(t.layout==`flow`?c:s)({id:t.id,header:t.header,footer:t.footer},t.items.map(r=>{let i=t.value.indexOf(r.id),a=i!==-1;return d(r.id,{title:r.title,value:a?{symbol:`checkmark`,style:`success`}:void 0,onSelect:o(e,`__select_${t.id}#${r.id}`,async()=>{if(a)n>t.minItemCount&&t.value.splice(i,1);else if(t.maxItemCount==1)t.value.splice(0,t.value.length,r.id);else if(n<t.maxItemCount)t.value.push(r.id);else return;t.onValueChange&&await Application.SelectorRegistry.selector(t.onValueChange)(),e.reloadForm()})})}))}function u(e,t){let n=Object.keys(t.value).length;return(t.layout==`flow`?c:s)({id:t.id,header:t.header,footer:t.footer},t.items.map(r=>{let i=t.value[r.id],a,s;switch(i){case`included`:t.layout==`flow`?(s=`success`,a=void 0):(s=void 0,a={symbol:`checkmark`,style:`success`});break;case`excluded`:t.layout==`flow`?(s=`error`,a=void 0):(s=void 0,a={symbol:`xmark`,style:`error`});break;default:a=void 0,s=void 0;break}return d(r.id,{style:s,title:r.title,value:a,onSelect:o(e,`__multiselect_${t.id}#${r.id}`,async()=>{let a,o=!t.maximum||n<t.maximum,s=t.allowEmptySelection&&n==1||n>1;switch(i){case`included`:if(t.allowExclusion){a=`excluded`;break}if(s){a=void 0;break}else return;case`excluded`:if(s){a=void 0;break}else return;case void 0:if(o){a=`included`;break}else return}a==null?delete t.value[r.id]:t.value[r.id]=a,t.onValueChange&&await Application.SelectorRegistry.selector(t.onValueChange)(),e.reloadForm()})})}))}function d(e,t){return{...t,id:e,type:`labelRow`,isHidden:t.isHidden??!1,isSelectable:t.onSelect!=null}}function f(e,t){return{...t,id:e,type:`inputRow`,isHidden:t.isHidden??!1}}function p(e,t){return{...t,id:e,type:`stepperRow`,isHidden:t.isHidden??!1}}function m(e,t){return{...t,id:e,type:`toggleRow`,isHidden:t.isHidden??!1}}function h(e,t){let n=Object.keys(t.value).length;return v(e,{form:new b(t.title,t),title:t.title,subtitle:t.subtitle,value:n==1?`${(`items`in t?t.items.find(e=>e.id==t.value[0])?.title:t.options.find(e=>e.id==t.value[0])?.title)??`1 item`}`:`${Object.keys(t.value).length} items`,isHidden:t.isHidden})}function g(e,t){return v(e,{form:new x(t.title,t),title:t.title,subtitle:t.subtitle,value:`${Object.keys(t.value).length} items`,isHidden:t.isHidden})}function _(e,t){return{...t,id:e,type:`buttonRow`,isHidden:t.isHidden??!1}}function v(e,t){return{...t,id:e,type:`navigationRow`,isHidden:t.isHidden??!1}}function y(e,t){return{...t,id:e,type:`oauthButtonRow`,isHidden:t.isHidden??!1}}var b=class extends a{constructor(e,t){super(),i(this,`title`,void 0),i(this,`params`,void 0),i(this,`states`,[]),i(this,`requiresExplicitSubmission`,!0),this.title=e,this.params=t,this.states=[...t.value]}getSections(){return[l(this,{id:`select`,value:this.states,layout:`layout`in this.params?this.params.layout:`list`,items:`items`in this.params?this.params.items:this.params.options,minItemCount:this.params.minItemCount,maxItemCount:this.params.maxItemCount,isHidden:this.params.isHidden})]}async formDidSubmit(){await Application.SelectorRegistry.selector(this.params.onValueChange)(this.states)}},x=class extends a{constructor(e,t){super(),i(this,`title`,void 0),i(this,`params`,void 0),i(this,`states`,{}),i(this,`requiresExplicitSubmission`,!0),this.title=e,this.params=t,this.states={...t.value}}getSections(){return[u(this,{id:`multiselect`,value:this.states,items:this.params.items,allowExclusion:this.params.allowExclusion,allowEmptySelection:this.params.allowEmptySelection,maximum:this.params.maximum,layout:this.params.layout})]}async formDidSubmit(){await Application.SelectorRegistry.selector(this.params.onValueChange)(this.states)}},S=class extends a{constructor(...e){super(...e),i(this,`requiresExplicitSubmission`,!0)}async formDidSubmit(){}formDidCancel(){}},C=class{constructor(e){i(this,`id`,void 0),this.id=e}registerInterceptor(){Application.registerInterceptor(this.id,Application.Selector(this,`interceptRequest`),Application.Selector(this,`interceptResponse`))}unregisterInterceptor(){Application.unregisterInterceptor(this.id)}};let w={},T={},E=async e=>{if(w[e]){await w[e],await E(e);return}w[e]=new Promise(t=>T[e]=()=>{delete w[e],t()})},D=e=>{T[e]&&T[e]()};var O=class extends C{constructor(e,t){super(e),i(this,`options`,void 0),i(this,`promise`,void 0),i(this,`currentRequestsMade`,0),i(this,`lastReset`,Date.now()),i(this,`imageRegex`,new RegExp(/\.(avif|gif|jpeg|jpg|jxl|png|webp)(\?|$)/i)),this.options=t}async interceptRequest(e){return this.options.ignoreImages&&this.imageRegex.test(e.url)?e:(await E(this.id),await this.incrementRequestCount(),D(this.id),e)}async interceptResponse(e,t,n){return n}async incrementRequestCount(){if(await this.promise,(Date.now()-this.lastReset)/1e3>this.options.bufferInterval&&(this.currentRequestsMade=0,this.lastReset=Date.now()),this.currentRequestsMade+=1,this.currentRequestsMade>=this.options.numberOfRequests){let e=(Date.now()-this.lastReset)/1e3;if(e<=this.options.bufferInterval){let t=this.options.bufferInterval-e;console.log(`[BasicRateLimiter] rate limit hit, sleeping for ${t}`),this.promise=Application.sleep(t)}}}},k;(function(e){e[e.NONE=0]=`NONE`,e[e.MANGA_CHAPTERS=1]=`MANGA_CHAPTERS`,e[e.CHAPTER_PROVIDING=1]=`CHAPTER_PROVIDING`,e[e.MANGA_PROGRESS=2]=`MANGA_PROGRESS`,e[e.MANGA_PROGRESS_PROVIDING=2]=`MANGA_PROGRESS_PROVIDING`,e[e.PROGRESS_PROVIDING=2]=`PROGRESS_PROVIDING`,e[e.DISCOVER_SECIONS=4]=`DISCOVER_SECIONS`,e[e.DISCOVER_SECIONS_PROVIDING=4]=`DISCOVER_SECIONS_PROVIDING`,e[e.DISCOVER_SECTION_PROVIDING=4]=`DISCOVER_SECTION_PROVIDING`,e[e.COLLECTION_MANAGEMENT=8]=`COLLECTION_MANAGEMENT`,e[e.MANAGED_COLLECTION_PROVIDING=8]=`MANAGED_COLLECTION_PROVIDING`,e[e.CLOUDFLARE_BYPASS_REQUIRED=16]=`CLOUDFLARE_BYPASS_REQUIRED`,e[e.CLOUDFLARE_BYPASS_PROVIDING=16]=`CLOUDFLARE_BYPASS_PROVIDING`,e[e.SETTINGS_UI=32]=`SETTINGS_UI`,e[e.SETTINGS_FORM_PROVIDING=32]=`SETTINGS_FORM_PROVIDING`,e[e.MANGA_SEARCH=64]=`MANGA_SEARCH`,e[e.SEARCH_RESULTS_PROVIDING=64]=`SEARCH_RESULTS_PROVIDING`,e[e.SEARCH_RESULT_PROVIDING=64]=`SEARCH_RESULT_PROVIDING`})(k||(k={}));var A;(function(e){e.EVERYONE=`SAFE`,e.MATURE=`MATURE`,e.ADULT=`ADULT`})(A||(A={}));var j;(function(e){e[e.featured=0]=`featured`,e[e.simpleCarousel=1]=`simpleCarousel`,e[e.prominentCarousel=2]=`prominentCarousel`,e[e.chapterUpdates=3]=`chapterUpdates`,e[e.genres=4]=`genres`})(j||(j={})),Object.freeze({items:[],metadata:void 0});let M=`
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
      averageScore
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
      synonyms
      title {
        english
        native
        romaji
      }
      volumes
    }
  }
}
`,N={JP:{id:`JP`,label:`Japan`},KR:{id:`KR`,label:`South Korea`},CN:{id:`CN`,label:`China`},TW:{id:`TW`,label:`Taiwan`}},P={MANGA:{id:`MANGA`,label:`Manga`},NOVEL:{id:`NOVEL`,label:`Novel`},ONE_SHOT:{id:`ONE_SHOT`,label:`One Shot`}},F={FINISHED:{id:`FINISHED`,label:`Finished`},RELEASING:{id:`RELEASING`,label:`Releasing`},NOT_YET_RELEASED:{id:`NOT_YET_RELEASED`,label:`Not Yet Released`},CANCELLED:{id:`CANCELLED`,label:`Cancelled`},HIATUS:{id:`HIATUS`,label:`Hiatus`}},I={SEARCH_MATCH:{id:`SEARCH_MATCH`,label:`Search Match`},ID:{id:`ID`,label:`Id ↑`},ID_DESC:{id:`ID_DESC`,label:`Id ↓`},TITLE_ROMAJI:{id:`TITLE_ROMAJI`,label:`Title Romaji ↑`},TITLE_ROMAJI_DESC:{id:`TITLE_ROMAJI_DESC`,label:`Title Romaji ↓`},TITLE_ENGLISH:{id:`TITLE_ENGLISH`,label:`Title English ↑`},TITLE_ENGLISH_DESC:{id:`TITLE_ENGLISH_DESC`,label:`Title English ↓`},TITLE_NATIVE:{id:`TITLE_NATIVE`,label:`Title Native ↑`},TITLE_NATIVE_DESC:{id:`TITLE_NATIVE_DESC`,label:`Title Native ↓`},FORMAT:{id:`FORMAT`,label:`Format ↑`},FORMAT_DESC:{id:`FORMAT_DESC`,label:`Format ↓`},START_DATE:{id:`START_DATE`,label:`Start Date ↑`},START_DATE_DESC:{id:`START_DATE_DESC`,label:`Start Date ↓`},END_DATE:{id:`END_DATE`,label:`End Date ↑`},END_DATE_DESC:{id:`END_DATE_DESC`,label:`End Date ↓`},SCORE:{id:`SCORE`,label:`Score ↑`},SCORE_DESC:{id:`SCORE_DESC`,label:`Score ↓`},POPULARITY:{id:`POPULARITY`,label:`Popularity ↑`},POPULARITY_DESC:{id:`POPULARITY_DESC`,label:`Popularity ↓`},TRENDING:{id:`TRENDING`,label:`Trending ↑`},TRENDING_DESC:{id:`TRENDING_DESC`,label:`Trending ↓`},STATUS:{id:`STATUS`,label:`Status ↑`},STATUS_DESC:{id:`STATUS_DESC`,label:`Status ↓`},CHAPTERS:{id:`CHAPTERS`,label:`Chapters ↑`},CHAPTERS_DESC:{id:`CHAPTERS_DESC`,label:`Chapters ↓`},VOLUMES:{id:`VOLUMES`,label:`Volumes ↑`},VOLUMES_DESC:{id:`VOLUMES_DESC`,label:`Volumes ↓`},UPDATED_AT:{id:`UPDATED_AT`,label:`Updated At ↑`},UPDATED_AT_DESC:{id:`UPDATED_AT_DESC`,label:`Updated At ↓`},FAVOURITES:{id:`FAVOURITES`,label:`Favourites ↑`},FAVOURITES_DESC:{id:`FAVOURITES_DESC`,label:`Favourites ↓`}},L={ORIGINAL:{id:`ORIGINAL`,label:`Original`},MANGA:{id:`MANGA`,label:`Manga`},LIGHT_NOVEL:{id:`LIGHT_NOVEL`,label:`Light Novel`},WEB_NOVEL:{id:`WEB_NOVEL`,label:`Web Novel`},NOVEL:{id:`NOVEL`,label:`Novel`},Anime:{id:`ANIME`,label:`Anime`},VISUAL_NOVEL:{id:`VISUAL_NOVEL`,label:`Visual Novel`},VIDEO_GAME:{id:`VIDEO_GAME`,label:`Video Game`},DOUJINSHI:{id:`DOUJINSHI`,label:`Doujinshi`},COMIC:{id:`COMIC`,label:`Comic`},LIVE_ACTION:{id:`LIVE_ACTION`,label:`Live Action`},GAME:{id:`GAME`,label:`Game`},MULTIMEDIA_PROJECT:{id:`MULTIMEDIA_PROJECT`,label:`Multimedia Project`},PICTURE_BOOK:{id:`PICTURE_BOOK`,label:`Picture Book`},OTHER:{id:`OTHER`,label:`Other`}},R=`
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
`;async function z(e,t,n){let r={url:`https://graphql.anilist.co`,method:`POST`,headers:{"Content-Type":`application/json`,Accept:`application/json`},body:JSON.stringify({query:e,variables:n})};if(t){let e=Application.getSecureState(`session`);if(e==null)throw Error(`You are not authenticated, please log in through the AniList settings`);let t=e.split(`.`)[1];if(t===void 0)throw Application.setSecureState(null,`session`),Error(`Invalid JWT payload (undefined)`);let n=Application.base64Decode(t);if(n instanceof ArrayBuffer)throw Application.setSecureState(null,`session`),Error(`Invalid JWT payload (non base64 decodable)`);let i;try{i=JSON.parse(n)}catch{throw Application.setSecureState(null,`session`),Error(`Invalid JWT payload (JSON parse error)`)}if(Number(i.exp)<new Date().valueOf()/1e3)throw Application.setSecureState(null,`session`),Application.setState(null,`viewer-id`),Error(`Your authorization token has expired, please log back in through the AniList settings`);r.headers.Authorization=`Bearer `+e}let[i,a]=await Application.scheduleRequest(r),o=Application.arrayBufferToUTF8String(a),s=JSON.parse(o);if(typeof s!=`object`||!s||!(`data`in s||`error`in s))throw Error(`Failed to parse JSON object: ${String(s)}`);let c=s;if(c.errors!=null){let e=``;for(let t=0;t<c.errors.length;t++)t!=0&&(e+=`
`),e+=`AniList returned an error: [${c.errors[t].status}] ${c.errors[t].message}`;throw Error(e)}return c.data}function B(){return Application.getState(`setting-synonyms-in-titles`)}var V=class extends a{getSections(){return Application.getSecureState(`session`)==null?[s(`no-session`,[this.loginButton()])]:[s(`session`,[this.profileViewNavigation(),this.logOutButton()]),s(`settings`,[this.synonymsToggle()])]}loginButton(){return y(`login`,{title:`Log In`,subtitle:`Log in to AniList to automatically sync your library and reading progress.`,onSuccess:Application.Selector(this,`handleLoginSuccess`),authorizeEndpoint:`https://anilist.co/api/v2/oauth/authorize?client_id=6621&response_type=token`,responseType:{type:`token`},clientId:`6621`})}profileViewNavigation(){return v(`profile-view`,{title:`View Profile`,form:new ee})}logOutButton(){return _(`log-out`,{title:`Log Out`,onSelect:Application.Selector(this,`logOut`)})}synonymsToggle(){return m(`synonyms`,{title:`Display title synonyms if the title is not in English`,value:B()??!1,onValueChange:Application.Selector(this,`handleSynonymsToggle`)})}async handleSynonymsToggle(e){Application.setState(e,`setting-synonyms-in-titles`),Application.invalidateDiscoverSections(),this.reloadForm()}async handleLoginSuccess(e){Application.setSecureState(e,`session`);let t=await z(R,!0);Application.setState(t.Viewer.id,`viewer-id`),this.reloadForm()}async logOut(){Application.setSecureState(null,`session`),Application.setState(null,`viewer-id`),this.reloadForm()}},ee=class extends a{constructor(...e){super(...e),i(this,`loadRequest`,void 0),i(this,`viewer`,void 0),i(this,`error`,void 0)}formWillAppear(){this.loadRequest=z(R,!0).then(e=>{this.viewer=e}).catch(e=>{this.error=e}).finally(()=>{this.reloadForm()})}getSections(){return this.viewer==null&&this.error==null?[s(`loading`,[d(`loading`,{title:`Loading...`})])]:this.error==null?[...this.getProfileSection(this.viewer),this.getSessionSection()]:[s(`error`,[d(`error`,{title:`Error`,subtitle:this.error.toString()})])]}getProfileSection(e){return[s({id:`profile-data`,header:`Profile`},[d(`username-id`,{title:`Username`,value:e.Viewer.name,subtitle:`Id: `+e.Viewer.id.toString()}),d(`creation-date`,{title:`Creation Date`,value:new Date(e.Viewer.createdAt*1e3).toLocaleString()})]),s({id:`manga-list-settings`,header:`Manga List Settings`,footer:`At a later time these will become editable, please use the website (aniList.co) for now.`},[d(`advanced-scoring-enabled`,{title:`Advanced Scoring Enabled`,value:e.Viewer.mediaListOptions.mangaList.advancedScoringEnabled?`True`:`False`}),h(`advanced-scoring-fields`,{title:`Advanced Scoring Fields`,layout:`list`,items:e.Viewer.mediaListOptions.mangaList.advancedScoring.map(e=>({id:e.toLowerCase().replaceAll(` `,`-`),title:e})),value:[],minItemCount:0,maxItemCount:1,onValueChange:Application.Selector(this,`noOp`)}),h(`custom-lists`,{title:`Custom Lists`,layout:`list`,items:e.Viewer.mediaListOptions.mangaList.customLists.map(e=>({id:e.toLowerCase().replaceAll(` `,`-`),title:e})),value:[],minItemCount:0,maxItemCount:1,onValueChange:Application.Selector(this,`noOp`)}),d(`split-completed-list-by-format`,{title:`Split Completed List by Format`,value:e.Viewer.mediaListOptions.mangaList.splitCompletedSectionByFormat?`True`:`False`}),h(`list-order`,{title:`List Order`,layout:`list`,items:e.Viewer.mediaListOptions.mangaList.sectionOrder.map(e=>({id:e.toLowerCase().replaceAll(` `,`-`),title:e})),value:[],minItemCount:0,maxItemCount:1,onValueChange:Application.Selector(this,`noOp`)})])]}async noOp(e){}getSessionSection(){let e=Application.getSecureState(`session`).split(`.`)[1];if(e===void 0)throw Application.setSecureState(null,`session`),Error(`Invalid JWT payload (undefined)`);let t=Application.base64Decode(e);if(t instanceof ArrayBuffer)throw Application.setSecureState(null,`session`),Error(`Invalid JWT payload (non base64 decodable)`);let n;try{n=JSON.parse(t)}catch{throw Application.setSecureState(null,`session`),Error(`Invalid JWT payload (JSON parse error)`)}let r=[];for(let[e,t]of Object.entries(n)){let n={title:e};e==`jti`?n.subtitle=String(t):n.value=String(t)||`Undefined`,r.push(d(e,n))}return s({id:`session-data`,header:`Session`},r)}};async function H(e,t,n,r,i){let a=[],o=await z(e,n,t),s=o.Page.media;for(let e of s){let t=``;switch(e.format){case`NOVEL`:t+=`(`+P.NOVEL.label+`) `;break;case`ONE_SHOT`:t+=`(`+P.ONE_SHOT.label+`) `}t+=e.title.english??e.title.romaji??e.title.native??`No Title`,B()==1&&e.synonyms.length>0&&!e.title.english&&(t+=` / `+e.synonyms[0]);let n=e.isAdult?A.ADULT:e.genres.some(e=>e==`ecchi`)?A.MATURE:A.EVERYONE,r;switch(e.status){case F.FINISHED.id:if(!e.chapters&&!e.volumes){r=F.FINISHED.label;break}r=[e.chapters?`Chs. `+e.chapters.toString():``,e.volumes?`Vols. `+e.volumes.toString():``].join(` `);break;case F.NOT_YET_RELEASED.id:r=F.NOT_YET_RELEASED.label;break;case F.CANCELLED.id:r=F.CANCELLED.label;break;case F.HIATUS.id:r=F.HIATUS.label;break;case F.RELEASING.id:r=F.RELEASING.label}let o,s;if(i){let t,n;for(let r of e.staff.edges){if(r.role.startsWith(`Story & Art`)){t=r.node.name.full,n=void 0;break}if(!t&&(r.role.startsWith(`Story`)||r.role.startsWith(`Original Story`))&&(t=r.node.name.full,t&&n)||r.role.startsWith(`Art`)&&(n=r.node.name.full,t&&n))break}t&&n?o=`${t}, ${n}`:t?o=t:n&&(o=n),e.averageScore&&(s=[{symbol:`book`,text:r},{symbol:`percent`,text:`${e.averageScore}`}])}a.push({mangaId:e.id.toString(),title:t,imageUrl:e.coverImage.large,contentRating:n,subtitle:r,supertitle:o,infoItems:s})}return r=o.Page.pageInfo.hasNextPage?(r??1)+1:void 0,{items:a,metadata:r}}function U(e,t){t.forEach(t=>{Object.getOwnPropertyNames(t.prototype).forEach(n=>{Object.defineProperty(e.prototype,n,Object.getOwnPropertyDescriptor(t.prototype,n)||Object.create(null))})})}var W=class{async getDiscoverSections(){return[{id:`trending-now`,title:`Trending Now`,type:j.featured},{id:`all-time-popular`,title:`All Time Popular`,type:j.prominentCarousel},{id:`popular-manga`,title:`Popular Manga`,type:j.simpleCarousel},{id:`popular-manhwa`,title:`Popular Manhwa`,type:j.simpleCarousel},{id:`top-100-manga`,title:`Top 100 Manga`,type:j.prominentCarousel}]}async getDiscoverSectionItems(e,t){let n,r,i;switch(e.id){case`trending-now`:n=I.TRENDING_DESC.id,i=!0;break;case`all-time-popular`:n=I.POPULARITY_DESC.id;break;case`popular-manga`:n=I.POPULARITY_DESC.id,r=N.JP.id;break;case`popular-manhwa`:n=I.POPULARITY_DESC.id,r=N.KR.id;break;case`top-100-manga`:n=I.SCORE_DESC.id;break}return H(M,{page:t??1,sort:n,countryOfOrigin:r},!1,t,i)}};function G(e){let t=e.id.toString(),n=e.description?e.description.replaceAll(/<br>|<i>|<\/i>|<a.*?>|<\/a>/g,``):`No description`;n+=e.synonyms.length>0?`

Synonyms: `+e.synonyms.join(`, `)+`

`:``;let r=[];for(let t of Object.values(e.title))t!=null&&r.push(t);for(let t of e.synonyms)r.push(t);let i=e.title.english??e.title.romaji??e.title.native??`No Title`;B()==1&&e.synonyms.length>0&&!e.title.english&&(i+=`
`+e.synonyms[0]);let a;switch(e.status){case F.FINISHED.id:a=F.FINISHED.label;break;case F.NOT_YET_RELEASED.id:a=F.NOT_YET_RELEASED.label;break;case F.CANCELLED.id:a=F.CANCELLED.label;break;case F.HIATUS.id:a=F.HIATUS.label;break;case F.RELEASING.id:a=F.RELEASING.label}let o,s;for(let t of e.staff.edges){if(t.role.startsWith(`Story & Art`)){o=t.node.name.full,s=void 0;break}if(!o&&(t.role.startsWith(`Story`)||t.role.startsWith(`Original Story`))&&(o=t.node.name.full,o&&s)||t.role.startsWith(`Art`)&&(s=t.node.name.full,o&&s))break}let c=e.averageScore?e.averageScore/100:void 0,l=[];for(let t of e.genres)l.push({id:t.replaceAll(` `,`_`).toLowerCase(),title:t});let u=[];for(let t of e.tags)u.push({id:t.id.toString().replaceAll(` `,`_`).toLowerCase(),title:t.name});let d=[{id:`genres`,title:`Genres`,tags:l},{id:`tags`,title:`Tags`,tags:u}],f=e.isAdult?A.ADULT:l.some(e=>e.id==`ecchi`)?A.MATURE:A.EVERYONE,p=[e.coverImage.extraLarge];e.bannerImage!=null&&p.push(e.bannerImage);let m={Format:e.format==P.MANGA.id?P.MANGA.label:e.format==P.NOVEL.id?P.NOVEL.label:P.ONE_SHOT.label};return{mangaId:t,mangaInfo:{thumbnailUrl:e.coverImage.extraLarge,synopsis:n,primaryTitle:i,secondaryTitles:r,contentRating:f,status:a,artist:s,author:o,bannerUrl:e.bannerImage??void 0,rating:c,tagGroups:d,artworkUrls:p,shareUrl:`https://anilist.co/manga/`+t,additionalInfo:m}}}var K=class{async getManagedLibraryCollections(){let e=await z(R,!0),t={Reading:{status:`CURRENT`,matched:!1},Planning:{status:`PLANNING`,matched:!1},Completed:{status:`COMPLETED`,matched:!1},"Completed Manga":{status:`COMPLETED`,matched:!1},"Completed One Shot":{status:`COMPLETED`,matched:!1},"Completed Novel":{status:`COMPLETED`,matched:!1},Dropped:{status:`DROPPED`,matched:!1},Paused:{status:`PAUSED`,matched:!1},Rereading:{status:`REPEATING`,matched:!1}};return e.Viewer.mediaListOptions.mangaList.sectionOrder.map(n=>{let r,i,a=t[n];return a&&a.matched==0?(r=`false`,i=t[n].status,t[n].matched=!0):(r=`true`,i=`null`),{id:`${e.Viewer.id.toString()}-${r}-${i}-${n.toLowerCase().replaceAll(` `,`-`)}`,title:n}})}async commitManagedCollectionChanges(e){throw Error(`Pushing changes to AniList via collection management is not supported at this moment, use progress tracking instead.`)}async getSourceMangaInManagedCollection(e){let t=[],[n,r,i]=e.id.split(`-`,4),a=r===`true`,o=a?`
query MediaListCollection(
  $userId: Int
  $chunk: Int
) {
  MediaListCollection(
    userId: $userId
    type: MANGA
    chunk: $chunk
    perChunk: 500
  ) {
    lists {
      name
      isCustomList
      entries {
        media {
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
          id
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
    }
    hasNextChunk
  }
}
`:`
query MediaListCollection(
  $userId: Int
  $chunk: Int
  $status: MediaListStatus
) {
  MediaListCollection(
    userId: $userId
    type: MANGA
    chunk: $chunk
    perChunk: 500
    status: $status
  ) {
    lists {
      name
      isCustomList
      entries {
        media {
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
          id
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
    }
    hasNextChunk
  }
}
`,s=a?{userId:+n,chunk:1}:{userId:+n,chunk:1,status:i};for(;;){let{lists:n,hasNextChunk:r}=(await z(o,!0,s)).MediaListCollection,i=n.find(t=>t.name===e.title);i&&t.push(...i.entries.map(e=>G(e.media)));let c=n.some(t=>t.name===e.title&&t.isCustomList===a)&&n.at(-1).name!==e.title;if(!r||c)break;s.chunk+=1}return t}},q=class{async getMangaDetails(e){return G((await z(`
query Query($id: Int) {
  Media(id: $id) {
    averageScore
    bannerImage
    coverImage {
      extraLarge
      large
      medium
    }
    chapters
    description
    format
    genres
    id
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
    synonyms
    tags {
      id
      name
    }
    title {
      english
      native
      romaji
    }
    volumes
  }
}
`,!1,{id:Number(e)})).Media)}};let J=`
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
`,Y={CURRENT:{id:`CURRENT`,label:`Reading`},PLANNING:{id:`PLANNING`,label:`Planning`},COMPLETED:{id:`COMPLETED`,label:`Completed`},DROPPED:{id:`DROPPED`,label:`Dropped`},PAUSED:{id:`PAUSED`,label:`Paused`},REPEATING:{id:`REPEATING`,label:`Rereading`}},X=`
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
`;var Z=class extends a{constructor(e,t){super(),i(this,`viewerId`,void 0),i(this,`sourceMangaId`,void 0),i(this,`loadRequest`,void 0),i(this,`titleProgress`,void 0),i(this,`error`,void 0),i(this,`requiresExplicitSubmission`,!0),this.viewerId=e,this.sourceMangaId=t}formWillAppear(){let e={userId:this.viewerId,mediaId:this.sourceMangaId};this.loadRequest=z(J,!0,e).then(e=>{this.titleProgress||(this.titleProgress=e)}).catch(e=>{e?.toString().includes(`[404]`)||(this.error=e);let t={MediaList:{advancedScores:{},completedAt:{day:null,month:null,year:null},createdAt:Date.now()/1e3,customLists:{},hiddenFromStatusLists:!1,notes:null,private:!1,progress:0,progressVolumes:0,repeat:0,score:0,startedAt:{day:null,month:null,year:null},status:`CURRENT`,updatedAt:Date.now()/1e3}};this.titleProgress||(this.titleProgress=t)}).finally(()=>{this.reloadForm()})}async formDidSubmit(){if(this.titleProgress==null)return;let e=this.titleProgress.MediaList;await z(X,!0,{userId:this.viewerId,mediaId:this.sourceMangaId,status:e.status,score:e.score,progress:e.progress,progressVolumes:e.progressVolumes,repeat:e.repeat,private:e.private,notes:e.notes,hiddenFromStatusLists:e.hiddenFromStatusLists})}formDidCancel(){}getSections(){let e=[];if(this.titleProgress==null&&this.error==null)return[s(`loading`,[d(`loading`,{title:`Loading...`})])];if(this.error!=null)return[s(`error`,[d(`error`,{title:`Error`,subtitle:this.error.toString()})])];let t=this.titleProgress.MediaList;t.id??e.push(this.getNewMediaListEntrySection());let n=[...this.getProgressSections(),...this.getScoreSections(),this.getPrivacySection(),this.getNotesSection()];for(let t of n)e.push(t);return t.id!=null&&e.push(this.getDeleteSection()),e}getNewMediaListEntrySection(){return s(`newMediaListEntry`,[d(`newMediaListEntry`,{title:`New Media List Entry`,subtitle:`Selecting Done will add this item to your media list`})])}getProgressSections(){let e=this.titleProgress.MediaList,t=[];for(let e of Object.keys(Y)){let n=Y[e];t.push({id:n.id,title:n.label})}let n={title:`Status`,value:[e.status.toString()],minItemCount:1,maxItemCount:1,options:t,onValueChange:Application.Selector(this,`statusUpdate`)},r={title:`Chapters`,subtitle:`The highest read chapter number`,value:e.progress,minValue:0,maxValue:99999,stepValue:1,loopOver:!1,onValueChange:Application.Selector(this,`chapterProgressUpdate`)},i={title:`Volumes`,subtitle:`The highest read volume number`,value:e.progressVolumes,minValue:0,maxValue:99999,stepValue:1,loopOver:!1,onValueChange:Application.Selector(this,`volumeProgressUpdate`)},a={title:`Reread Count`,subtitle:`The amount of times you have reread the title`,value:e.repeat,minValue:0,maxValue:99999,stepValue:1,loopOver:!1,onValueChange:Application.Selector(this,`rereadCountUpdate`)};return[s({id:`progress`,header:`Progress`},[h(`status`,n),p(`chapterProgress`,r),p(`volumeProgress`,i),p(`rereadCount`,a)])]}async statusUpdate(e){this.titleProgress.MediaList.status=e[0]}async chapterProgressUpdate(e){this.titleProgress.MediaList.progress=e,this.reloadForm()}async volumeProgressUpdate(e){this.titleProgress.MediaList.progressVolumes=e,this.reloadForm()}async rereadCountUpdate(e){this.titleProgress.MediaList.repeat=e,this.reloadForm()}getScoreSections(){return[s({id:`score`,header:`Score`},[p(`score`,{title:`Score`,subtitle:``,value:this.titleProgress.MediaList.score,minValue:0,maxValue:10,stepValue:.1,loopOver:!1,onValueChange:Application.Selector(this,`scoreUpdate`)})])]}async scoreUpdate(e){this.titleProgress.MediaList.score=Number(e.toFixed(1)),this.reloadForm()}getPrivacySection(){let e=this.titleProgress.MediaList,t={title:`Private`,value:e.private,onValueChange:Application.Selector(this,`privateUpdate`)},n={title:`Hidden From Status Lists`,value:e.hiddenFromStatusLists,onValueChange:Application.Selector(this,`hiddenFromStatusListsUpdate`)};return s({id:`privacy`,header:`Privacy`},[m(`private`,t),m(`hiddenFromStatusLists`,n)])}async privateUpdate(e){this.titleProgress.MediaList.private=e}async hiddenFromStatusListsUpdate(e){this.titleProgress.MediaList.hiddenFromStatusLists=e}getNotesSection(){return s({id:`notes`,header:`Notes`,footer:`Only you can see your notes`},[f(`notes`,{title:`Notes`,value:this.titleProgress.MediaList.notes??``,onValueChange:Application.Selector(this,`updateNotes`)})])}async updateNotes(e){this.titleProgress.MediaList.notes=e}getDeleteSection(){return s({id:`delete`,footer:`Delete the title from your media list`},[v(`delete`,{title:`Delete`,form:new Q(this.titleProgress.MediaList.id)})])}},Q=class extends a{constructor(e){super(),i(this,`mediaListId`,void 0),this.mediaListId=e}getSections(){return this.mediaListId==null?[s(`deleted`,[d(`deleted`,{title:`Deleted`,subtitle:`The title has been succesfully deleted from your media list`})])]:[s({id:`delete`,footer:`WARNING: All media list data will be deleted, this action can not be undone`},[_(`delete`,{title:`Delete`,onSelect:Application.Selector(this,`onDeletion`)})])]}async onDeletion(){(await z(`
mutation Mutation($deleteMediaListEntryId: Int) {
  DeleteMediaListEntry(id: $deleteMediaListEntryId) {
    deleted
  }
}
`,!0,{deleteMediaListEntryId:this.mediaListId})).DeleteMediaListEntry.deleted&&(this.mediaListId=null,this.reloadForm())}},te=class{async getMangaProgressManagementForm(e){let t=Number(Application.getState(`viewer-id`));if(isNaN(t))throw Error(`You are not authenticated, please log in through the AniList settings`);return new Z(t,Number(e.mangaId))}async getMangaProgress(e){let t=Number(Application.getState(`viewer-id`));if(isNaN(t))throw Error(`You are not authenticated, please log in through the AniList settings`);let n={userId:t,mediaId:Number(e.mangaId)},r;try{r=(await z(J,!0,n)).MediaList}catch(e){if(!e?.toString().includes(`[404]`))throw e;return}let i={chapterId:String(r.progress),sourceManga:e,langCode:`unknown`,chapNum:r.progress,volume:r.progressVolumes},a=new Date(0);return a.setUTCSeconds(r.updatedAt),{sourceManga:e,lastReadChapter:i,lastReadTime:a,userRating:r.score}}async processChapterReadActionQueue(e){let t=Number(Application.getState(`viewer-id`)),n={successfulItems:[],failedItems:[]};if(isNaN(t))return n;let r=new Map;for(let t of e)(r.get(t.sourceManga.mangaId)??0)<Math.floor(t.chapterNum)&&r.set(t.sourceManga.mangaId,Math.floor(t.chapterNum));for(let i of e){if((r.get(i.sourceManga.mangaId)??0)!=Math.floor(i.chapterNum)){n.successfulItems.push(i.id);continue}try{let e={userId:t,mediaId:Number(i.sourceManga.mangaId)},r;try{r=(await z(J,!0,e)).MediaList}catch(e){if(!e?.toString().includes(`[404]`)){n.failedItems.push(i.id);continue}}if(r?.progress&&r.progress>=i.chapterNum){n.successfulItems.push(i.id);continue}let a={userId:t,mediaId:Number(i.sourceManga.mangaId),progress:Math.floor(i.chapterNum)};r||(a.status=Y.CURRENT.id),i.chapterVolume&&(r?.progressVolumes??0)<Math.floor(i.chapterVolume)&&(a.progressVolumes=Math.floor(i.chapterVolume)-1),await z(X,!0,a),n.successfulItems.push(i.id)}catch{n.failedItems.push(i.id)}}return n}},ne=class extends S{constructor(e){super(),i(this,`genreOptions`,[]),i(this,`tagOptions`,[]),i(this,`optionsLoaded`,!1),i(this,`loadError`,void 0),i(this,`genres`,void 0),i(this,`formats`,void 0),i(this,`statuses`,void 0),i(this,`countryOfOrigin`,void 0),i(this,`sourceMaterials`,void 0),i(this,`startYears`,void 0),i(this,`chapterCounts`,void 0),i(this,`volumeCounts`,void 0),i(this,`flags`,void 0),i(this,`tags`,void 0),this.loadOptions().then(({genres:e,tags:t})=>{this.genreOptions=e.GenreCollection.map(e=>({id:e.replaceAll(` `,`_`),title:e})),this.tagOptions=t.MediaTagCollection.map(e=>({id:e.name.replaceAll(` `,`_`).replaceAll(`'`,`?`),title:e.name})),this.optionsLoaded=!0}).catch(e=>{this.loadError=e}).finally(()=>{this.reloadForm()});let t=e.metadata??{};this.genres={...t.genres},this.formats={...t.formats},this.statuses={...t.publishingStatuses},this.countryOfOrigin=t.countryOfOrigin??[],this.sourceMaterials=t.sourceMaterials??[],this.startYears=t.startYears??``,this.chapterCounts=t.chapterCounts??``,this.volumeCounts=t.volumeCounts??``,this.flags={...t.flags},this.tags={...t.tags}}async loadOptions(){if(Number(Application.getState(`search-filters-query-date`)??0)+604800>new Date().valueOf()/1e3)return{genres:JSON.parse(Application.getState(`genres`)),tags:JSON.parse(Application.getState(`tags`))};let e=await z(`
query Query {
  GenreCollection
}
`,!1),t=await z(`
query Query {
  MediaTagCollection {
    isAdult
    name
  }
}
`,!1);return Application.setState(JSON.stringify(e),`genres`),Application.setState(JSON.stringify(t),`tags`),Application.setState(String(new Date().valueOf()/1e3),`search-filters-query-date`),{genres:e,tags:t}}getSections(){return this.loadError?[s(`error`,[d(`error`,{title:`Error`,subtitle:this.loadError.toString()})])]:this.optionsLoaded?[s({id:`filters`},[g(`genres`,{title:`Genres`,layout:`flow`,value:this.genres,items:this.genreOptions,allowExclusion:!0,allowEmptySelection:!0,onValueChange:Application.Selector(this,`handleGenresChange`)})]),u(this,{id:`formats`,header:`Formats`,layout:`list`,value:this.formats,items:Object.values(P).map(e=>({id:e.id,title:e.label})),allowExclusion:!0,allowEmptySelection:!0}),u(this,{id:`publishing-statuses`,header:`Publishing Statuses`,layout:`list`,value:this.statuses,items:Object.values(F).map(e=>({id:e.id,title:e.label})),allowExclusion:!0,allowEmptySelection:!0}),l(this,{id:`country-of-origin`,header:`Country of Origin`,layout:`list`,value:this.countryOfOrigin,items:Object.values(N).map(e=>({id:e.id,title:e.label})),minItemCount:0,maxItemCount:1}),s({id:`advanced-filters`},[h(`source-materials`,{title:`Source Materials`,layout:`list`,value:this.sourceMaterials,options:Object.values(L).map(e=>({id:e.id,title:e.label})),minItemCount:0,maxItemCount:Object.values(L).length,onValueChange:Application.Selector(this,`handleSourceMaterialsChange`)})]),u(this,{id:`flags`,header:`Flags`,layout:`list`,value:this.flags,items:[{id:`adult`,title:`Adult`},{id:`doujin`,title:`Doujin`},{id:`trackedTitles`,title:`Tracked Titles`}],allowExclusion:!0,allowEmptySelection:!0}),s({id:`tags`},[g(`tags`,{title:`Tags`,layout:`flow`,value:this.tags,items:this.tagOptions,allowExclusion:!0,allowEmptySelection:!0,onValueChange:Application.Selector(this,`handleTagsChange`)})]),s({id:`ranges`,header:`Ranges`,footer:`For each field, give a single value or two values separated by "-" for a range.`},[f(`start-years`,{title:`Start Years`,value:this.startYears,onValueChange:Application.Selector(this,`handleStartYearsChange`)}),f(`chapter-counts`,{title:`Chapter Counts`,value:this.chapterCounts,onValueChange:Application.Selector(this,`handleChapterCountsChange`)}),f(`volume-counts`,{title:`Volume Counts`,value:this.volumeCounts,onValueChange:Application.Selector(this,`handleVolumeCountsChange`)})])]:[s(`loading`,[d(`loading`,{title:`Loading...`})])]}async handleGenresChange(e){this.genres=e}async handleSourceMaterialsChange(e){this.sourceMaterials=e}async handleStartYearsChange(e){this.startYears=e}async handleChapterCountsChange(e){this.chapterCounts=e}async handleVolumeCountsChange(e){this.volumeCounts=e}async handleTagsChange(e){this.tags=e}getSearchQueryMetadata(){let e={};return Object.keys(this.genres).length>0&&(e.genres=this.genres),Object.keys(this.formats).length>0&&(e.formats=this.formats),Object.keys(this.statuses).length>0&&(e.publishingStatuses=this.statuses),this.countryOfOrigin.length===1&&(e.countryOfOrigin=this.countryOfOrigin),this.sourceMaterials.length>0&&(e.sourceMaterials=this.sourceMaterials),this.startYears&&(e.startYears=this.startYears),this.chapterCounts&&(e.chapterCounts=this.chapterCounts),this.volumeCounts&&(e.volumeCounts=this.volumeCounts),Object.keys(this.flags).length>0&&(e.flags=this.flags),Object.keys(this.tags).length>0&&(e.tags=this.tags),e}},re=class extends q{async getAdvancedSearchForm(e){return new ne(e)}async getSortingOptions(e){let t=[];for(let e of Object.keys(I)){let n=I[e];t.push({id:n.id,label:n.label})}return t}async getSearchResults(e,t,n){let r=!1,i={page:t??1,sort:n.id};e.title&&(i.search=e.title);let a=e.metadata??{};if(a.genres){let e=[],t=[];for(let[n,r]of Object.entries(a.genres))switch(r){case`included`:e.push(n.replaceAll(`_`,` `));break;case`excluded`:t.push(n.replaceAll(`_`,` `));break}e.length>0&&(i.genreIn=e),t.length>0&&(i.genreNotIn=t)}if(a.formats){let e=[],t=[];for(let[n,r]of Object.entries(a.formats))switch(r){case`included`:e.push(n);break;case`excluded`:t.push(n);break}e.length>0&&(i.formatIn=e),t.length>0&&(i.formatNotIn=t)}if(a.publishingStatuses){let e=[],t=[];for(let[n,r]of Object.entries(a.publishingStatuses))switch(r){case`included`:e.push(n);break;case`excluded`:t.push(n);break}e.length>0&&(i.statusIn=e),t.length>0&&(i.statusNotIn=t)}if(a.countryOfOrigin&&(i.countryOfOrigin=a.countryOfOrigin[0]),a.sourceMaterials&&a.sourceMaterials.length>0&&(i.sourceIn=a.sourceMaterials),a.startYears){let e=a.startYears.split(`-`).map(e=>Number(e));if(e.length>0&&e.length<=2&&!e.includes(NaN)&&e.every(e=>e>=0&&e<=9999))switch(e.length){case 1:i.startDateGreater=Number((e[0]-1).toString().padStart(4,`0`))*1e4,i.startDateLesser=Number((e[0]+1).toString().padStart(4,`0`))*1e4;break;case 2:e[0]<=e[1]&&(i.startDateGreater=Number(e[0].toString().padStart(4,`0`))*1e4,i.startDateLesser=Number(e[1].toString().padStart(4,`0`))*1e4);break}}if(a.chapterCounts){let e=a.chapterCounts.split(`-`).map(e=>Number(e));if(e.length>0&&e.length<=2&&!e.includes(NaN)&&e.every(e=>e>=0))switch(e.length){case 1:i.chaptersGreater=e[0]-1,i.chaptersLesser=e[0]+1;break;case 2:e[0]<=e[1]&&(i.chaptersGreater=e[0],i.chaptersLesser=e[1]);break}}if(a.volumeCounts){let e=a.volumeCounts.split(`-`).map(e=>Number(e));if(e.length>0&&e.length<=2&&!e.includes(NaN)&&e.every(e=>e>=0))switch(e.length){case 1:i.volumesGreater=e[0]-1,i.volumesLesser=e[0]+1;break;case 2:e[0]<=e[1]&&(i.volumesGreater=e[0],i.volumesLesser=e[1]);break}}if(a.flags)for(let[e,t]of Object.entries(a.flags))switch(e){case`adult`:switch(t){case`included`:i.isAdult=!0;break;case`excluded`:i.isAdult=!1;break}break;case`doujin`:switch(t){case`included`:i.isLicensed=!1;break;case`excluded`:i.isLicensed=!0;break}break;case`trackedTitles`:switch(t){case`included`:i.onList=!0,r=!0;break;case`excluded`:i.onList=!1,r=!0;break}break}if(a.tags){let e=[],t=[];for(let[n,r]of Object.entries(a.tags))switch(r){case`included`:e.push(n.replaceAll(`_`,` `).replaceAll(`?`,`'`));break;case`excluded`:t.push(n.replaceAll(`_`,` `).replaceAll(`?`,`'`));break}e.length>0&&(i.tagIn=e),t.length>0&&(i.tagNotIn=t)}return H(M,i,r,t)}},ie=class{async getSettingsForm(){return new V}},ae=class extends C{async interceptRequest(e){return e}async interceptResponse(e,t,n){return n}},$=class{constructor(){i(this,`mainRateLimiter`,new O(`main`,{numberOfRequests:1,bufferInterval:2,ignoreImages:!0})),i(this,`mainInterceptor`,new ae(`main`))}async initialise(){this.mainRateLimiter.registerInterceptor(),this.mainInterceptor.registerInterceptor()}};return U($,[ie,re,W,q,te,K]),e.AniList=new $,e.AniListExtension=$,e})({});