var applicationKey = "xbk1olhzg7tw";
var allowAuthorize = true;
var frameworkUrl = "http://platform.linkedin.com/in.js";
var fields = ["id", "first-name", "last-name", "maiden-name", "formatted-name", "phonetic-first-name", "phonetic-last-name", "formatted-phonetic-name", "headline", "location:(name,country:(code))", "industry", "distance", "relation-to-viewer:(distance)", "current-share", "num-connections", "num-connections-capped", "summary", "specialties", "positions:(id,title,summary,start-date,end-date,is-current,company:(id,name,type,size,industry,ticker))", "picture-url", "site-standard-profile-request", "api-standard-profile-request:(headers,url)", "public-profile-url", "email-address", "last-modified-timestamp", "proposal-comments", "associations", "honors", "interests", "publications:(id,title,publisher:(name),authors:(id,name,person),date,url,summary)", "patents:(id,title,summary,number,status:(id,name),office:(name),inventors:(id,name,person),date,url)", "languages:(id,language:(name),proficiency:(level,name))", "skills:(id,skill:(name))", "certifications:(id,name,authority:(name),number,start-date,end-date)", "educations:(id,school-name,field-of-study,start-date,end-date,degree,activities,notes)", "courses:(id,name,number)", "volunteer:(volunteer-experiences:(id,role),causes:(name),supported-organizations:(name))", "three-current-positions", "three-past-positions", "num-recommenders", "recommendations-received:(id,recommendation-type,recommendation-text,recommender)", "mfeed-rss-url", "following", "job-bookmarks", "suggestions", "date-of-birth", "member-url-resources:(url,name)", "related-profile-views", "phone-numbers", "bound-account-types", "im-accounts", "main-address", "twitter-accounts", "primary-twitter-account", "connections", "group-memberships"];

function LinkedInLoad() {
    IN.Event.on(IN, "auth", LinkedInAuth);
}

function LinkedInAuth() {
    IN.API.Profile("me").fields(fields).result(displayProfiles);
}

function displayProfiles(profiles) {
    member = profiles.values[0];

    // Here we will hook up the call to the section model
    $("#profiles").html(member.firstName);
}

function LinkedIn() {
    $("<script/>", {
        text:"api_key:" + applicationKey + "\nauthorize: " + allowAuthorize + "\nonLoad: " + LinkedInLoad.name + "\n",
        type:"text/javascript",
        src:frameworkUrl
    }).appendTo('head');
}