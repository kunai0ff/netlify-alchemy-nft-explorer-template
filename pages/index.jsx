<!DOCTYPE html>
<html lang="en" id="html">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">

<!--

    Vienna | Zen Themes
 
    Release Date: Nov 1th, 2013
    Last Update: Mar 24th, 2017

-->

<head>

<title>{Title}{block:PostSummary} - {PostSummary}{/block:PostSummary}</title>

<link rel="alternate" type="application/rss+xml" href="{RSS}">
<link rel="shortcut icon" href="{favicon}">
<meta name="description" content="{MetaDescription}"/>

{block:hidden}
<meta name="image:Background" content=""/>
<meta name="image:Cover" content=""/>
<meta name="image:Cover Logo" content=""/>

<meta name="color:Background" content="#f4f4f4"/>
<meta name="color:Body Text" content="#8a8a8a"/>
<meta name="color:Links" content="#12ad9e"/>
<meta name="color:Social Icons" content="#808080"/>
<meta name="color:Cover Title" content="#656565"/>
<meta name="color:Cover Description" content="#808080"/>
<meta name="color:Cover Description Divider" content="#c0c0c0"/>
<meta name="color:Navigation Bar" content="#ffffff"/>
<meta name="color:Navigation Bar Links" content="#616161"/>
<meta name="color:Navigation Bar Links Hover" content="#000000"/>
<meta name="color:Navigation Bar Dividers" content="#bbbbbb"/>
<meta name="color:Photo Overlay" content="#000000"/>
<meta name="color:Photo Overlay Effect" content="#000000"/>
<meta name="color:Post Background" content="#ffffff"/>
<meta name="color:Post Dividers" content="#dddddd"/>

<meta name="if:Animated Loading" content="1"/>
<meta name="if:Hover Style 1" content="1"/>
<meta name="if:Hover Style 2" content="0"/>
<meta name="if:Infinite Scrolling" content="1"/>
<meta name="if:Infinite Scrolling Animated" content="0"/>
<meta name="if:Photo Captions" content="0"/>
<meta name="if:Post Border" content="1"/>
<meta name="if:Post Rounded" content="0"/>
<meta name="if:Post Shadow" content="1"/>
<meta name="if:Show Social Icons" content="0"/>
<meta name="if:Show Archive Link" content="1"/>
<meta name="if:Show Random Link" content="0"/>
<meta name="if:Show RSS Link" content="0"/>
<meta name="if:Show Post Buttons" content="1"/>
<meta name="if:Show Post Tags" content="1"/>
<meta name="if:Sticked Navigation Bar" content="1"/>
<meta name="if:Wide Permalinkpage" content="0"/>
<meta name="if:Wide Posts" contetn="0"/>

