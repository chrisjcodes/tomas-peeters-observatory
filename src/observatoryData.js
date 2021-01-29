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
        copyA: "this luminous ring ocilates between my face",
        copyB: "and the face on the other end of the tunnel",
        image: "b.jpg",
      },
      {
        copyA: "within this radiant ring i see the emptiness of space",
        copyB: "flowing through my face",
        image: "c.jpg",
      },
      {
        copyA: "suddenly i see that my end of the",
        copyB: "tunnel is utterly empty of my face",
        image: "d.jpg",
      },
      {
        copyA: "here at zero distance i am seeing the empty",
        copyB: "space i am looking out from",
        image: "e.jpg",
      },
      {
        copyA: "being empty",
        copyB: "is my direct experience of myself",
        image: "f.jpg",
      },
    ],
  }),
  createObservatoryEntry({
    name: "ii",
    logoFileName: "logo.svg",
    thumbFileName: "thumb.jpeg",
    videoUrlId: "288344114",
    copyTop: "the art of using form to see i am everywhere",
    copyBottom:
      "at zero distance all of empty space is looking out of my centerless eye",
    sequence: [
      {
        copyA:
          "in observatory ii sunlight is refracting inside a transparent oculus",
        copyB: "revealing its empty center",
        image: "a.jpg",
      },
      {
        copyA: "at no distance from this empty eye",
        copyB: "appears an upside down face",
        image: "b.jpg",
      },
      {
        copyA: "perplexed, i look into my own eye",
        copyB: "at zero distance from my seeing",
        image: "c.jpg",
      },
      {
        copyA: "suddenly, i perceive that my seeing",
        copyB: "has no up or down",
        image: "d.jpg",
      },
      {
        copyA: "my centerless eye",
        copyB: "has no inside or outside",
        image: "e.jpg",
      },
      {
        copyA: "being everywhere",
        copyB: "is my direct experience of myself",
        image: "f.jpg",
      },
    ],
  }),
  createObservatoryEntry({
    name: "iii",
    logoFileName: "logo.svg",
    thumbFileName: "thumb.jpeg",
    videoUrlId: "288344114",
    copyTop: "the art of using form to see i am everything",
    copyBottom:
      "at zero distance the whole world is looking out of my faceless space",
    sequence: [
      {
        copyA:
          "in observatory iii sunlight is reflecting between opposing mirrors",
        copyB: "exposing my faceless space",
        image: "a.jpg",
      },
      {
        copyA: "within this faceless reflection i see the emptiness of space",
        copyB: "suspended in front of me",
        image: "b.jpg",
      },
      {
        copyA: "this empty space",
        copyB: "is full of the world",
        image: "c.jpg",
      },
      {
        copyA: "the turbulant world is pulled into the empty space",
        copyB: "i am looking out from",
        image: "d.jpg",
      },
      {
        copyA: "suddenly,what i am looking at",
        copyB: "is where i am seeing from",
        image: "e.jpg",
      },
      {
        copyA: "being everything",
        copyB: "is my direct experience of myself",
        image: "f.jpg",
      },
    ],
  }),
  createObservatoryEntry({
    name: "iv",
    logoFileName: "logo.svg",
    thumbFileName: "thumb.jpeg",
    videoUrlId: "288344114",
    copyTop: "the art of using form to see i am non existent",
    copyBottom: "at zero distance from my center my faceless space is absent",
    sequence: [
      {
        copyA: "in observatory iv sunlight is illuminating a mobius loop",
        copyB: "surrounding my face",
        image: "a.jpg",
      },
      {
        copyA: "as i move my head through this infinite loop",
        copyB: "my face starts to disappear",
        image: "b.jpg",
      },
      {
        copyA: "at zero distance this infinite space",
        copyB: "is reflecting my absence",
        image: "c.jpg",
      },
      {
        copyA: "looking inward i see no boundary around this faceless space",
        copyB: "i am looking out from",
        image: "d.jpg",
      },
      {
        copyA: "suddenly i see that my faceless space at center",
        copyB: "is not appearing. in my experience",
        image: "e.jpg",
      },
      {
        copyA: "being nonexistent",
        copyB: "is my direct experience of myself",
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
        copyA: "",
        copyB: "",
        image: "a.jpg",
      },
      {
        copyA: "",
        copyB: "",
        image: "b.jpg",
      },
      {
        copyA: "",
        copyB: "",
        image: "c.jpg",
      },
      {
        copyA: "",
        copyB: "",
        image: "d.jpg",
      },
      {
        copyA: "",
        copyB: "",
        image: "e.jpg",
      },
      {
        copyA: "",
        copyB: "space i am looking out from",
        image: "f.jpg",
      },
    ],
  }),
];

export const observatoriesByName = R.indexBy(R.prop("name"), allObservatories);
