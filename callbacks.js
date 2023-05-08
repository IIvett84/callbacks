// if a function is a first class citizen

function each(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    cb(item);
  }
}

function create(tag, options) {
  const el = document.createElement(tag);

  const keys = Object.keys(options);
  for (const key of keys) {
    el[key] = options[key];
  }

  return el;
}

function upper(elem) {
  console.log(elem.toUpperCase());
}

const test = upper;

const names = ["Adam", "Evi", "Lilla"];

each(names, test);

/*
  {
    arr = names;
    cb = upper;
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
    cb(item);
    }
  }
*/

const kittens = [
  {
    id: "385",
    url: "https://cdn2.thecatapi.com/images/385.jpg",
    width: 400,
    height: 600,
  },
  {
    id: "7ka",
    url: "https://cdn2.thecatapi.com/images/7ka.jpg",
    width: 500,
    height: 333,
  },
  {
    id: "a7a",
    url: "https://cdn2.thecatapi.com/images/a7a.jpg",
    width: 750,
    height: 750,
  },
  {
    id: "b10",
    url: "https://cdn2.thecatapi.com/images/b10.jpg",
    width: 500,
    height: 333,
  },
  {
    id: "b6r",
    url: "https://cdn2.thecatapi.com/images/b6r.jpg",
    width: 500,
    height: 335,
  },
  {
    id: "b96",
    url: "https://cdn2.thecatapi.com/images/b96.jpg",
    width: 500,
    height: 331,
  },
  {
    id: "bgr",
    url: "https://cdn2.thecatapi.com/images/bgr.jpg",
    width: 500,
    height: 308,
  },
  {
    id: "bi9",
    url: "https://cdn2.thecatapi.com/images/bi9.jpg",
    width: 500,
    height: 333,
  },
  {
    id: "dm7",
    url: "https://cdn2.thecatapi.com/images/dm7.jpg",
    width: 3648,
    height: 2736,
  },
  {
    id: "r0s90j0I8",
    url: "https://cdn2.thecatapi.com/images/r0s90j0I8.jpg",
    width: 2093,
    height: 2105,
  },
];

// [{ url: '....' }, {}, ...]

const root = document.querySelector("#root");

each(kittens, function(kitten) {
  const img = create('img', { src: kitten.url });

  // II. eset
  // Amikor van letezo dom referencia
  img.addEventListener('click', function() {
    console.log('Miau');
  });

  root.append(img);
});

/*kittens.forEach(function(kitten) {
  const img = create('img', { src: kitten.url });
  root.append(img);
});*/

function getMax(items, isGreater) {
  let max = items[0];

  /*each(items, function(item) {
    if (isGreater(item, max)) {
      max = item;
    }
  })*/

  /*items.forEach(function(item) {
    if (isGreater(item, max)) {
      max = item;
    }
  });*/

  for (let i = 0; i < items.length; i++) {
    if (isGreater(items[i], max)) {
      max = items[i];
    }
  }

  return max;
}

const cat = getMax(kittens, function (kittenA, kittenB) {
  return kittenA.width > kittenB.width;
});

//const img = create("img", { src: cat.url });
//root.append(img);

// I. eset
// querySelectorAll

const images = document.querySelectorAll('img');

images.forEach(function(current) {
  current.addEventListener('dblclick', function(event) {
    const src = event.target.src;
    window.open(src, '__blank');
  });

  console.log('valami');
});