<meta name="select:Title Font" content="Source Sans Pro" title="Sans Pro"/><meta name="select:Title Font" content="Arial" title="Arial"/><meta name="select:Title Font" content="Abel" title="Abel"/><meta name="select:Title Font" content="courier new" title="Courier"/><meta name="select:Title Font" content="Droid Sans" title="Droid Sans"/><meta name="select:Title Font" content="helvetica" title="Helvetica"/><meta name="select:Title Font" content="Karla" Title="Karla"/><meta name="select:Title Font" content="Mako" title="Mako"/><meta name="select:Title Font" content="Montserrat" title="Montserrat"/><meta name="select:Title Font" content="Noto Sans" title="Noto Sans"/><meta name="select:Title Font" content="PT Mono" title="PT Mono"/><meta name="select:Title Font" content="Raleway" title="Raleway"/><meta name="select:Title Font" content="Roboto Slab" title="Roboto Slab"/><meta name="select:Title Font" content="Ropa Sans" title="Ropa Sans"/><meta name="select:Title Font" content="Rokkitt" title="Rokkitt"/><meta name="select:Title Font" content="Times New Roman" title="Times New Roman"/><meta name="select:Body Font" content="Source Sans Pro" title="Sans Pro"/><meta name="select:Body Font" content="Abel" title="Abel"/><meta name="select:Body Font" content="Arial" title="Arial"/><meta name="select:Body Font" content="courier new" title="Courier"/><meta name="select:Body Font" content="Droid Sans" title="Droid Sans"/><meta name="select:Body Font" content="helvetica" title="Helvetica"/><meta name="select:Body Font" content="Karla" Title="Karla"/><meta name="select:Body Font" content="Mako" title="Mako"/><meta name="select:Body Font" content="Noto Sans" title="Noto Sans"/><meta name="select:Body Font" content="PT Mono" title="PT Mono"/><meta name="select:Body Font" content="Raleway" title="Raleway"/><meta name="select:Body Font" content="Roboto Slab" title="Roboto Slab"/><meta name="select:Body Font" content="Rokkitt" title="Rokkitt"/><meta name="select:Body Font" content="Ropa Sans" title="Ropa Sans"/><meta name="select:Body Font" content="Times New Roman" title="Times New Roman"/><meta name="select:Cover Dividers" content="dotted" title="Dotted"/><meta name="select:Cover Dividers" content="Dashed" title="Dashed"/><meta name="select:Cover Dividers" content="solid" title="Solid"/><meta name="select:Cover Dividers" content="none" title="none"/><meta name="select:Navigation Dividers" content="dotted" title="Dotted"/><meta name="select:Navigation Dividers" content="Dashed" title="Dashed"/><meta name="select:Navigation Dividers" content="solid" title="Solid"/><meta name="select:Navigation Dividers" content="none" title="none"/><meta name="select:Post Dividers" content="dotted" title="Dotted"/><meta name="select:Post Dividers" content="Dashed" title="Dashed"/><meta name="select:Post Dividers" content="solid" title="Solid"/><meta name="select:Post Dividers" content="none" title="none"/><meta name="select:Post Width" content="W_M" Title="Medium"/><meta name="select:Post Width" content="W_T" Title="Tiny"/><meta name="select:Post Width" content="W_S" Title="Small"/><meta name="select:Post Width" content="W_L" Title="Large"/><meta name="select:Post Width" content="W_H" Title="Huge"/>

