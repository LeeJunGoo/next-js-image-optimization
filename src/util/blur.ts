'use server';

import { getPlaiceholder } from 'plaiceholder';

const getBlurImg = async (src: string) => {
  try {
    const buffer = await fetch(src).then(async (res) => Buffer.from(await res.arrayBuffer()));

    const {
      metadata: { height, width, format },
      ...plaiceholder
    } = await getPlaiceholder(buffer, { size: 10 });

    return {
      ...plaiceholder,
      img: { src, height, width, format },
    };
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export default getBlurImg;
