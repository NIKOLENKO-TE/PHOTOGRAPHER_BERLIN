// data.ts
function importAll(r: any) {
  let images: { [key: string]: string } = {};
  r.keys().map((item: string) => {
    return images[item.replace("./", "")] = r(item);
  });
  return images;
}

const weddingImages = importAll(
  require.context("../components/img/Wedding", false, /\.(png|jpe?g|svg)$/)
);
const flowersImages = importAll(
  require.context("../components/img/Flowers", false, /\.(png|jpe?g|svg)$/)
);
const childrensImages = importAll(
  require.context("../components/img/Childrens", false, /\.(png|jpe?g|svg)$/)
);
const restorationImages = importAll(
  require.context("../components/img/Restoration", false, /\.(png|jpe?g|svg)$/)
);
const photosessionsHorizontalImages = importAll(
  require.context("../components/img/Photosessions/horizontalPhotos", false, /\.(png|jpe?g|svg)$/)
);
const photosessionsVerticalImages = importAll(
  require.context("../components/img/Photosessions/verticalPhotos", false, /\.(png|jpe?g|svg)$/)
);
const hospitalImages = importAll(
  require.context("../components/img/Hospital", false, /\.(png|jpe?g|svg)$/)
);
const restorationIconsImages = importAll(
  require.context(
    "../components/img/Restoration/icons",
    false,
    /\.(png|jpe?g|svg)$/
  )
);
const categoriesImages = importAll(
  require.context("../components/img/categories", false, /\.(png|jpe?g|svg)$/)
);
const categoriesData = [
  { id: 1, title: "Weddings", shortTitle: "Weddings", imgFile: "1_weddings.jpg" },
  { id: 2, title: "Flowers", shortTitle: "Flowers", imgFile: "2_flowers_1.jpg" },
  { id: 3, title: "Children's parties", shortTitle: "Children", imgFile: "4_childrens_parties.jpg" },
  { id: 4, title: "Restorations", shortTitle: "Restorations", imgFile: "5_restorations.jpg" },
  { id: 5, title: "Photosessions", shortTitle: "Photosessions", imgFile: "3_photosessions.jpg" },
  { id: 6, title: "Humanitarian AID", shortTitle: "AID", imgFile: "6_humanitarian_aid.jpg" },
  { id: 7, title: "War medicine", shortTitle: "War medicine", imgFile: "7_war_medicine.jpg" },
  { id: 8, title: "About me", shortTitle: "About me", imgFile: "nikolenkote.jpg" },
];
export const categoryPhotos = categoriesData.map((category) => ({
  id: category.id,
  title: category.title,
  shortTitle: category.shortTitle,
  img: categoriesImages[category.imgFile],
}));

export const weddingPhotos = Object.keys(weddingImages).map((key, index) => ({
  id: index,
  title: `weddingPhoto${index}`,
  img: weddingImages[key],
}));

export const hospitalPhotos = Object.keys(hospitalImages).map((key, index) => ({
  id: index,
  title: `hospitalPhoto${index}`,
  img: hospitalImages[key],
}));

export const flowersPhotos = Object.keys(flowersImages).map((key, index) => ({
  id: index,
  title: `flowersPhoto${index}`,
  img: flowersImages[key],
}));

export const childrensPhotos = Object.keys(childrensImages).map(
  (key, index) => ({
    id: index,
    title: `childrensPhoto${index}`,
    img: childrensImages[key],
  })
);

export const restoredPhotos = Object.keys(restorationImages).map(
  (key, index) => ({
    id: index,
    title: `Restore${index}`,
    img: restorationImages[key],
  })
);
export const photosessionsHorizontal = Object.keys(photosessionsHorizontalImages).map(
  (key, index) => ({
    id: index,
    title: `Restore${index}`,
    img: photosessionsHorizontalImages[key],
  })
);
export const photosessionsVertical = Object.keys(photosessionsVerticalImages).map(
  (key, index) => ({
    id: index,
    title: `Restore${index}`,
    img: photosessionsVerticalImages[key],
  })
);

export const orderRestorePhotos = Object.keys(restorationIconsImages).map(
  (key, index) => ({
    id: index,
    title: `orderRestorePhotos${index}`,
    img: restorationIconsImages[key],
  })
);