<meta name="text:Archive Title" content="Archive"/>
<meta name="text:Ask Title" content="Message"/>
<meta name="text:Overlay Opacity" content=".35"/>
<meta name="text:Custom Link 1" content=""/>
<meta name="text:Custom Link 1 Title" content=""/>
<meta name="text:Custom Link 2" content=""/>
<meta name="text:Custom Link 2 Title" content=""/>
<meta name="text:Custom Link 3" content=""/>
<meta name="text:Custom Link 3 Title" content=""/>
<meta name="text:Custom Link 4" content=""/>
<meta name="text:Custom Link 4 Title" content=""/>
<meta name="text:Custom Link 5" content=""/>
<meta name="text:Custom Link 5 Title" content=""/>
<meta name="text:URL Flickr" content=""/>
<meta name="text:URL Vimeo" content=""/>
<meta name="text:URL Twitter" content=""/>
<meta name="text:URL Facebook" content=""/>
<meta name="text:URL Youtube" content=""/>
<meta name="text:URL Google Plus" content=""/>
<meta name="text:URL Pinterest" content=""/>
<meta name="text:URL Dribble" content=""/>
<meta name="text:URL Spotify" content=""/>
<meta name="text:URL Instagram" content=""/>
<meta name="text:URL Soundcloud" content=""/>
<meta name="text:URL Behance" content=""/>
<meta name="text:URL Linkedin" content=""/>
<meta name="text:URL Stumbleupon" content=""/>
<meta name="text:URL Lastfm" content=""/>
<meta name="text:URL Github" content=""/>
{/block:hidden}

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family={select:Body Font}:400,400italic,700"><link href='https://fonts.googleapis.com/css?family={select:Title Font}:400,700' rel='stylesheet' type='text/css'><link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css'><link rel='stylesheet' href='https://static.tumblr.com/3zmswwt/NG3o5n1ql/s.css' type='text/css'><style type="text/css">body{font:12px/1.6em "{select:Body Font}", san-serif;color:{color:Body Text};background:{color:background} url("{image:background}")}a,a:link,a:visited{text-decoration:none;color:{color:Links}}h1,h2,h3,h4,h5,#A,#P{font-family:{select:Title Font}}#A #C{background:url("{image:Cover}") no-repeat center;background-size:cover}#A #C h1 a{color:{color:Cover Title}}#A #S a{color:{color:Social Icons};background:{color:Navigation Bar}}#A #S a:hover{color:{color:Navigation Bar}}#A #D{color:{color:Cover Description};border-top:1px {select:Cover Dividers} {color:Cover Description Divider}}#A{background:{color:navigation bar} !important}{block:ifnotshowsocialicons}#A #N{border-top:1px {select:Navigation Dividers} {color:navigation bar Dividers}}{/block:ifnotshowsocialicons}{block:ifshowsocialicons}#A #S{border-bottom:1px {select:Cover Dividers} {color:Cover Description Divider}}{/block:ifshowsocialicons}#A #N li{border-left:1px {select:Navigation Dividers} {color:navigation bar Dividers}}#A #N li:last-child{border-right:1px {select:Navigation Dividers} {color:navigation bar Dividers}}#A #N li a{color:{color:navigation bar Links}}#A #N li a:hover{color:{color:Navigation Bar Links Hover}}.X{-webkit-transition:opacity .6s ease;transition:opacity .6s ease}.X,.PB{background:{color:Post Background}}.X:hover .P-H a.G{opacity:{text:Overlay Opacity}}.X .P .P-H a.G{background:{color:Photo Overlay}}.X .P .P-H .H-2 .U_C,.X .P .P-H .H-2 .L_C,.X .P .P-H .H-1 a{background:rgba({rgbcolor:Photo Overlay Effect},.65)}.X .P .P-H .H-2 .U_C:hover,.X .P .P-H .H-2 .L_C:hover,.X .P .P-H .H-1 a:hover{background:rgba({rgbcolor:Photo Overlay Effect},.8)}.X .T .QN{border-bottom:1px {select:Post Dividers} {color:Post Dividers}}.X .D{border-top:1px {select:Post Dividers} {color:Post Dividers}}.X .D a:hover{color:#777}.X .T a.L{background:{color:Links}}.X .P .P-H a.G{background:{color:Photo Overlay}}#P a{color:{color:Body Text}}#P a:hover,#P a.current{color:{color:Links} !important}#CDT{display:none !important}#A #N,.X,.PB{box-shadow:0 {block:ifpostshadow}1px 2px{/block:ifpostshadow}{block:ifnotpostshadow}0 1px{/block:ifnotpostshadow} 0 rgba(0,0,0,.1)}#A #S{border-top:1px {select:Cover Dividers} {color:Cover Description Divider}}#A #S a{border-left:1px {select:Cover Dividers} {color:Cover Description Divider}}#A #S a:last-child{border-right:1px {select:Cover Dividers} {color:Cover Description Divider}}{block:ifcoverimage}#A #C{height:300px;padding:135px 0}{/block:ifcoverimage}{block:ifcoverlogoimage}#A #C{padding:60px 0}{/block:ifcoverlogoimage}{block:ifnotpostshadow}#A #N{border-bottom:1px {select:Navigation Dividers} {color:navigation bar Dividers};box-shadow:0 0 0 rgba(0,0,0,.1)}{/block:ifnotpostshadow}{block:ifpostborder}.X .P,.X .media{border:8px solid {color:Post Background}}{/block:ifpostborder}{block:ifpostrounded}.X,.X .P,.X .media{border-radius:4px}.X .P img{border-radius:{block:ifnotpostborder}4{/block:ifnotpostborder}{block:ifpostborder}2{/block:ifpostborder}px}.X .P .P-H a.G{border-radius:4px}.X .P .P-H .H-2 .U_C{border-top-right-radius:4px;border-top-left-radius:4px}.X .P .P-H .H-2 .L_C{border-bottom-right-radius:4px;border-bottom-left-radius:4px}{/block:ifpostrounded}{block:ifnotphotocaptions}.X .P-post{display:none}{/block:ifnotphotocaptions}{block:ifinfinitescrolling}#P{opacity:0 !important}#Z{margin:0 auto 100px auto !important}{/block:ifinfinitescrolling}{block:ifstickednavigationbar}.stick{position:fixed;top:0;background:{color:navigation bar}}.extra-padding{padding:85px 0 0 0 !important}{/block:ifstickednavigationbar}{block:ifwidepermalinkpage}#PML .X,#PML .PB{width:700px !important}{/block:ifwidepermalinkpage}{block:ifnotanimatedloading}#Z{opacity:1}#L{opacity:0}{/block:ifnotanimatedloading}{CustomCSS}</style></head>

