const ShareTweet = (content, author) => {   
    return (
    "https://twitter.com/intent/tweet?hashtags=famousquotes&text="
    + content
    + " -- " 
    + author
    )
}

const ShareTumblr = (content) => {   
    return (
    "https://www.tumblr.com/widgets/share/tool?posttype=famousquote&tags=famousquotes&caption=Zig%20Ziglar&content="
    + content
    + "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
    )
}
export {ShareTweet, ShareTumblr}

//console.log(ShareTweet("asdfhask djh askfd", "asdf"))