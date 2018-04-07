var imageURLS = [
    "https://www.flickr.com/photos/bensonben/19322715828/in/album-72157650662329202/",
    "https://www.flickr.com/photos/bensonben/15898159137/in/album-72157650662329202/",
    "https://www.flickr.com/photos/bensonben/27956404733/in/album-72157650662329202/",
    "https://www.flickr.com/photos/bensonben/16141850160/in/dateposted-public/"
];

function getURL() {
    var img = 'background src=\"';
    var randomIndex = Math.floor(Math.random() * imageURLs.length);
    img += imageURLs[randomIndex];
    img += '/>';
    document.getElementById('background').innerHTML = img;
}