<body id="{block:indexpage}I{/block:indexpage}{block:Permalink}PML{/block:Permalink}" class="{block:ifstickednavigationbar}sb{/block:ifstickednavigationbar}{block:ifinfinitescrolling} is{/block:ifinfinitescrolling}{block:ifinfinitescrollinganimated} isa{/block:ifinfinitescrollinganimated}">

<div id="A"><div id="C">{block:ifCoverLogoImage}<a href="/"><img src="{image:Cover Logo}" alt="{title}"/></a>{/block:ifCoverLogoImage}{block:ifnotCoverLogoImage}<h1><a href="/">{title}</a></h1>{/block:ifnotCoverLogoImage}</div>{block:description}<div id="D"><div id="DC">{description}</div></div>{/block:description}

{block:ifshowsocialicons}<div id="S">{Block:ifURLTwitter}<a href="{text:URL Twitter}" class="twitter" target="_blank">1</a>{/Block:ifURLTwitter}{Block:ifURLFacebook}<a href="{text:URL Facebook}" class="facebook" target="_blank">2</a>{/Block:ifURLFacebook}{Block:ifURLVimeo}<a href="{text:URL Vimeo}" class="vimeo" target="_blank">3</a>{Block:ifURLVimeo}{Block:ifURLFlickr}<a href="{text:URL Flickr}" class="flickr" target="_blank">4</a>{/Block:ifURLFlickr}{Block:ifURLGooglePlus}<a href="{text:URL Google Plus}" class="google" target="_blank">5</a>{/Block:ifURLGooglePlus}{Block:ifURLYoutube}<a href="{text:URL Youtube}" class="youtube" target="_blank">u</a>{/Block:ifURLYoutube}{Block:ifURLPinterest}<a href="{text:URL Pinterest}" class="pinterest" target="_blank">6</a>{/Block:ifURLPinterest}{Block:ifURLLinkedin}<a href="{text:URL Linkedin}" class="linkedin" target="_blank">7</a>{/Block:ifURLLinkedin}{Block:ifURLDribble}<a href="{text:URL Dribble}" class="dribble" target="_blank">8</a>{/Block:ifURLDribble}{Block:ifURLStumbleupon}<a href="{text:URL Stumbleupon}" class="stumbleupon" target="_blank">9</a>{/Block:ifURLStumbleupon}{Block:ifURLLastfm}<a href="{text:URL Lastfm}" class="lastfm" target="_blank">0</a>{/Block:ifURLLastfm}{Block:ifURLSpotify}<a href="{text:URL Spotify}" class="spotify" target="_blank">=</a>{/Block:ifURLSpotify}{Block:ifURLInstagram}<a href="{text:URL Instagram}" class="instagram" target="_blank">q</a>{/Block:ifURLInstagram}{Block:ifURLBehance}<a href="{text:URL Behance}" class="behance" target="_blank">e</a>{/Block:ifURLBehance}{Block:ifURLGithub}<a href="{text:URL Github}" class="github" target="_blank">r</a>{/Block:ifURLGithub}{Block:ifURLSoundcloud}<a href="{text:URL Soundcloud}" class="soundcloud" target="_blank">t</a>{/Block:ifURLSoundcloud}</div>{/block:ifshowsocialicons}<div id="N_height"></div><div id="N">{block:AskEnabled}<li><a href="/ask">{text:Ask Title}</a></li>{/block:AskEnabled}{block:SubmissionsEnabled}<li><a href="/submit">Submit</a></li>{/block:SubmissionsEnabled}{block:ifshowarchivelink}<li><a href="/archive">{text:Archive title}</a></li>{/block:ifshowarchivelink}{block:ifshowrandomlink}<li><a href="/random">Random</a></li>{/block:ifshowrandomlink}{block:ifshowrsslink}<li><a href="{RSS}">RSS</a></li>{/block:ifshowrsslink}{block:ifshowextralink}<li><a id="extralink-click">Link</a></li>{/block:ifshowextralink}{block:HasPages}{block:Pages}<li><a href="{URL}" title="{Label}">{Label}</a></li>{/block:Pages}{/block:HasPages}{block:ifCustomLink1Title}<li><a href="{text:Custom Link 1}">{text:Custom Link 1 Title}</a></li>{/block:ifCustomLink1Title}{block:ifCustomLink2Title}<li><a href="{text:Custom Link 2}">{text:Custom Link 2 Title}</a></li>{/block:ifCustomLink2Title}{block:ifCustomLink3Title}<li><a href="{text:Custom Link 3}">{text:Custom Link 3 Title}</a></li>{/block:ifCustomLink3Title}{block:ifCustomLink4Title}<li><a href="{text:Custom Link 4}">{text:Custom Link 4 Title}</a></li>{/block:ifCustomLink4Title}{block:ifCustomLink5Title}<li><a href="{text:Custom Link 5}">{text:Custom Link 5 Title}</a></li>{/block:ifCustomLink5Title}<li id="zt"><a href="http://goo.gl/VliU9B">Theme</a></li></div></div>

