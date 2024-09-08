// Import the Webpack module API types
/// <reference types="webpack-env" />

function importAll(r: __WebpackModuleApi.RequireContext) {
    let images: { [key: string]: string } = {};
    r.keys().forEach((item: string) => {
        images[item.replace("./", "")] = r(item);
    });
    return images;
}

const weddingVerticalImages = importAll(
    require.context("../components/img/Wedding/verticalWeddings", false, /\.(gif|png|jpe?g|svg)$/)
);
const weddingHorizontalImages = importAll(
    require.context("../components/img/Wedding/horizontalWeddings", false, /\.(gif|png|jpe?g|svg)$/)
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
    require.context("../components/img/Photosessions/verticalPhotos", false, /\.(gif|png|jpe?g|svg)$/)
);
const hospitalImages = importAll(
    require.context("../components/img/Hospital", false, /\.(png|jpe?g|svg)$/)
);
const aidImages = importAll(
    require.context("../components/img/AID", false, /\.(png|jpe?g|svg)$/)
);
const restorationIconsImages = importAll(
    require.context("../components/img/Restoration/icons", false, /\.(png|jpe?g|svg)$/)
);
const categoriesImages = importAll(
    require.context("../components/img/categories", false, /\.(png|jpe?g|svg)$/)
);

const categoriesData = [
    { id: 1, title: "Weddings", shortTitle: "Weddings", imgFile: "1_weddings.jpg" },
    { id: 2, title: "Flowers", shortTitle: "Flowers", imgFile: "2_flowers_1.jpg" },
    { id: 3, title: "Children's parties", shortTitle: "Childrens", imgFile: "4_childrens_parties.jpg" },
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

export const aidPhotos = Object.keys(aidImages).map(
    (key, index) => ({
        id: index,
        title: `aidPhoto${index}`,
        img: aidImages[key],
    })
);

export const restoredPhotos = Object.keys(restorationImages).map(
    (key, index) => ({
        id: index,
        title: `Restore${index}`,
        img: restorationImages[key],
    })
);

export const weddingPhotosVertical = Object.keys(weddingVerticalImages).map((key, index) => ({
    id: index,
    title: `weddingPhoto${index}`,
    img: weddingVerticalImages[key],
}));

export const weddingHorizontal = Object.keys(weddingHorizontalImages).map((key, index) => ({
    id: index,
    title: `weddingPhoto${index}`,
    img: weddingHorizontalImages[key],
}));

export const photosessionsHorizontal = Object.keys(photosessionsHorizontalImages).map(
    (key, index) => ({
        id: index,
        title: `photosessionsHorizontal${index}`,
        img: photosessionsHorizontalImages[key],
    })
);

export const photosessionsVertical = Object.keys(photosessionsVerticalImages).map(
    (key, index) => ({
        id: index,
        title: `photosessionsVertical${index}`,
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