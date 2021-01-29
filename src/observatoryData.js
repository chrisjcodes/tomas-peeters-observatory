import * as R from "ramda";
import cuid from "cuid";

function createObservatoryEntry({
  name,
  logoFileName,
  thumbFileName,
  videoUrlId,
  copyTop,
  copyBottom,
  sequence,
}) {
  return {
    id: cuid(),
    name,
    logoFileName,
    thumbFileName,
    videoUrlId,
    copyTop,
    copyBottom,
    sequence: sequence.map((sequenceItem) => ({ id: cuid(), ...sequenceItem })),
  };
}

export const allObservatories = [
  createObservatoryEntry({
    name: "i",
    logoFileName: "logo.svg",
    thumbFileName: "thumb.jpeg",
    videoUrlId: "288344114",
    copyTop: "The Art Of Using Form To See Emptiness",
    copyBottom:
      "At Zero Distance From My Center My Face Is Completely Transparent",
    sequence: [
      {
        copyA: "in observatory i sunlight is radiating on an empty tunnel",
        copyB: "projecting a ring of light",
        image: "a.jpg",
      },
      {
        copyA: "this luminous ring ocilates between my face ",
        copyB: "and the face on the other end of the tunnel",
        image: "b.jpg",
      },
      {
        copyA: "within this radiant ring i see the emptiness ",
        copyB: "of space and the face on the other end of the tunnel",
        image: "c.jpg",
      },
      {
        copyA: "within this radiant ring i see the emptiness of ",
        copyB: "space flowing through my face",
        image: "d.jpg",
      },
      {
        copyA: "suddenly i see that my end of the",
        copyB: "tunnel is utterly empty of my face",
        image: "e.jpg",
      },
      {
        copyA: "here at zero distance i am seeing the empty ",
        copyB: "space i am looking out from",
        image: "f.jpg",
      },
    ],
  }),
  createObservatoryEntry({
    name: "ii",
    logoFileName: "logo.svg",
    thumbFileName: "thumb.jpeg",
    videoUrlId: "288344114",
    copyTop: "The Art Of Using Form To See Emptiness",
    copyBottom:
      "At Zero Distance From My Center My Face Is Completely Transparent",
    sequence: [
      {
        copyA: "in observatory i sunlight is radiating on an empty tunnel",
        copyB: "projecting a ring of light",
        image: "a.jpg",
      },
      {
        copyA: "this luminous ring ocilates between my face ",
        copyB: "and the face on the other end of the tunnel",
        image: "b.jpg",
      },
      {
        copyA: "within this radiant ring i see the emptiness ",
        copyB: "of space and the face on the other end of the tunnel",
        image: "c.jpg",
      },
      {
        copyA: "within this radiant ring i see the emptiness of ",
        copyB: "space flowing through my face",
        image: "d.jpg",
      },
      {
        copyA: "suddenly i see that my end of the",
        copyB: "tunnel is utterly empty of my face",
        image: "e.jpg",
      },
      {
        copyA: "here at zero distance i am seeing the empty ",
        copyB: "space i am looking out from",
        image: "f.jpg",
      },
    ],
  }),
  createObservatoryEntry({
    name: "iii",
    logoFileName: "logo.svg",
    thumbFileName: "thumb.jpeg",
    videoUrlId: "288344114",
    copyTop: "The Art Of Using Form To See Emptiness",
    copyBottom:
      "At Zero Distance From My Center My Face Is Completely Transparent",
    sequence: [
      {
        copyA: "in observatory i sunlight is radiating on an empty tunnel",
        copyB: "projecting a ring of light",
        image: "a.jpg",
      },
      {
        copyA: "this luminous ring ocilates between my face ",
        copyB: "and the face on the other end of the tunnel",
        image: "b.jpg",
      },
      {
        copyA: "within this radiant ring i see the emptiness ",
        copyB: "of space and the face on the other end of the tunnel",
        image: "c.jpg",
      },
      {
        copyA: "within this radiant ring i see the emptiness of ",
        copyB: "space flowing through my face",
        image: "d.jpg",
      },
      {
        copyA: "suddenly i see that my end of the",
        copyB: "tunnel is utterly empty of my face",
        image: "e.jpg",
      },
      {
        copyA: "here at zero distance i am seeing the empty ",
        copyB: "space i am looking out from",
        image: "f.jpg",
      },
    ],
  }),
  createObservatoryEntry({
    name: "iv",
    logoFileName: "logo.svg",
    thumbFileName: "thumb.jpeg",
    videoUrlId: "288344114",
    copyTop: "The Art Of Using Form To See Emptiness",
    copyBottom:
      "At Zero Distance From My Center My Face Is Completely Transparent",
    sequence: [
      {
        copyA: "in observatory i sunlight is radiating on an empty tunnel",
        copyB: "projecting a ring of light",
        image: "a.jpg",
      },
      {
        copyA: "this luminous ring ocilates between my face ",
        copyB: "and the face on the other end of the tunnel",
        image: "b.jpg",
      },
      {
        copyA: "within this radiant ring i see the emptiness ",
        copyB: "of space and the face on the other end of the tunnel",
        image: "c.jpg",
      },
      {
        copyA: "within this radiant ring i see the emptiness of ",
        copyB: "space flowing through my face",
        image: "d.jpg",
      },
      {
        copyA: "suddenly i see that my end of the",
        copyB: "tunnel is utterly empty of my face",
        image: "e.jpg",
      },
      {
        copyA: "here at zero distance i am seeing the empty ",
        copyB: "space i am looking out from",
        image: "f.jpg",
      },
    ],
  }),
  createObservatoryEntry({
    name: "v",
    logoFileName: "logo.svg",
    thumbFileName: "thumb.jpeg",
    videoUrlId: "288344114",
    copyTop: "The Art Of Using Form To See Emptiness",
    copyBottom:
      "At Zero Distance From My Center My Face Is Completely Transparent",
    sequence: [
      {
        copyA: "in observatory i sunlight is radiating on an empty tunnel",
        copyB: "projecting a ring of light",
        image: "a.jpg",
      },
      {
        copyA: "this luminous ring ocilates between my face ",
        copyB: "and the face on the other end of the tunnel",
        image: "b.jpg",
      },
      {
        copyA: "within this radiant ring i see the emptiness ",
        copyB: "of space and the face on the other end of the tunnel",
        image: "c.jpg",
      },
      {
        copyA: "within this radiant ring i see the emptiness of ",
        copyB: "space flowing through my face",
        image: "d.jpg",
      },
      {
        copyA: "suddenly i see that my end of the",
        copyB: "tunnel is utterly empty of my face",
        image: "e.jpg",
      },
      {
        copyA: "here at zero distance i am seeing the empty ",
        copyB: "space i am looking out from",
        image: "f.jpg",
      },
    ],
  }),
];

export const observatoriesByName = R.indexBy(R.prop("name"), allObservatories);