<div id="Z-wrapper">

<div id="L"></div>

<div id="Z" class="{select:Post Width}">

{block:Posts}<article id="{PostID}" class="X{block:HasTags}{block:Tags} {Tag}{/block:Tags}{/block:HasTags}{block:ifwideposts} big-post{/block:ifwideposts}">{block:Answer}<div class="T"><div class="QN"><b>{Question}</b><div class="S"><br>Asked by {Asker}</div></div>{answer}</div>{/block:Answer}{block:Chat}<div class="T">{block:Title}<div class="TT"><h2>{Title}</h2></div>{/block:Title}{block:Lines}<div class="{Alt} user_{UserNumber}">{block:Label}<b>{Label}</b>{/block:Label} {Line}</div>{/block:Lines}</div>{/block:Chat}{block:Link}<div class="T"><a class="L" href="{URL}">{Name}<span>.</span></a>{block:Description}{Description}{/block:Description}</div>{/block:Link}{block:Text}<div class="T">{block:Title}<div class="TT"><h2>{Title}</h2></div>{/block:Title}{Body}</div>{/block:Text}{block:Quote}<div class="T Q"><h3>“ {Quote} ”</h3><div class="S">—    {Source}</div></div>{/block:Quote}{block:Photo}<div class="P">{block:indexpage}<div class="P-H"><a class="G" href="{permalink}"></a>{block:ifnothoverstyle2}{block:ifhoverstyle1}<div class="H-2"><div class="U_C"><a href="{permalink}" target="_blank">Posted {Timeago}</a></div><div class="L_C"><a href="{ReblogURL}" target="_blank">reblog this post</a></div></div>{/block:ifhoverstyle1}{/block:ifnothoverstyle2}{block:ifhoverstyle2}<div class="H-1"><a class="L-B">{LikeButton size="17 color=white"}</a><a class="R-B" href="{Reblogurl}" target="_blank">c</a><a class="P-B" href="{permalink}" target="_blank">v</a><div class="lightbox"><a class="lightbox-button" href="{PhotoURL-HighRes}">j</a></div></div>{/block:ifhoverstyle2}{block:ifwideposts}<img src="{PhotoURL-HighRes}"alt="{PhotoAlt}">{/block:ifwideposts}{block:ifnotwideposts}<img src="{PhotoURL-500}"alt="{PhotoAlt}">{/block:ifnotwideposts}</div>{/block:indexpage}{block:permalinkpage}{LinkOpenTag}<img src="{PhotoURL-HighRes}"alt="{PhotoAlt}">{LinkCloseTag}{/block:permalinkpage}</div>{/block:Photo}{block:Photoset}<div class="P"><div class="PG photoset-grid" data-layout="{PhotosetLayout}" data-id="photoset{PostID}" data-layout="{PhotosetLayout}" data-id="photoset{PostID}">{block:Photos}<img src="{PhotoURL-HighRes}"{block:HighRes}data-highres="{PhotoURL-HighRes}"{/block:HighRes}{block:Caption}alt="{Caption}"{/block:caption}/>{/block:Photos}</div></div>{/block:Photoset}{block:Audio}<div class="media">{block:IndexPage}<div class="larger-width">{AudioEmbed-640}</div><div class="normal-width">{AudioEmbed-400}</div>{/block:IndexPage}{block:permalinkpage}<div class="R_L_1">{AudioEmbed-640}</div><div class="R_L_2">{AudioEmbed-500}</div><div class="R_L_3">{AudioEmbed-250}</div>{/block:permalinkpage}</div>{/block:Audio}{block:Video}<div class="media">{block:IndexPage}<div class="larger-width">{VideoEmbed-700}</div><div class="normal-width">{VideoEmbed-400}</div>{/block:IndexPage}{block:permalinkpage}<div class="R_L_1">{VideoEmbed-700}</div><div class="R_L_2">{VideoEmbed-500}</div><div class="R_L_3">{VideoEmbed-250}</div>{/block:permalinkpage}</div>{/block:Video}{block:date}<div class="{block:Answer}T-post{/block:Answer}{block:Chat}T-post{/block:Chat}{block:Link}T-post{/block:Link}{block:Text}T-post{/block:Text}{block:Quote}T-post{/block:Quote}{block:Video}T-post{/block:Video}{block:Audio}T-post{/block:Audio}{block:Photo}{block:indexpage}P{/block:indexpage}{block:permalinkpage}T{/block:permalinkpage}-post{/block:Photo}{block:Photoset}T-post{/block:Photoset}">{block:Caption}<div class="captions">{Caption}</div>{/block:Caption}<div class="D">{block:ifshowposttags}{block:HasTags}<div class="tags">{block:Tags}<a href="{TagURL}">#{Tag}</a>{/block:Tags}</div>{/block:HasTags}{/block:ifshowposttags}<a href="{permalink}">{TimeAgo}</a>{block:NoteCount} /  <a href="{permalink}">{NoteCountWithLabel}</a>{/block:NoteCount}{block:ifshowpostbuttons}<div class="buttons"><span>{ReblogButton size="14"}</span><span>{LikeButton size="14"}</span></div>{/block:ifshowpostbuttons}</div></div>{/block:date}</article>{block:PermalinkPage}{block:date}{block:PostNotes}<div class="PB"><h2>{NoteCountWithLabel}</h2>{PostNotes}</div>{/block:PostNotes}{/block:date}{/block:PermalinkPage}{/block:Posts}</div>{block:indexpage}{block:Pagination}<div id="P">{block:PreviousPage}<a href="{PreviousPage}">←   Newer</a>{/block:PreviousPage}{block:JumpPagination length="5"}{block:CurrentPage}<a class="current">{PageNumber}</a>{/block:CurrentPage}{block:JumpPage}<a href="{URL}">{PageNumber}</a>{/block:JumpPage}{/block:JumpPagination}{block:NextPage}<a href="{NextPage}" id="nextPage">Older   →</a>{/block:NextPage}</div>{/block:Pagination}{/block:indexpage}

</div>

<script src="//code.jquery.com/jquery-1.11.2.min.js"></script><script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script><script src="https://static.tumblr.com/3zmswwt/7s4o5n1qr/s.js" type="text/javascript"></script>

</body>
</html>
