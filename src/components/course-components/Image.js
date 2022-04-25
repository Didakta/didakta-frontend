import "../../styles/image.css";

const images = [
  {
    src: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/254825/530701/main-image",
    alt: "Bronze statuette of a rider wearing an elephant skin | 3rd century B.C.",
  },
  {
    src: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/241075/527182/main-image",
    alt: "Comic mask | Early Hellenistic | Greek, possibly Attic | late 4th–3rd century B.C.",
  },
  {
    src: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/248769/533755/main-image",
    alt: "Terracotta statuette of an actor | Late Classical | Greek, Attic | late 5th–early 4th century B.C.",
  },
  {
    src: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/254469/536408/main-image",
    alt: "Chalcedony oval gem | Hellenistic | Greek | 2nd century B.C.",
  },
  {
    src: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/255154/533046/main-image",
    alt: "Terracotta amphora (jar) | Archaic | Greek, Attic | ca. 530 B.C.",
  },
  {
    src: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/242835/497727/main-image",
    alt: "Gold, beryl, and garnet earring with head of a dolphin | Hellenistic | Cypriot | 2nd–1st century B.C.",
  },
  {
    src: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/257603/1393831/main-image",
    alt: "Marble head of a Ptolemaic queen | Hellenistic | Greek | ca. 270–250 B.C.",
  },
  {
    src: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/254502/533541/main-image",
    alt: "Bronze statue of Eros sleeping | Hellenistic period | Greek | 3rd–2nd century B.C.",
  },
  {
    src: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/252451/540859/main-image",
    alt: "Terracotta aryballos (oil flask) | Archaic | Greek, Attic | ca. 570 B.C.",
  },
  {
    src: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/251428/533670/main-image",
    alt: "Terracotta head of a woman | Hellenistic | Greek, South Italian, Tarentine | 3rd–2nd century B.C.",
  },
  {
    src: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/248483/538344/main-image",
    alt: "Marble grave stele with a family group | Late Classical | Greek, Attic | ca. 360 B.C.",
  },
  {
    src: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/255344/533265/main-image",
    alt: "Bronze statuette of an artisan with silver eyes | Late Hellenistic | Greek | ca. mid-1st century B.C.",
  },
  {
    src: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/251050/527775/main-image",
    alt: "Bronze horse | Geometric | Greek | 8th century B.C.",
  },
  {
    src: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/250951/543512/main-image",
    alt: "Marble akroterion | Classical | Greek, Attic | ca. 350–325 B.C.",
  },
  {
    src: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/255122/533420/main-image",
    alt: "Gold phiale (libation bowl) | Late Classical or Hellenistic | Greek | 4th–3rd century B.C.",
  },
  {
    src: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/254801/539744/main-image",
    alt: "Terracotta funerary plaque | Archaic | Greek, Attic | ca. 520–510 B.C.",
  },
  {
    src: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/256978/539470/main-image",
    alt: "Bronze helmet | Archaic | Greek, Cretan | late 7th century B.C.",
  },
  {
    src: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/249228/2063150/main-image",
    alt: "Bronze man and centaur | Geometric | Greek | mid-8th century B.C.",
  },
  {
    src: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/254589/533089/main-image",
    alt: "Terracotta head of a woman, probably a sphinx | Archaic | Greek | 1st quarter of the 5th century B.C.",
  },
  {
    src: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/250551/540832/main-image",
    alt: "Terracotta neck-amphora (jar) with lid and knob (27.16) | Archaic | Greek, Attic | ca. 540 B.C.",
  },
];
const Image = ({ index }) => {
  const bgImgStyle = {
    backgroundImage: `url(${images[index].src})`,
  };
  return (
    <div className="chapter-img-ct">
      <div style={bgImgStyle} className="chapter-img"></div>
    </div>
  );
};

export default Image;
