// ৭. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে।

const jsonLink = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => photos(data))
}

jsonLink();

const photos = photos => {
    photos.forEach(photo => displayPhotos(photo));
}

const displayPhotos = photo => {
    const displaySection = document.getElementById('display-section');
    const div = document.createElement('div');
    div.classList.add('border', 'border-yellow-700', 'rounded-2xl', 'p-4')
    div.innerHTML = `
        <img  onclick="photoInfo(${photo.id})" class="mx-auto mb-4" src="${photo.thumbnailUrl}" alt="">
        <p>${photo.title}</p>
    `
    displaySection.appendChild(div);
}

const photoInfo = id => {
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoto(data))
}

const displayPhoto = photo => {
    const displayInfo = document.getElementById('display-info')
    displayInfo.innerHTML = '';
    const div = document.createElement('div')
    div.innerHTML = `
        <div class="text-center w-2/4 mx-auto">
            <div class="grid gap-x-24 grid-cols-2 jsutify-center  mx-auto w-3/4 mt-8">
                <img class="" src="${photo.url}" alt="">
                <img class="my-auto" src="${photo.thumbnailUrl}" alt="">

            </div>
            <p>r${photo.title}</p>
        </div>
    `
    displayInfo.appendChild(div)
}